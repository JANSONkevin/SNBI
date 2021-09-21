import { Page } from '../../class/Page.js';
import { Numpad } from '../../class/Numpad.js';
import { Switch } from '../../class/Switch.js';
import { Image } from '../../class/Image.js';
import refreshStepDetailAssets from './detailsPannel.js'
import musicPlaylist from '../../components/music.js'
//import axios
const axios = require('axios').default;
//display
const gameBoard = new Page('#game-board');
const stepPannel = new Page('#step-pannel');
const endStep = new Page('#end-step');
const stepDetailPannel = new Page('#step-detail-pannel');
const averageScore = new Page('#average-score');
//only for step 1 //
const hint = new Image('#hint', 'indices_enable', 'indices_disable', 'menu_principal');
//step error
const stepError = new Page('#step-error-pannel')
//succes pannel
const succesPannel = new Page('#succes')
//quiz //
const averageScoreSuite = new Switch('#score-suite', '#average-score', '#q1-pannel')
//return btn
const stepBack = new Switch('#step-back', '#step-pannel', '#game-board', true);

const stepPad = new Numpad('#numpad-step', '#step-code-output');

const hardHint = document.querySelector('#hard-hint');
const easyHint = document.querySelector('#easy-hint');
const solution = document.querySelector('#solution');

window.addEventListener('DOMContentLoaded', () => {
    refreshStepDetailAssets();
    //Numpad is ready to write
    stepPad.start();
    //Return btn listener
    stepBack.element.addEventListener('click', () => {
        stepPad.reset();
        stepBack.change();
        document.querySelector('#touche-retour-audio').currentTime = 0;
        document.querySelector('#touche-retour-audio').play();
    })

    document.querySelector('#step-code-validate').addEventListener('click', () => {
        Math.floor((new Date().getTime() - localStorage.getItem('stepStartTime')) / 1000);
        axios.post('/game/stepCode', {
            step: localStorage.getItem('currentStep'),
            code: stepPad.output.innerHTML,
            timeStart: Math.floor((localStorage.getItem('stepStartTime') - localStorage.getItem('startTime')) / 1000),
            timeEnd: Math.floor((new Date().getTime() - localStorage.getItem('startTime')) / 1000),
            hints: JSON.parse(localStorage.getItem('hints')),
            score: localStorage.getItem('score'),
            teamName: localStorage.getItem('teamname'),
        })
            .then(response => {
                if (response.data.step === 'wrong') {
                    //show the page for good code but wront time
                    console.log(response);
                    stepPannel.hide();
                    stepError.show();
                    document.querySelector('#step-error-back').addEventListener('click', () => {
                        stepError.hide();
                        gameBoard.show();
                    })

                }
                if (response.data.step === 'step') {
                    document.querySelector(localStorage.getItem('music')).pause();
                    let timeStart = Math.floor((localStorage.getItem('stepStartTime') - localStorage.getItem('startTime')) / 1000)
                    let timeEnd = Math.floor((new Date().getTime() - localStorage.getItem('startTime')) / 1000)
                    succes(timeEnd, timeStart);
                    document.querySelector('#page-audio').currentTime = 0;
                    document.querySelector('#page-audio').play();
                    localStorage.setItem('stepStartTime', (new Date().getTime()));
                    if (localStorage.getItem('currentStep') == '1') {
                        document.querySelector('#separator').classList.remove('visually-hidden')
                        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + parseInt(localStorage.getItem('firstStepTimer')))
                        updateBonusScore(50);
                        document.querySelector('#jingle-bonus-audio').currentTime = 0;
                        document.querySelector('#jingle-bonus-audio').play();
                    } else if (localStorage.getItem('currentStep') == '9') {
                        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 50)
                        updateBonusScore(50);
                        document.querySelector('#jingle-bonus-audio').currentTime = 0;
                        document.querySelector('#jingle-bonus-audio').play();
                        localStorage.setItem('endgame', 'true');
                        stepPannel.hide();
                        localStorage.setItem('finalScore', localStorage.getItem('score'))
                        document.querySelector('#score-div').innerHTML = localStorage.getItem('finalScore') + ' pts'
                        endStep.element.addEventListener('click', () => {
                            gameBoard.hide()
                            averageScore.show();
                            localStorage.setItem('currentStep', 10)
                            getNextStepMusic(10);
                        })
                    } else {
                        document.querySelector('#separator').classList.remove('visually-hidden')
                        
                        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 50)
                    }
                    window.localStorage.setItem('currentStep', parseInt(window.localStorage.getItem('currentStep')) + 1);
                    if (localStorage.getItem('currentStep') == '2') {
                        hint.activate();
                        document.querySelector('#bar-charge-container').style.display = 'none';
                        document.querySelector('#bar-charge').style.display = 'none';
                    }
                    document.querySelector('#jingle-win-audio').currentTime = 0;
                    document.querySelector('#jingle-win-audio').play();
                    //reset the hints display
                    easyHint.style.backgroundImage = "url('/build/choix_indices/indice_facile.png')";
                    hardHint.style.backgroundImage = "url('/build/choix_indices/indice_difficile.png')";
                    solution.style.backgroundImage = "url('/build/choix_indices/solution.png')";
                    window.localStorage.setItem('hintChecked', 'false');
                    changeEndStepAssets()
                } else if (response.data.step === 'bonus 1' && localStorage.getItem('succesA') == 'false') {
                    localStorage.setItem('succesA', 'true')
                    changeBonusStepAssets(1);
                    endStep.show();
                    stepPannel.hide();
                    updateBonusScore(response.data.points)
                } else if (response.data.step === 'bonus 2' && localStorage.getItem('succesB') == 'false') {
                    localStorage.setItem('succesB', 'true')
                    changeBonusStepAssets(2);
                    endStep.show();
                    stepPannel.hide();
                    updateBonusScore(response.data.points)
                } else {
                    document.querySelector('#code-erreur').currentTime = 0;
                    document.querySelector('#code-erreur').play();
                }
                refreshStepDetailAssets();
                stepPad.reset();
            })
            .catch((error) => console.log(error))
    })
})

