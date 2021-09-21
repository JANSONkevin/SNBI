<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\GameSuccess;
use App\Entity\ScoreStep;
use App\Entity\Step;
use App\Entity\Success;
use App\Form\CodeType;
use App\Service\AdminService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\AverageDataService;

/**
 * @Route("/admin", name="admin_")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        $games = $this->getDoctrine()
            ->getRepository(Game::class)
            ->findAll();
        $gameSuccesses = $this->getDoctrine()
            ->getRepository(GameSuccess::class)
            ->findAllGrouped();
        $scoreStep = $this->getDoctrine()
            ->getRepository(ScoreStep::class)
            ->findAllGrouped();
        return $this->render('admin/index.html.twig', [
            'data' => (new AverageDataService())->prepareData($games, $gameSuccesses, $scoreStep)
        ]);
    }

    /**
     * @Route("/code", name="code", methods={"GET", "POST"})
     */
    public function code(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        $form = $this->createForm(CodeType::class);
        $data = "";
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $doc = $this->getDoctrine();
            $adminService = new AdminService();
            $data = $adminService->uploadCodes($form['file']->getData(), $doc);
        }
        return $this->render('admin/code.html.twig', [
            'form' => $form->createView(),
            'data' => $data
        ]);
    }

    /**
     * @Route("/score", name="score")
     */
    public function score(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        $scores = $this->getDoctrine()
            ->getRepository(Game::class)
            ->findAll();

        return $this->render('admin/score.html.twig', [
            'scores' => $scores,
        ]);
    }

    /**
    * @Route("/update/{id}", name="update", methods={"POST"})
    */
    public function update(int $id, Request $request, EntityManagerInterface $em): Response
    {
        $game = $this->getDoctrine()
            ->getRepository(Game::class)
            ->findOneBy(['id' => $id]);
        $game->setTeamName($request->request->get('teamname'));
        $em->persist($game);
        $em->flush();
        return $this->redirectToRoute('admin_score');
    }


    /**
     * @Route("/score/{id}", name="show")
     */
    public function show(int $id): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');

        $points = $this->getDoctrine()
            ->getRepository(GameSuccess::class)
            ->findBy(['game' => $id]);

        $success = $this->getDoctrine()
            ->getRepository(Success::class)
            ->findAll();

        $nameSteps = $this->getDoctrine()
            ->getRepository(Step::class)
            ->findAll();

        $score = $this->getDoctrine()
            ->getRepository(Game::class)
            ->findOneBy(['id' => $id]);

        $steps = $this->getDoctrine()
            ->getRepository(ScoreStep::class)
            ->findBy(['game' => $id]);

        return $this->render('admin/show.html.twig', [
            'points' => $points,
            'success' => $success,
            'nameSteps' => $nameSteps,
            'score' => $score,
            'steps' => $steps
        ]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete(Game $game): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($game);
        $entityManager->flush();

        return $this->redirectToRoute('admin_score');
    }
}
