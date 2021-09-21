<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;

class DeviceService
{

    private const PHONE = [
        '(android|bb\d+|meego).+mobile',
        'avantgo',
        'bada\/',
        'blackberry',
        'blazer',
        'compal',
        'elaine',
        'fennec',
        'hiptop',
        'iemobile',
        'ip(hone|od)',
        'iris',
        'kindle',
        'lge ',
        'maemo',
        'midp',
        'mmp',
        'mobile.+firefox',
        'netfront',
        'opera m(ob|in)i',
        'palm( os)?',
        'phone',
        'p(ixi|re)\/',
        'plucker',
        'pocket',
        'psp',
        'series(4|6)0',
        'symbian',
        'treo',
        'up\.(browser|link)',
        'vodafone',
        'wap',
        'windows ce',
        'xda',
        'xiino'
    ];

    public function isMobile()
    {
        $req = Request::createFromGlobals();
        $agent = $req->server->get('HTTP_USER_AGENT');
        $uaFull = strtolower($agent);

        $isPhone = preg_match('/' . implode('|', self::PHONE) . '/i', $uaFull);

        if ($isPhone) {
            return true;
        } else {
            return false;
        }
    }
}
