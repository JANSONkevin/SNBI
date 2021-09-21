<?php

namespace App\Form;

use App\Entity\Game;
use PHPStan\Type\Doctrine\Descriptors\StringType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add(
            'teamname',
            StringType::class,
            [
                'required' => true,
            ]
        )
        ->add(
            'save',
            SubmitType::class,
            [
                'label' => 'Modifier le nom',
            ],
        )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Game::class,
        ]);
    }
}
