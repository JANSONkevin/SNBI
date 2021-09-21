<?php

namespace App\DataFixtures;

use App\Entity\Game;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GameFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $gameOne = new Game();
        $gameOne->setTeamName('First team')
            ->setNumberPlayers(3)
            ->setSolvedAt((new DateTime()))
            ->setTotalTime(4205)
            ->setFinalScore(8599)
            ->setHintCount(8)
            ->setZip('13500')
        ;
        $gameTwo = new Game();
        $gameTwo->setTeamName('Second team')
            ->setNumberPlayers(5)
            ->setSolvedAt((new DateTime()))
            ->setTotalTime(4008)
            ->setFinalScore(8823)
            ->setHintCount(2)
            ->setZip('83000')
        ;
        $this->addReference('firstGame', $gameOne);
        $this->addReference('secondGame', $gameTwo);
        $manager->persist($gameOne);
        $manager->persist($gameTwo);
        $manager->flush();
    }
}
