import { Page } from '../../class/Page.js';
import { Image } from '../../class/Image.js';
import { Hint } from '../../class/Hint.js';

import updateBar from './settingUp.js';
import { Switch } from '../../class/Switch.js';

import formatScore from '../../components/scoreFormatter';
import musicPlaylist from '../../components/music.js';
import { getNextStepMusic  } from './stepCode.js';
import leave from '../../leave.js';

//Game board it self
const gameBoard = new Page('#game-board');
const giveUpPage = new Page('#give-up');
//giveUP
const returnGameBoard = new Switch('#return-game-board', '#give-up', '#game-board')
//end game
const averageScore = new Page('#average-score');
//Other subviews
const teamnamePannel = new Page('#teamname-pannel');
// à corriger après les test //
const rulesPannel = new Page('#rules-pannel');//#rules-pannel
// - - - - - - - - - - - - - //
//average score 
const averageScoreSuite = new Switch('#score-suite', '#average-score', '#q1-pannel')
const settingUp = new Page('#setting-up');
const selectHint = new Page('#select-hint');
//Available buttons on the game board
const teamnameButton = document.querySelector('#team-name');
const rulesButton = document.querySelector('#rules');
const startButton = document.querySelector('#game-start');
const showStep = new Page('#step-pannel');
const showHint = new Page('#hint-pannel');

const step = new Image('#step', 'etapes_enable', 'etapes_disable', 'menu_principal');
const hint = new Image('#hint', 'indices_enable', 'indices_disable', 'menu_principal');

//Display change for team name
const teamnameOutputDiv = document.querySelector('#team-name-output');

initHints();

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#music-volume').addEventListener('click', () => {
        document.querySelector('#music-volume').classList.add('visually-hidden');
        musicPlaylist();
    })
    musicPlaylist();
    if (localStorage.getItem('currentStep')) {
        if (localStorage.getItem('currentStep') == '1' && localStorage.getItem('firstStepTimer') > 0) {
            updateBar();
            document.querySelector('#separator').classList.add('visually-hidden');
            document.querySelector('#bar-charge-container').classList.remove('visually-hidden');
            document.querySelector('#bar-charge').classList.remove('visually-hidden');
            const baseInterval = window.setInterval(() => {
                if (localStorage.getItem('firstStepTimer') != '0') localStorage.setItem('firstStepTimer', localStorage.getItem('firstStepTimer') - 1);
                else clearInterval();
                if (localStorage.getItem('currentStep') == 2) clearInterval();
            }, 1000);
            localStorage.setItem('interval', baseInterval)
        } else hint.activate();
        teamnameUpdate();
        startBtnFct();
        document.querySelector('#team-name').style.backgroundImage = "url('/build/menu_principal/nom_equipe_vide.png')"
        document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/abandonnerpartie.png')";
        step.activate();
        step.element.addEventListener('click', showSteps);
        hint.element.addEventListener('click', showHints);
        document.querySelector('#score').innerHTML = localStorage.getItem('score') + " pts";
        document.querySelector('#time').innerHTML = localStorage.getItem('timer');
        var restartInterval = window.setInterval(function () {
            /* if (localStorage.getItem('teamname') === null) {
                return leave();
            } */
            var now = new Date().getTime();
            localStorage.setItem('currentTime', now);
            localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 1);

            var timeleft = 5400000 - ((localStorage.getItem('currentTime') - localStorage.getItem('startTime')));
            let isTimeLeftNegative = timeleft < 0;
            timeleft = Math.abs(timeleft);
            // Calculating the hours, minutes and seconds left
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            // Result is output to the specific element
            document.getElementById("time").innerHTML = hours + " : " + (minutes.toString().length == 2 ? minutes : '0' + minutes.toString()) + " : " + (seconds.toString().length == 2 ? seconds : '0' + seconds.toString());
            isTimeLeftNegative ? document.getElementById("time").innerHTML = "- " + document.getElementById("time").innerHTML : false;
            document.getElementById("score").innerHTML = formatScore(localStorage.getItem('score')) + ' pts';
            // Display the message when countdown is over
            if (timeleft < 0) {
                clearInterval();
                document.getElementById("time").innerHTML = ""
                //document.getElementById("end").innerHTML = "TIME UP!!";
            }
        }, 1000);
        localStorage.setItem('interval', restartInterval)
    }
    //View switch (we name events to be able to remove them later)
    teamnameButton.addEventListener('click', teamnameView);
    rulesButton.addEventListener('click', rulesView);

    endGame();

    //Look for changes of display coming from other scripts
    const observer = new MutationObserver(callback); //callback is defined later
    observer.observe(startButton, { attributes: true });
    observer.observe(teamnameButton, { attributes: true });
    observer.observe(step.element, { attributes: true });
    observer.observe(hint.element, { attributes: true });
})

//Views events
function teamnameView() {
    switchView(teamnamePannel);
}

function rulesView() {
    switchView(rulesPannel);
}

//Main view swith
function switchView(view) {
    gameBoard.hide();
    view.show();
    document.querySelector('#page-audio').currentTime = 0;
    document.querySelector('#page-audio').play();
}

//Observe if there is a change in the htmlElement (here bg img change)
const callback = function (mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            switch (mutation.target.id) {
                case 'team-name':
                    teamnameUpdate();
                    break;
                case 'game-start':
                    startBtnFct();
                    break;
                case 'step':
                    step.element.addEventListener('click', showSteps);
                    break;
                case 'hint':
                    hint.element.addEventListener('click', showHints);
                    break;
            }
        }
    }
};

//Update teamname
function teamnameUpdate() {
    teamnameButton.removeEventListener('click', teamnameView);
    teamnameOutputDiv.innerHTML = window.localStorage.getItem('teamname');
    teamnameOutputDiv.style.zIndex = 9999; //previously at -1 bc it makes the button unclickable otherwise
}

//check where the player is atm to either add the start game event or replace it for the end game event
function startBtnFct() {
    if (localStorage.getItem('currentStep')) {
        startButton.removeEventListener('click', startGame);
        startButton.addEventListener('click', giveUp);
    } else {
        startButton.addEventListener('click', startGame);
    }
}

//Now the fun beggins
function startGame() {
    switchView(settingUp);
}

function showSteps() {
    switchView(showStep);
}

function showHints() {
    if (localStorage.getItem('hintChecked') == 'true') {
        switchView(selectHint)
    } else {
        switchView(showHint);
    }

}

function giveUp() {
    giveUpPage.show();
    gameBoard.hide();
    returnGameBoard.watch();
    document.querySelector('#comfirm-give-up').addEventListener('click', () => {
        leave();
        window.location.href = '/game/leave';
    })

}

function initHints() {
    if (!localStorage.getItem('hints')) {
        var HINTS = [
            new Hint(1),
            new Hint(2),
            new Hint(3),
            new Hint(4),
            new Hint(5),
            new Hint(6),
            new Hint(7),
            new Hint(8),
            new Hint(9),
        ];
        localStorage.setItem('hints', JSON.stringify(HINTS));
    }
}
function endGame() {
    if (localStorage.getItem('endgame') == "true") {
        gameBoard.hide();
        averageScore.show();
        averageScoreSuite.element.addEventListener('click', () => {
            averageScoreSuite.change();
            localStorage.setItem('currentStep', 11)
            getNextStepMusic(11);
        })
        document.querySelector('#score-div').innerHTML = localStorage.getItem('finalScore') + ' pts'
    }
}