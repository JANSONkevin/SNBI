import { Page } from '../../class/Page.js';

const scoreboard = new Page('#final-score')
const statistiques = new Page('#statistiques')

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#intro-music').loop = true;
    document.querySelector('#intro-music').volume = .3;
    document.querySelector('#intro-music').currentTime = 0;
    document.querySelector('#intro-music').play();
    changeSuccesDetailAssets()
    document.querySelector('#statistiques-show').addEventListener('click', () => {
        scoreboard.hide();
        statistiques.show();
    })
    document.querySelector('#statistiques-leave').addEventListener('click', () => {
        scoreboard.show();
        statistiques.hide();
    })
})


function changeSuccesDetailAssets() {
    for (let i = 1; i <= 10; i++) {
        document.querySelector('#succes-' + i).addEventListener('click', () => {
            document.querySelector('#succes-description').style.backgroundImage = `url('/build/questionnaire_fin/statistiques/description_succes_${i}.png')`;
        })
    }
}
