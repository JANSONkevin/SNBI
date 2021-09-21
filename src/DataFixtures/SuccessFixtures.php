<?php

namespace App\DataFixtures;

use App\Entity\Success;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SuccessFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $successes = [
            [
                "name" => "Salon de thé",
                "bonus_points" => 100,
                "option" => [
                    "symbole" => "tasse",
                    "trigger" => "question",
                ],
            ],
            [
                "name" => "Tête brûlée",
                "bonus_points" => 100,
                "option" => [
                    "symbole" => "fiole",
                    "trigger" => "game",
                ],
            ],
            [
                "name" => "Superstition",
                "bonus_points" => 100,
                "option" => [
                    "symbole" => "parapluie",
                    "trigger" => "question",
                ],
            ],
            [
                "name" => "Détective privé.e",
                "bonus_points" => 150,
                "option" => [
                    "symbole" => "loupe",
                    "trigger" => "step",
                ],
            ],
            [
                "name" => "Mathématicien.ne",
                "bonus_points" => 150,
                "option" => [
                    "symbole" => "cartes",
                    "trigger" => "game",
                ],
            ],
            [
                "name" => "Nyctalope",
                "bonus_points" => 150,
                "option" => [
                    "symbole" => "chat",
                    "trigger" => "step",
                ],
            ],
            [
                "name" => "Zoologiste",
                "bonus_points" => 150,
                "option" => [
                    "symbole" => "lapin",
                    "trigger" => "game",
                ],
            ],
            [
                "name" => "Serein.e",
                "bonus_points" => 200,
                "option" => [
                    "symbole" => "montre",
                    "trigger" => "game",
                ],
            ],
            [
                "name" => "Ambitieux.se",
                "bonus_points" => 250,
                "option" => [
                    "symbole" => "chapeau",
                    "trigger" => "game",
                ],
            ],
            [
                "name" => "Maître du jeu",
                "bonus_points" => 500,
                "option" => [
                    "symbole" => "couronne",
                    "trigger" => "game",
                ],
            ],
        ];

        foreach ($successes as $index => $succes) {
            $newSucces = new Success();
            $newSucces->setName($succes["name"])
                ->setBonusPoints($succes["bonus_points"])
                ->setOptions(json_encode($succes["option"]));
            $manager->persist($newSucces);
            $this->addReference('succes' . ($index + 1), $newSucces);
        }
        $manager->flush();
    }
}
