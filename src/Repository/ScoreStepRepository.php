<?php

namespace App\Repository;

use App\Entity\ScoreStep;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ScoreStep|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScoreStep|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScoreStep[]    findAll()
 * @method ScoreStep[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScoreStepRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ScoreStep::class);
    }
    public function findAllGrouped()
    {
        return $this->findBy([], ['step' => 'ASC']);
    }
    // /**
    //  * @return ScoreStep[] Returns an array of ScoreStep objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ScoreStep
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
