<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Step;

class StepFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $steps = [
            [
                "name" => "Mise en place",
                "position" => 1,
                "solveCode" => 7531,
                "hintCode" => null,
            ],
            [
                "name" => "Le lapin blanc",
                "position" => 2,
                "solveCode" => 8417,
                "hintCode" => 2777,
            ],
            [
                "name" => "L'entrée du terrier",
                "position" => 3,
                "solveCode" => 4982,
                "hintCode" => 3692,
            ],
            [
                "name" => "Bois-moi",
                "position" => 4,
                "solveCode" => 6104,
                "hintCode" => 4250,
            ],
            [
                "name" => "Le talon géant",
                "position" => 5,
                "solveCode" => 8610,
                "hintCode" => 5893,
            ],
            [
                "name" => "Le coffre",
                "position" => 6,
                "solveCode" => 1597,
                "hintCode" => 6420,
            ],
            [
                "name" => "La Grande salle",
                "position" => 7,
                "solveCode" => 3552,
                "hintCode" => 1984,
            ],
            [
                "name" => "Objets perdus",
                "position" => 8,
                "solveCode" => 9142,
                "hintCode" => 1025,
            ],
            [
                "name" => "Le Dodo",
                "position" => 9,
                "solveCode" => 8768,
                "hintCode" => 9842,
            ],
        ];
        foreach ($steps as $index => $step) {
            $newStep = new Step();
            $newStep->setName($step['name'])
                ->setPosition($step['position'])
                ->setSolveCode($step['solveCode'])
                ->setHintCode($step['hintCode']);
            $manager->persist($newStep);
            $this->addReference('step' . ($index + 1), $newStep);
        }
        $manager->flush();
    }
}
