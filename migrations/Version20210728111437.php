<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210728111437 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE activation_code (id INT AUTO_INCREMENT NOT NULL, used_by_id INT DEFAULT NULL, value VARCHAR(16) NOT NULL, is_valid TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_FA574C9A4C2B72A8 (used_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, team_name VARCHAR(255) NOT NULL, number_players INT NOT NULL, solved_at DATETIME NOT NULL, total_time INT NOT NULL, final_score INT NOT NULL, hint_count INT NOT NULL, zip VARCHAR(5) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_success (id INT AUTO_INCREMENT NOT NULL, success_id INT NOT NULL, game_id INT DEFAULT NULL, achieved TINYINT(1) NOT NULL, INDEX IDX_FAC2A09DA63B36F1 (success_id), INDEX IDX_FAC2A09DE48FD905 (game_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE score_step (id INT AUTO_INCREMENT NOT NULL, step_id INT NOT NULL, game_id INT DEFAULT NULL, time_start INT NOT NULL, time_end INT DEFAULT NULL, INDEX IDX_69A17F4A73B21E9C (step_id), INDEX IDX_69A17F4AE48FD905 (game_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE step (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, position INT NOT NULL, solve_code INT NOT NULL, hint_code INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE success (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, bonus_points INT NOT NULL, options LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE activation_code ADD CONSTRAINT FK_FA574C9A4C2B72A8 FOREIGN KEY (used_by_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_success ADD CONSTRAINT FK_FAC2A09DA63B36F1 FOREIGN KEY (success_id) REFERENCES success (id)');
        $this->addSql('ALTER TABLE game_success ADD CONSTRAINT FK_FAC2A09DE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE score_step ADD CONSTRAINT FK_69A17F4A73B21E9C FOREIGN KEY (step_id) REFERENCES step (id)');
        $this->addSql('ALTER TABLE score_step ADD CONSTRAINT FK_69A17F4AE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE activation_code DROP FOREIGN KEY FK_FA574C9A4C2B72A8');
        $this->addSql('ALTER TABLE game_success DROP FOREIGN KEY FK_FAC2A09DE48FD905');
        $this->addSql('ALTER TABLE score_step DROP FOREIGN KEY FK_69A17F4AE48FD905');
        $this->addSql('ALTER TABLE score_step DROP FOREIGN KEY FK_69A17F4A73B21E9C');
        $this->addSql('ALTER TABLE game_success DROP FOREIGN KEY FK_FAC2A09DA63B36F1');
        $this->addSql('DROP TABLE activation_code');
        $this->addSql('DROP TABLE game');
        $this->addSql('DROP TABLE game_success');
        $this->addSql('DROP TABLE score_step');
        $this->addSql('DROP TABLE step');
        $this->addSql('DROP TABLE success');
        $this->addSql('DROP TABLE user');
    }
}
