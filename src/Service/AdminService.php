<?php

namespace App\Service;

use App\Entity\ActivationCode;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class AdminService
{
    //This function calls the next functions as data validators and return
    // a string to explain what happened during the file process
    public function uploadCodes(UploadedFile $file, $doc): string
    {
        if (!$this->checkExtension($file)) {
            return 'invalid format';
        }
        if (!$this->checkSize($file)) {
            return 'exceed maximum allowed file size (5000)';
        }
        $codes = $this->checkCodes($this->read($file->getPathname()));
        $filteredCodes = $this->checkAvailabilty($codes, $doc);
        if ($filteredCodes == []) {
            return 'all codes are already inserted';
        }
        $this->insertCodes($filteredCodes, $doc);
        if (count($filteredCodes) != count($codes)) {
            return 'some codes are already registered: ' .  (count($codes) - count($filteredCodes));
        }
        return 'done';
    }

    //Check if it is a csv file
    private function checkExtension(UploadedFile $file): bool
    {
        return $file->guessExtension() === "txt" || $file->guessExtension() === "csv";
    }

    //Check the size of the file
    private function checkSize(UploadedFile $file): bool
    {
        return $file->getSize() < 20000;
    }

    //Open the file and then write each line as and array of array
    private function read(string $csv): array
    {
        $lines = [];
        $file = fopen($csv, 'r');
        while (!feof($file)) {
            $lines[] = fgetcsv($file, 16);
        }
        fclose($file);
        return $lines;
    }

    //For each code (as array), check the format of each entry to be sure
    //they conform to the chosen format
    private function checkCodes(array $lines): array
    {
        $codes = [];
        foreach ($lines as $line) {
            if (
                !empty($line) &&
                $line[0] === "MU!" &&
                $line[1] === "A" &&
                $line[2] === "1" &&
                preg_match("/[0-9A-Z]{6}/", $line[3])
            ) {
                    $codes[] = implode("", $line);
            }
        }
        return $codes;
    }

    //For each code in the file, check if not already in db
    private function checkAvailabilty($codes, $doc): array
    {
        $filteredCodes = [];
        foreach ($codes as $code) {
            if (
                !$doc->getRepository(ActivationCode::class)
                    ->findBy(["value" => $code])
            ) {
                    $filteredCodes[] = $code;
            }
        }
        return $filteredCodes;
    }

    //Insert all the codes not already in db
    private function insertCodes($filteredCodes, $doc): void
    {
        $entityManager = $doc->getManager();
        foreach ($filteredCodes as $code) {
            $activationCode = new ActivationCode();
            $activationCode->setValue($code)
                ->setUsedBy(null)
                ->setIsValid(true);
            $entityManager->persist($activationCode);
        }
        $entityManager->flush();
    }
}
