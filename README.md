# Welcome to SNBI 👋
![Version](https://img.shields.io/badge/version-beta-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Escape game Digital "Alice et le terrier du Lapin"

### ✨ [Demo](https://preprod-snbi.osc-fr1.scalingo.io/)

## Install

Clone this project
Run ```composer install``` <br>
Run ```yarn install``` <br>
Run ```yarn encore dev``` to build assets <br>
Connect the database in the env.local <br>
Run ```php bin/console d:d:c``` <br>
Run ```php bin/console make:migration``` <br>
Run ```bin/console doctrine:migrations:migrate``` <br>
You can load fixtures if needed with ```bin/console doctrine:fixtures:load``` <br>

Don't use SAFARI for desktop version (cannot login). It is also advised not to use Safari with your mobil as it creates some weird interactions with the virtual keyboards and input tags (html).
It is strongly advised to use Chrome browser for admins and developpement.
To test the game on mobil, the following browsers should be used : Firefox, Opera, and lastly Chrome as because of its User Privacy policy forces a user interaction in order to start ambient musics at some point (A button is displayed when it is the case and clicking it will trigger the music and it should not be interupted for the rest of the game).

## About 

This project is a companion app for an Escape Game on the theme of Alice in Wonderland.
It is mainly based on Symfony but also uses some javascript for UX/UI interactions and control the flow of the game and to deal with the assets (images and musics).
For any question about this project please contact us. You can reach a member of this project group with GitHub or Linkedin with the provided links in the Authors section.

## Authors

👤 **Wilders from Wild Code School**


* Github: [@Hugo Guillaume](https://github.com/musosy) [@Kevin Janson](https://github.com/JANSONkevin) [@Colin Le Gac](https://github.com/clnmlg) [@Eddy Rajaonarivelo](https://github.com/eddyRAJA) [@Jody Gauthier](https://github.com/Jody-G)
* LinkedIn: [@Hugo Guillaume](https://www.linkedin.com/in/hugo-guillaume-53420b129/) [@Kevin Janson](https://www.linkedin.com/in/k%C3%A9vin-janson/) [@Colin Le Gac](https://linkedin.com/in/colin-mora-le-gac-b0077344) [@Eddy Rajaonarivelo](https://www.linkedin.com/in/eddy-rajaonarivelo) [@Jody Gauthier](https://www.linkedin.com/in/jody-gauthier-b7a397215/)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_% 