function changeEndStepAssets() {
    let currentStep = parseInt(window.localStorage.getItem('currentStep'));
    document.querySelector('#end-step').style.backgroundImage = `url('/build/fin_etapes/etape_${currentStep - 1}.jpg')`;
    if (localStorage.getItem('endgame') == 'true') {
        getNextStepMusic(currentStep);
        document.querySelector('#end-step').addEventListener('click', () => {
            endStep.hide();
            averageScore.show();
            averageScoreSuite.element.addEventListener('click', () => {
                averageScoreSuite.change();
                localStorage.setItem('currentStep', 11)
                getNextStepMusic(11);
            })
            document.querySelector('#bonus-pts').style.animation = "";
        })
    } else {
        document.querySelector('#end-step').addEventListener('click', () => {
            getNextStepMusic(currentStep);
            endStep.hide();
            gameBoard.show();
            stepDetailPannel.hide();
            document.querySelector('#bonus-pts').style.animation = "";
        })
    }
}


function changeBonusStepAssets(bonusStep) {
    document.querySelector('#end-step').style.backgroundImage = `url('/build/fin_etapes/etape_bonus_${bonusStep}.jpg')`;
    document.querySelector('#end-step').addEventListener('click', () => {
        endStep.hide();
        gameBoard.show();
        stepDetailPannel.hide();
        document.querySelector('#bonus-pts').style.animation = "";
    })
}

function updateBonusScore(number) {
    document.querySelector('#ink-reveal-audio').currentTime = 0;
    document.querySelector('#ink-reveal-audio').play();
    let bonusPts = document.querySelector('#bonus-pts').style;
    bonusPts.animation = "smoke 2s linear forwards";
    bonusPts.backgroundImage = `url('/build/bonus_score/+_${number}_pts.png')`;
}

function updateBonusSuccesScore(number) {
    document.querySelector('#ink-reveal-audio').currentTime = 0;
    document.querySelector('#ink-reveal-audio').play();
    let bonusSuccesPts = document.querySelector('#bonus-succes-pts').style;
    bonusSuccesPts.animation = "smoke 2s linear forwards";
    bonusSuccesPts.backgroundImage = `url('/build/bonus_score/+_${number}_pts.png')`;
}

