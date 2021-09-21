<?php

namespace App\Service;

class SuccessService
{
    public function successCheck($step, $request, $session)
    {
        if (
            $step->getPosition() == 4 &&
            (json_decode($request->getContent())->timeEnd - json_decode($request->getContent())->timeStart) <= 120
        ) {
            $success = $session->get('success');
            $success['Tête brûlée'] =  true;
            $session->set('success', $success);
        }

        $hints = json_decode($request->getContent())->hints;


        if ($step->getPosition() == 6 && !in_array(true, get_object_vars($hints[5]), true)) {
            $success = $session->get('success');
            $success['Mathématicien.ne'] = true;
            $session->set('success', $success);
        }
        if ($step->getPosition() == 9 && !in_array(true, get_object_vars($hints[8]), true)) {
            $success = $session->get('success');
            $success['Zoologiste'] = true;
            $session->set('success', $success);
        }
    }

    public function bonusCheck($request, $session)
    {
        if (json_decode($request->getContent())->code == '6497' && !isset($success['Détective privé.e'])) {
            $success = $session->get('success');
            $success['Détective privé.e'] = true;
            $session->set('success', $success);
            return [
                'step' => 'bonus 1',
                'points' => 150,
            ];
        }
        if (json_decode($request->getContent())->code == '1100' && !isset($success['Nyctalop'])) {
            $success = $session->get('success');
            $success['Nyctalope'] = true;
            $session->set('success', $success);
            return [
                'step' => 'bonus 2',
                'points' => 150
            ];
        }
        return false;
    }
}
