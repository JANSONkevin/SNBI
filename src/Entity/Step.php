<?php

namespace App\Entity;

use App\Repository\StepRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StepRepository::class)
 */
class Step
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $position;

    /**
     * @ORM\Column(type="integer")
     */
    private $solveCode;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $hintCode;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getSolveCode(): ?int
    {
        return $this->solveCode;
    }

    public function setSolveCode(int $solveCode): self
    {
        $this->solveCode = $solveCode;

        return $this;
    }

    public function getHintCode(): ?int
    {
        return $this->hintCode;
    }

    public function setHintCode($hintCode): self
    {
        $this->hintCode = $hintCode;

        return $this;
    }
}