function getNextStepMusic(stepNumber) {
    document.querySelector(localStorage.getItem('music')).pause();
    switch (stepNumber) {
        case 2:
            localStorage.setItem('music', '#detente-1-music');
            break;
        case 3:
            localStorage.setItem('music', '#detente-2-music');
            break;
        case 4:
            localStorage.setItem('music', '#mysterieux-music');
            break;
        case 5:
            localStorage.setItem('music', '#minuscule-music');
            break;
        case 6:
            localStorage.setItem('music', '#angoisse-music');
            break;
        case 7:
            localStorage.setItem('music', '#nage-music');
            break;
        case 8:
            localStorage.setItem('music', '#intro-music');
            break;
        case 9:
            localStorage.setItem('music', '#finale-music')
            break;
        case 10:
            localStorage.setItem('music', '#intro-music')
            break;
        case 11:
            localStorage.setItem('music', '#mini-jeu-music')
            break;
    }
    if (localStorage.getItem('currentStep') == "") {
        document.querySelector('#chute-audio').loop = false;
        document.querySelector('#chute-audio').currentTime = 0;
        document.querySelector('#chute-audio').play();
    }
    if (localStorage.getItem('currentStep') == "4") {
        document.querySelector('#retrecit-audio').loop = false;
        document.querySelector('#retrecit-audio').currentTime = 0;
        document.querySelector('#retrecit-audio').play();
    }
    if (localStorage.getItem('currentStep') == "6") {
        document.querySelector('#grandit-audio').loop = false;
        document.querySelector('#grandit-audio').currentTime = 0;
        document.querySelector('#grandit-audio').play();
    }
    musicPlaylist();
}

function changeSuccesAssets(number) {
    document.querySelector('#succes').style.backgroundImage = `url('/build/succes/succes_${number}.jpeg')`;
}

function succes(timeEnd, timeStart) {
    if ((timeEnd - timeStart) <= 120 && localStorage.getItem('currentStep') == '4') {
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 150)
        changeSuccesAssets(2);
        updateBonusSuccesScore(100);
        succesPannel.show();
        stepPannel.hide();
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
        function listenNow() {
            document.querySelector('#bonus-pts').style.animation = "";
            document.querySelector('#bonus-succes-pts').style.animation = "";
            updateBonusScore(50);
            endStep.show();
            succesPannel.hide();
            document.querySelector('#succes').removeEventListener('click', listenNow)
        }
        document.querySelector('#succes').addEventListener('click', listenNow)
    } else if (Object.values(JSON.parse(window.localStorage.getItem('hints'))[5]).indexOf(true) === -1 && localStorage.getItem('currentStep') == '6') {
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 200)
        changeSuccesAssets(5);
        updateBonusSuccesScore(150);
        succesPannel.show();
        stepPannel.hide();
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
        function listenNow() {
            document.querySelector('#bonus-pts').style.animation = "";
            document.querySelector('#bonus-succes-pts').style.animation = "";
            updateBonusScore(50);
            endStep.show();
            succesPannel.hide();
            document.querySelector('#succes').removeEventListener('click', listenNow)
        }
        document.querySelector('#succes').addEventListener('click', listenNow)
    } else if (Object.values(JSON.parse(window.localStorage.getItem('hints'))[8]).indexOf(true) === -1 && localStorage.getItem('currentStep') == '9') {
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 200)
        changeSuccesAssets(7);
        updateBonusSuccesScore(150);
        succesPannel.show();
        stepPannel.hide();
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
        function listenNow() {
            document.querySelector('#bonus-pts').style.animation = "";
            document.querySelector('#bonus-succes-pts').style.animation = "";
            updateBonusScore(50);
            endStep.show();
            succesPannel.hide()
            document.querySelector('#succes').removeEventListener('click', listenNow)
        }
        document.querySelector('#succes').addEventListener('click', listenNow)
        endStep.element.addEventListener('click', () => {
            document.querySelector('#bonus-pts').style.animation = "";
            endStep.hide();
            averageScore.show();
            localStorage.setItem('finalScore', localStorage.getItem('score'))
            document.querySelector('#score-div').innerHTML = localStorage.getItem('finalScore') + ' pts'
        })
    } else {
        updateBonusScore(50);
        endStep.show();
        stepPannel.hide();
        endStep.element.addEventListener('click', () => {
            document.querySelector('#bonus-pts').style.animation = "";
            endStep.hide();
            gameBoard.show();
            stepDetailPannel.hide();
        })
    }
}

export { getNextStepMusic };