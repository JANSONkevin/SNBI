<?php

namespace App\Service;

use App\Entity\Game;
use App\Entity\GameSuccess;
use App\Entity\ScoreStep;
use App\Repository\GameRepository;
use App\Repository\GameSuccessRepository;
use App\Repository\ScoreStepRepository;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class AverageDataService
{
    public function prepareData($games, $gameSuccesses, $scoreStep)
    {
        // stats games
        $gamesAvg = [
            'time' => 0,
            'score' => 0,
            'hints' => 0,
            'success' => 0
        ];
        foreach ($games as $g) {
            $gamesAvg['time'] += $g->getTotalTime();
            $gamesAvg['score'] += $g->getFinalScore();
            $gamesAvg['hints'] += $g->getHintCount();
        }
        $gamesAvg['time'] /= count($games);
        $gamesAvg['score'] /= count($games);
        $gamesAvg['hints'] /= count($games);

        // stats gs
        $gsAvg = [];
        foreach ($gameSuccesses as $gs) {
            if (!isset($gsAvg[$gs->getSuccess()->getName()])) {
                $gsAvg[$gs->getSuccess()->getName()] = 0;
            }
            $gs->getAchieved() ? $gsAvg[$gs->getSuccess()->getName()]++ : false;
        }
        foreach ($gsAvg as $k => $s) {
            $gsAvg[$k] /= count($games);
            $gsAvg[$k] *= 100;
        }
        $data['gs'] = $gsAvg;

        // stats steps
        $ssAvg = [];
        foreach ($scoreStep as $ss) {
            if (!isset($ssAvg[$ss->getStep()->getName()])) {
                $ssAvg[$ss->getStep()->getName()] = 0;
            }
            $ssAvg[$ss->getStep()->getName()] += $ss->getTimeEnd() - $ss->getTimeStart();
        }
        foreach ($ssAvg as $k => $s) {
            $ssAvg[$k] /= count($games);
        }
        $data['ss'] = $ssAvg;
        $gamesAvg['success'] = array_sum($gsAvg) / count($gsAvg) / 10;
        $data['gameAvg'] = $gamesAvg;
        return $data;
    }
}
