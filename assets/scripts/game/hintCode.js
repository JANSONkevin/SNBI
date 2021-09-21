import { Page } from '../../class/Page.js';
import { Numpad } from '../../class/Numpad.js';

//import axios
const axios = require('axios').default;

//display used in query response
const hintPannel = new Page('#hint-pannel');
const selectHint = new Page('#select-hint');
const gameBoard = new Page('#game-board');

//hint error
const hintError = new Page('#hint-error-pannel')

//rswitches
const hintBack = document.querySelector('#hint-back');


const hintPad = new Numpad('#numpad-hint', '#hint-code-output');

window.addEventListener('DOMContentLoaded', () => {

    //Numpad is ready to write
    hintPad.start();

    //Return btn listener
    hintBack.addEventListener('click', () => {
        hintPad.reset();  
    })

    document.querySelector('#hint-code-validate')
        .addEventListener('click', () => {
            axios.post('/game/hintCode', {
                step: window.localStorage.getItem('currentStep'),
                code: hintPad.output.innerHTML,
            })
            .then(function (response) {
                if (response.data.step == 'wrong') {
                    console.log(response);
                    hintPannel.hide();
                    hintError.show();
                    document.querySelector('#hint-error-back').addEventListener('click', () => {
                        hintError.hide();
                        gameBoard.show();
                    })
                }
                if (response.data.step == 'step') {
                    selectHint.show();
                    hintPannel.hide();
                    document.querySelector('#jingle-win-audio').currentTime = 0;
                    document.querySelector('#jingle-win-audio').play();
                    window.localStorage.setItem('hintChecked', 'true')
                } else {
                    document.querySelector('#code-erreur').currentTime = 0;
                    document.querySelector('#code-erreur').play();
                }
                hintPad.reset();
            })
            .catch(function (error) {
            console.log(error);
            })
    });
})

/* let hints = JSON.parse(window.localStorage.getItem('hints'));
console.log(hints.stepTwo)
hints.stepTwo.easy = true;
let newHint = new Hint(hints.stepTwo.number);
if (hints.stepTwo.easy) newHint.seeEasy();
if (hints.stepTwo.easy) newHint.seeHard();
if (hints.stepTwo.easy) newHint.seeSolution();
window.localStorage.setItem('hints', JSON.stringify(hints))
console.log(JSON.parse(window.localStorage.getItem('hints')))
 */
