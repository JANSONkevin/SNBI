<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\DeviceService;
use App\Entity\ActivationCode;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class DefaultController extends AbstractController
{
    private Request $request;
    private SessionInterface $session;

    public function __construct(SessionInterface $session)
    {
        $this->request = Request::createFromGlobals();
        $this->session = $session;
    }

    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {
        $this->session->clear();
        if (!(new DeviceService())->isMobile()) {
            return $this->redirectToRoute('app_desktop');
        }
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/desktop", name="app_desktop")
     */
    public function desktop(): Response
    {
        if ((new DeviceService())->isMobile()) {
            return $this->redirectToRoute('app_index');
        }
        return $this->render('default/desktop.html.twig');
    }

    /**
    * @Route("/code", name="app_code", methods={"POST"})
    */
    public function code(EntityManagerInterface $em): Response
    {
        $userCode = json_decode($this->request->getContent())->password;
        $code = $this->getDoctrine()
            ->getRepository(ActivationCode::class)
            ->findOneBy(['value' => $userCode]);
        //Aussi vf en front mais nécessaire pour grant access
        if ($code != null) {
            if ($code->getUsedBy() == null) {
                $this->session->set('wasCodeValid', $code->getIsValid());
                $code->setIsValid(false);
                $em->persist($code);
                $em->flush();
                $this->session->set('role', 'user');
                $this->session->set('activationCode', $code->getId());
            } else $this->session->set('wasCodeValid', false);
        }
        return $this->json($code);
    }
}
