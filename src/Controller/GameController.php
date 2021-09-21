<?php

namespace App\Controller;

use App\Entity\ActivationCode;
use App\Entity\Game;
use App\Entity\Success;
use App\Entity\GameSuccess;
use App\Entity\ScoreStep;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\DeviceService;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Step;
use App\Repository\ActivationCodeRepository;
use App\Repository\GameRepository;
use App\Service\SuccessService;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @Route("/game", name="game_")
 */
class GameController extends AbstractController
{
    private Request $request;
    private SessionInterface $session;

    public function __construct(SessionInterface $session)
    {
        $this->request = Request::createFromGlobals();
        $this->session = $session;
    }

    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        if (!(new DeviceService())->isMobile() || $this->session->get('role') != 'user') {
            return $this->redirectToRoute('app_desktop');
        }
        return $this->render('game/index.html.twig');
    }

    /**
     * @Route("/team", name="team", methods={"POST"})
     */
    public function team(): Response
    {
        //On ira fetch en DB si une team n'a pas déjà pris ce nom
        //Si c'est bon on return le name et on renvoie sur le gameboard avec les assets updated
        //Si c'est pas bon on reste sur la meme page et on alerte le player
        //pour l'instant on y va sans réfléchir
        $this->session->set('teamname', json_decode($this->request->getContent())->teamname);
        $this->session->set('steps', []);
        $this->session->set('success', []);
        return $this->json($this->session->get('teamname'));
    }

    /**
     * @Route("/stepCode", name="stepCode", methods={"POST"})
     */
    public function stepCode(): Response
    {
        $step = $this->getDoctrine()
            ->getRepository(Step::class)
            ->findOneBy([
                'position' => json_decode($this->request->getContent())->step,
            ]);
        if ($step != null) {
            if ($step->getSolveCode() == json_decode($this->request->getContent())->code) {
                $steps = $this->session->get('steps');
                $steps[] = [
                    'step' => json_decode($this->request->getContent())->step,
                    'timeStart' => json_decode($this->request->getContent())->timeStart,
                    'timeEnd' => json_decode($this->request->getContent())->timeEnd
                ];
                $this->session->set('steps', $steps);
                (new SuccessService())->successCheck($step, $this->request, $this->session);
                if (json_decode($this->request->getContent())->step == '9') {
                    $this->session->set('finalScore', json_decode($this->request->getContent())->score + 50);
                    $this->session->set('finalTime', json_decode($this->request->getContent())->timeEnd);
                    $this->session->set('teamname', json_decode($this->request->getContent())->teamName);
                    if (isset($this->session->get('success')['Zoologiste'])) {
                        $this->session->set('finalScore', $this->session->get('finalScore') + 150);
                    }
                    $hintCount = 0;
                    foreach (json_decode($this->request->getContent())->hints as $hint) {
                        $hint->easy ? $hintCount++ : false;
                        $hint->hard ? $hintCount++ : false;
                        $hint->solution ? $hintCount++ : false;
                    }
                    $this->session->set('hintCount', $hintCount);
                }
                return $this->json([
                    'step' => 'step',
                    'status' => true
                ]);
            } else {
                $codeStep = $this->getDoctrine()
                    ->getRepository(Step::class)
                    ->findOneBy(['solveCode' => json_decode($this->request->getContent())->code]);
                if ($codeStep != null) {
                    return $this->json([
                        'step' => 'wrong',
                        'status' => true
                    ]);
                }
            }
        }
        return $this->json((new SuccessService())->bonusCheck($this->request, $this->session));
    }

    /**
     * @Route("/hintCode", name="hintCode", methods={"POST"})
     */
    public function hintCode(): Response
    {
        $step = $this->getDoctrine()
            ->getRepository(Step::class)
            ->findOneBy([
                'position' => json_decode($this->request->getContent())->step,
            ]);
        if ($step != null) {
            if ($step->getHintCode() == json_decode($this->request->getContent())->code) {
                return $this->json([
                    'step' => 'step',
                    'status' => true
                ]);
            } else {
                $codeHint = $this->getDoctrine()
                    ->getRepository(Step::class)
                    ->findOneBy(['hintCode' => json_decode($this->request->getContent())->code]);
                if ($codeHint != null) {
                    return $this->json([
                        'step' => 'wrong',
                        'status' => true
                    ]);
                }
            }
            return $this->json(false);
        }
    }
    /**
     * @Route("/leave", name="leave")
     */
    public function leave(): Response
    {
        $this->session->clear();
        return $this->render('game/leave.html.twig');
    }

    /**
     * @Route("/final", name="final", methods={"POST"})
     */
    public function final(EntityManagerInterface $em)
    {
        if ($this->session->get('wasCodeValid')) {
            $finalscorebonus = $this->session->get('finalScore') +
            json_decode($this->request->getContent())->bonusPoints;
            $game = (new Game())->setTeamName($this->session->get('teamname'))
                ->setFinalScore($finalscorebonus)
                ->setTotalTime($this->session->get('finalTime'))
                ->setNumberPlayers(json_decode($this->request->getContent())->numberPlayers)
                ->setSolvedAt((new DateTime()))
                ->setHintCount($this->session->get('hintCount'))
                ->setZip(json_decode($this->request->getContent())->Zip);
            //succes bonus:
            $gameMaster = $game->getHintCount() === 0; //500
            $bold = $game->getHintCount() < 5; //250
            $peacefull = $this->session->get('finalTime') <= 4800; //200

            $peacefull ? $game->setFinalScore($game->getFinalScore() + 200) : false;
            $bold ? $game->setFinalScore($game->getFinalScore() + 250) : false;
            $gameMaster ? $game->setFinalScore($game->getFinalScore() + 500) : false;

            $peacefull ? $this->session->set(
                'success',
                array_merge(
                    $this->session->get('success'),
                    ["Serein.e" => true]
                )
            ) : false;
            $bold ? $this->session->set(
                'success',
                array_merge(
                    $this->session->get('success'),
                    ["Ambitieux.se" => true]
                )
            ) : false;
            $gameMaster ? $this->session->set(
                'success',
                array_merge(
                    $this->session->get('success'),
                    ["Maître du jeu" => true]
                )
            ) : false;


            $em->persist($game);
            $em->flush();

            $qSuc = json_decode($this->request->getContent())->successes;
            $currentS = $this->session->get('success');
            foreach ($qSuc as $k => $s) {
                $currentS[$s] = true;
            }
            $this->session->set('success', $currentS);
            $successes = $this->getDoctrine()
                ->getRepository(Success::class)
                ->findAll();
            $achievedSuc = $this->session->get('success');
            foreach ($successes as $s) {
                $em->persist(
                    (new GameSuccess())->setGame($game)
                        ->setSuccess($s)
                        ->setAchieved(isset($achievedSuc[$s->getName()]))
                );
            }
            $em->flush();
            $steps = $this->getDoctrine()
                ->getRepository(Step::class)
                ->findAll();
            foreach ($steps as $index => $s) {
                $curStep = $this->session->get('steps')[$index];
                $em->persist(
                    (new ScoreStep())->setStep($s)
                        ->setGame($game)
                        ->setTimeStart($curStep['timeStart'])
                        ->setTimeEnd($curStep['timeEnd'])
                );
            }
            $em->flush();
            $codeAct = $this->getDoctrine()
                ->getRepository(ActivationCode::class)
                ->findOneBy(['id' => $this->session->get('activationCode')]);
            $codeAct->setUsedBy($game);
            $em->persist($codeAct);
            $em->flush();
            return $this->json([
                'status' => 'success',
                'message' => 'redirecting to scoreboard',
                'Maître du jeu' => $gameMaster,
                'Ambitieux' => $bold,
                'Serein' => $peacefull
            ]);
        }
        return $this->json([
            'status' => 'already used code',
            'message' => 'redirecting to scoreboard'
        ]);
    }

    /**
     * @Route("/scoreboard", name="scoreboard")
     */
    public function scoreboard(GameRepository $gameRepository, ActivationCodeRepository $actRepo): Response
    {
        if ($this->session->get('activationCode') != null) {
            $code = $actRepo->findOneBy(['id' => $this->session->get('activationCode')]);
            if ($code) {
                $currentGame = $code->getUsedBy();
                if ($currentGame) {
                    $rank = $gameRepository->getRank($currentGame);
                }
                if (!$currentGame) {
                    $rank = [0, 0];
                }
            }
        } else {
            $currentGame = "";
            $rank = "";
        }
        return $this->render('game/scoreBoard.html.twig', [
            'game' => $currentGame,
            'rank' => $rank
        ]);
    }
}
