<?php

namespace App\Repository;

use App\Entity\GameSuccess;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GameSuccess|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameSuccess|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameSuccess[]    findAll()
 * @method GameSuccess[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameSuccessRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameSuccess::class);
    }

    public function findAllGrouped()
    {
        return $this->findBy([], [
            'success' => 'ASC',
        ]);
    }
}
