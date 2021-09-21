<?php

namespace App\Entity;

use App\Repository\ActivationCodeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ActivationCodeRepository::class)
 */
class ActivationCode
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=16)
     */
    private $value;

    /**
     * @ORM\OneToOne(targetEntity=Game::class, inversedBy="activationCode", cascade={"persist", "remove"})
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $usedBy;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isValid;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getUsedBy(): ?Game
    {
        return $this->usedBy;
    }

    public function setUsedBy(?Game $usedBy): self
    {
        $this->usedBy = $usedBy;

        return $this;
    }

    public function getIsValid(): ?bool
    {
        return $this->isValid;
    }

    public function setIsValid(bool $isValid): self
    {
        $this->isValid = $isValid;

        return $this;
    }
}
