<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setEmail('admin@admin.com');
        $password = $this->encoder->encodePassword($admin,'admin');
        $admin->setPassword($password);
        $admin->setRoles(['ROLE_ADMIN']); 
        $manager->persist($admin);
        $manager->flush();
    }
}
