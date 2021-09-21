<?php

namespace App\Entity;

use App\Repository\ScoreStepRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ScoreStepRepository::class)
 */
class ScoreStep
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Step::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $step;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="timeStart")
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $game;

    /**
     * @ORM\Column(type="integer")
     */
    private $timeStart;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $timeEnd;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStep(): ?Step
    {
        return $this->step;
    }

    public function setStep(?Step $step): self
    {
        $this->step = $step;

        return $this;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getTimeStart(): ?int
    {
        return $this->timeStart;
    }

    public function setTimeStart(int $timeStart): self
    {
        $this->timeStart = $timeStart;

        return $this;
    }

    public function getTimeEnd(): ?int
    {
        return $this->timeEnd;
    }

    public function setTimeEnd(?int $timeEnd): self
    {
        $this->timeEnd = $timeEnd;

        return $this;
    }
}
