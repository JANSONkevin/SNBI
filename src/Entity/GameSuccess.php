<?php

namespace App\Entity;

use App\Repository\GameSuccessRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GameSuccessRepository::class)
 */
class GameSuccess
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Success::class, inversedBy="gameSuccesses")
     * @ORM\JoinColumn(nullable=false)
     */
    private $success;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="gameSuccesses")
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $game;

    /**
     * @ORM\Column(type="boolean")
     */
    private $achieved;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSuccess(): ?Success
    {
        return $this->success;
    }

    public function setSuccess(?Success $success): self
    {
        $this->success = $success;

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

    public function getAchieved(): ?bool
    {
        return $this->achieved;
    }

    public function setAchieved(bool $achieved): self
    {
        $this->achieved = $achieved;

        return $this;
    }
}
