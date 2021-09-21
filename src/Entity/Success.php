<?php

namespace App\Entity;

use App\Repository\SuccessRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SuccessRepository::class)
 */
class Success
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $bonusPoints;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $options;

    /**
     * @ORM\OneToMany(targetEntity=GameSuccess::class, mappedBy="success", orphanRemoval=true)
     */
    private $gameSuccesses;

    public function __construct()
    {
        $this->gameSuccesses = new ArrayCollection();
    }

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

    public function getBonusPoints(): ?int
    {
        return $this->bonusPoints;
    }

    public function setBonusPoints(int $bonusPoints): self
    {
        $this->bonusPoints = $bonusPoints;

        return $this;
    }

    public function getOptions(): ?string
    {
        return $this->options;
    }

    public function setOptions(?string $options): self
    {
        $this->options = $options;

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
            $gameSuccess->setSuccess($this);
        }

        return $this;
    }

    public function removeGameSuccess(GameSuccess $gameSuccess): self
    {
        if ($this->gameSuccesses->removeElement($gameSuccess)) {
            // set the owning side to null (unless already changed)
            if ($gameSuccess->getSuccess() === $this) {
                $gameSuccess->setSuccess(null);
            }
        }

        return $this;
    }
}
