<?php

namespace App\DataFixtures;

use App\Entity\GameSuccess;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class GameSuccessFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $gameSuccesOneOne = new GameSuccess();
        $gameSuccesOneOne->setSuccess($this->getReference('succes1'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(true)
        ;
        $gameSuccesOneTwo = new GameSuccess();
        $gameSuccesOneTwo->setSuccess($this->getReference('succes2'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(false)
        ;
        $gameSuccesOneThree = new GameSuccess();
        $gameSuccesOneThree->setSuccess($this->getReference('succes3'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(true)
        ;
        $gameSuccesOneFour = new GameSuccess();
        $gameSuccesOneFour->setSuccess($this->getReference('succes4'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(false)
        ;
        $gameSuccesOneFive = new GameSuccess();
        $gameSuccesOneFive->setSuccess($this->getReference('succes5'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(true)
        ;
        $gameSuccesOneSix = new GameSuccess();
        $gameSuccesOneSix->setSuccess($this->getReference('succes6'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(true)
        ;
        $gameSuccesOneSeven = new GameSuccess();
        $gameSuccesOneSeven->setSuccess($this->getReference('succes7'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(false)
        ;
        $gameSuccesOneEight = new GameSuccess();
        $gameSuccesOneEight->setSuccess($this->getReference('succes8'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(true)
        ;
        $gameSuccesOneNine = new GameSuccess();
        $gameSuccesOneNine->setSuccess($this->getReference('succes9'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(false)
        ;
        $gameSuccesOneTen = new GameSuccess();
        $gameSuccesOneTen->setSuccess($this->getReference('succes10'))
            ->setGame($this->getReference('firstGame'))
            ->setAchieved(false)
        ;
        $manager->persist($gameSuccesOneOne);
        $manager->persist($gameSuccesOneTwo);
        $manager->persist($gameSuccesOneThree);
        $manager->persist($gameSuccesOneFour);
        $manager->persist($gameSuccesOneFive);
        $manager->persist($gameSuccesOneSix);
        $manager->persist($gameSuccesOneSeven);
        $manager->persist($gameSuccesOneEight);
        $manager->persist($gameSuccesOneNine);
        $manager->persist($gameSuccesOneTen);


        $gameSuccesTwoOne = new GameSuccess();
        $gameSuccesTwoOne->setSuccess($this->getReference('succes1'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(true)
        ;
        $gameSuccesTwoTwo = new GameSuccess();
        $gameSuccesTwoTwo->setSuccess($this->getReference('succes2'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(false)
        ;
        $gameSuccesTwoThree = new GameSuccess();
        $gameSuccesTwoThree->setSuccess($this->getReference('succes3'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(true)
        ;
        $gameSuccesTwoFour = new GameSuccess();
        $gameSuccesTwoFour->setSuccess($this->getReference('succes4'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(false)
        ;
        $gameSuccesTwoFive = new GameSuccess();
        $gameSuccesTwoFive->setSuccess($this->getReference('succes5'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(true)
        ;
        $gameSuccesTwoSix = new GameSuccess();
        $gameSuccesTwoSix->setSuccess($this->getReference('succes6'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(true)
        ;
        $gameSuccesTwoSeven = new GameSuccess();
        $gameSuccesTwoSeven->setSuccess($this->getReference('succes7'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(false)
        ;
        $gameSuccesTwoEight = new GameSuccess();
        $gameSuccesTwoEight->setSuccess($this->getReference('succes8'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(true)
        ;
        $gameSuccesTwoNine = new GameSuccess();
        $gameSuccesTwoNine->setSuccess($this->getReference('succes9'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(false)
        ;
        $gameSuccesTwoTen = new GameSuccess();
        $gameSuccesTwoTen->setSuccess($this->getReference('succes10'))
            ->setGame($this->getReference('secondGame'))
            ->setAchieved(false)
        ;
        $manager->persist($gameSuccesTwoOne);
        $manager->persist($gameSuccesTwoTwo);
        $manager->persist($gameSuccesTwoThree);
        $manager->persist($gameSuccesTwoFour);
        $manager->persist($gameSuccesTwoFive);
        $manager->persist($gameSuccesTwoSix);
        $manager->persist($gameSuccesTwoSeven);
        $manager->persist($gameSuccesTwoEight);
        $manager->persist($gameSuccesTwoNine);
        $manager->persist($gameSuccesTwoTen);
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            GameFixtures::class,
            SuccessFixtures::class
        ];
    }
}
