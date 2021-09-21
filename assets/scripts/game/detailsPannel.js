import { Page } from '../../class/Page.js';

const stepDetailPannel = new Page('#step-detail-pannel')
const endStep = new Page('#end-step')
const gameBoard = new Page('#game-board')

function refreshStepDetailAssets() {
    let currentStep = parseInt(window.localStorage.getItem('currentStep'));

    for (let i = currentStep-1; i >= 1; i--) {
        document.querySelector('[data-numbers="'+(i)+'"]').style.backgroundImage = `url('/build/etapes_recap/etape${i}.png')`;
        document.querySelector('[data-numbers="'+(i)+'"]').style.opacity = 1;
        document.querySelector('[data-numbers="'+(i)+'"]').addEventListener('click', () => {
            document.querySelector('#bonus-pts').classList.add('visually-hidden');
            stepDetailPannel.hide();
            endStep.show();
            document.querySelector('#end-step').style.backgroundImage = `url('/build/fin_etapes/etape_${i}.jpg')`;
            document.querySelector('#end-step').addEventListener('click', () => {
                document.querySelector('#bonus-pts').classList.remove('visually-hidden');
                endStep.hide();
                gameBoard.hide();
                stepDetailPannel.show();
            })
        })  
    }
    if (localStorage.getItem('succesA') == 'true') {
        document.querySelector('[data-numbers="10"]').style.opacity = 1;
        document.querySelector('[data-numbers="10"]').addEventListener('click', () => {
            document.querySelector('#bonus-pts').classList.add('visually-hidden');
            stepDetailPannel.hide();
            endStep.show();
            document.querySelector('#end-step').style.backgroundImage = `url('/build/fin_etapes/etape_bonus_1.jpg')`;
            document.querySelector('#end-step').addEventListener('click', () => {
                document.querySelector('#bonus-pts').classList.remove('visually-hidden');
                endStep.hide();
                gameBoard.hide();
                stepDetailPannel.show();
            })
        })  
    }
    if (localStorage.getItem('succesB') == 'true') {
        document.querySelector('[data-numbers="11"]').style.opacity = 1;
        document.querySelector('[data-numbers="11"]').addEventListener('click', () => {
            document.querySelector('#bonus-pts').classList.add('visually-hidden');
            stepDetailPannel.hide();
            endStep.show();
            document.querySelector('#end-step').style.backgroundImage = `url('/build/fin_etapes/etape_bonus_2.jpg')`;
            document.querySelector('#end-step').addEventListener('click', () => {
                document.querySelector('#bonus-pts').classList.remove('visually-hidden');
                endStep.hide();
                gameBoard.hide();
                stepDetailPannel.show();
            })
        })  
    }
}

export default refreshStepDetailAssets;