<?php

namespace App\DataFixtures;

use App\Entity\ScoreStep;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ScoreStepFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $scoreStepOneOne = new ScoreStep();
        $scoreStepOneOne->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step1'))
            ->setTimeStart(0)
            ->setTimeEnd(88)
        ;
        $scoreStepOneTwo = new ScoreStep();
        $scoreStepOneTwo->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step2'))
            ->setTimeStart(88)
            ->setTimeEnd(587)
        ;
        $scoreStepOneThree = new ScoreStep();
        $scoreStepOneThree->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step3'))
            ->setTimeStart(587)
            ->setTimeEnd(1100)
        ;
        $scoreStepOneFour = new ScoreStep();
        $scoreStepOneFour->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step4'))
            ->setTimeStart(1100)
            ->setTimeEnd(1432)
        ;
        $scoreStepOneFive = new ScoreStep();
        $scoreStepOneFive->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step5'))
            ->setTimeStart(1432)
            ->setTimeEnd(1975)
        ;
        $scoreStepOneSix = new ScoreStep();
        $scoreStepOneSix->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step6'))
            ->setTimeStart(1975)
            ->setTimeEnd(2560)
        ;
        $scoreStepOneSeven = new ScoreStep();
        $scoreStepOneSeven->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step7'))
            ->setTimeStart(2560)
            ->setTimeEnd(3600)
        ;
        $scoreStepOneEight = new ScoreStep();
        $scoreStepOneEight->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step8'))
            ->setTimeStart(3600)
            ->setTimeEnd(3968)
        ;
        $scoreStepOneNine = new ScoreStep();
        $scoreStepOneNine->setGame($this->getReference('firstGame'))
            ->setStep($this->getReference('step9'))
            ->setTimeStart(3968)
            ->setTimeEnd(4205)
        ;
        $manager->persist($scoreStepOneOne);
        $manager->persist($scoreStepOneTwo);
        $manager->persist($scoreStepOneThree);
        $manager->persist($scoreStepOneFour);
        $manager->persist($scoreStepOneFive);
        $manager->persist($scoreStepOneSix);
        $manager->persist($scoreStepOneSeven);
        $manager->persist($scoreStepOneEight);
        $manager->persist($scoreStepOneNine);

        $scoreStepTwoOne = new ScoreStep();
        $scoreStepTwoOne->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step1'))
            ->setTimeStart(0)
            ->setTimeEnd(88)
        ;
        $scoreStepTwoTwo = new ScoreStep();
        $scoreStepTwoTwo->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step2'))
            ->setTimeStart(88)
            ->setTimeEnd(587)
        ;
        $scoreStepTwoThree = new ScoreStep();
        $scoreStepTwoThree->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step3'))
            ->setTimeStart(587)
            ->setTimeEnd(1100)
        ;
        $scoreStepTwoFour = new ScoreStep();
        $scoreStepTwoFour->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step4'))
            ->setTimeStart(1100)
            ->setTimeEnd(1432)
        ;
        $scoreStepTwoFive = new ScoreStep();
        $scoreStepTwoFive->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step5'))
            ->setTimeStart(1432)
            ->setTimeEnd(1975)
        ;
        $scoreStepTwoSix = new ScoreStep();
        $scoreStepTwoSix->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step6'))
            ->setTimeStart(1975)
            ->setTimeEnd(2560)
        ;
        $scoreStepTwoSeven = new ScoreStep();
        $scoreStepTwoSeven->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step7'))
            ->setTimeStart(2560)
            ->setTimeEnd(3600)
        ;
        $scoreStepTwoEight = new ScoreStep();
        $scoreStepTwoEight->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step8'))
            ->setTimeStart(3600)
            ->setTimeEnd(3968)
        ;
        $scoreStepTwoNine = new ScoreStep();
        $scoreStepTwoNine->setGame($this->getReference('secondGame'))
            ->setStep($this->getReference('step9'))
            ->setTimeStart(3968)
            ->setTimeEnd(4205)
        ;
        $manager->persist($scoreStepTwoOne);
        $manager->persist($scoreStepTwoTwo);
        $manager->persist($scoreStepTwoThree);
        $manager->persist($scoreStepTwoFour);
        $manager->persist($scoreStepTwoFive);
        $manager->persist($scoreStepTwoSix);
        $manager->persist($scoreStepTwoSeven);
        $manager->persist($scoreStepTwoEight);
        $manager->persist($scoreStepTwoNine);
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            GameFixtures::class,
            StepFixtures::class
        ];
    }
}
