<?php

namespace App\Entity;

use App\Repository\GameRepository;
use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game
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
    private $teamName;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberPlayers;

    /**
     * @ORM\Column(type="datetime")
     */
    private $solvedAt;

    /**
     * @ORM\Column(type="integer")
     */
    private $totalTime;

    /**
     * @ORM\Column(type="integer")
     */
    private $finalScore;

    /**
     * @ORM\Column(type="integer")
     */
    private $hintCount;

    /**
     * @ORM\OneToOne(targetEntity=ActivationCode::class, mappedBy="usedBy", cascade={"persist", "remove"})
     */
    private $activationCode;

    /**
     * @ORM\OneToMany(targetEntity=ScoreStep::class, mappedBy="game")
     */
    private $scoreStep;

    /**
     * @ORM\OneToMany(targetEntity=GameSuccess::class, mappedBy="game")
     */
    private $gameSuccesses;

    /**
     * @ORM\Column(type="string", length=5, nullable=true)
     */
    private $zip;

    public function __construct()
    {
        $this->scoreStep = new ArrayCollection();
        $this->gameSuccesses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTeamName(): ?string
    {
        return $this->teamName;
    }

    public function setTeamName(string $teamName): self
    {
        $this->teamName = $teamName;

        return $this;
    }

    public function getNumberPlayers(): ?int
    {
        return $this->numberPlayers;
    }

    public function setNumberPlayers(int $numberPlayers): self
    {
        $this->numberPlayers = $numberPlayers;

        return $this;
    }

    public function getSolvedAt(): ?\DateTimeInterface
    {
        return $this->solvedAt;
    }

    public function setSolvedAt(\DateTimeInterface $solvedAt): self
    {
        $this->solvedAt = $solvedAt;

        return $this;
    }

    public function getTotalTime(): ?int
    {
        return $this->totalTime;
    }

    public function setTotalTime(int $totalTime): self
    {
        $this->totalTime = $totalTime;

        return $this;
    }

    public function getFinalScore(): ?int
    {
        return $this->finalScore;
    }

    public function setFinalScore(int $finalScore): self
    {
        $this->finalScore = $finalScore;

        return $this;
    }

    public function getHintCount(): ?int
    {
        return $this->hintCount;
    }

    public function setHintCount(int $hintCount): self
    {
        $this->hintCount = $hintCount;

        return $this;
    }

    public function getActivationCode(): ?ActivationCode
    {
        return $this->activationCode;
    }

    public function setActivationCode(?ActivationCode $activationCode): self
    {
        // unset the owning side of the relation if necessary
        if ($activationCode === null && $this->activationCode !== null) {
            $this->activationCode->setUsedBy(null);
        }

        // set the owning side of the relation if necessary
        if ($activationCode !== null && $activationCode->getUsedBy() !== $this) {
            $activationCode->setUsedBy($this);
        }

        $this->activationCode = $activationCode;

        return $this;
    }

    /**
     * @return Collection|ScoreStep[]
     */
    public function getScoreStep(): Collection
    {
        return $this->scoreStep;
    }

    public function addScoreStep(ScoreStep $scoreStep): self
    {
        if (!$this->scoreStep->contains($scoreStep)) {
            $this->scoreStep[] = $scoreStep;
            $scoreStep->setGame($this);
        }

        return $this;
    }

    public function removeScoreStep(ScoreStep $scoreStep): self
    {
        if ($this->scoreStep->removeElement($scoreStep)) {
            // set the owning side to null (unless already changed)
            if ($scoreStep->getGame() === $this) {
                $scoreStep->setGame(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|GameSuccess[]
     */
    public function getGameSuccesses(): Collection
    {
        return $this->gameSuccesses;
    }

    public function addGameSuccess(GameSuccess $gameSuccess): self
    {
        if (!$this->gameSuccesses->contains($gameSuccess)) {
            $this->gameSuccesses[] = $gameSuccess;
            $gameSuccess->setGame($this);
        }

        return $this;
    }

    public function removeGameSuccess(GameSuccess $gameSuccess): self
    {
        if ($this->gameSuccesses->removeElement($gameSuccess)) {
            // set the owning side to null (unless already changed)
            if ($gameSuccess->getGame() === $this) {
                $gameSuccess->setGame(null);
            }
        }

        return $this;
    }

    public function getZip(): ?string
    {
        return $this->zip;
    }

    public function setZip(?string $zip): self
    {
        $this->zip = $zip;

        return $this;
    }
}