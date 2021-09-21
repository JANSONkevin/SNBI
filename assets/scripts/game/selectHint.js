import { Hint } from "../../class/Hint";
import { Switch } from "../../class/Switch";

//hint selection
const hardHint = new Switch('#hard-hint', '#select-hint', '#show-hint')
const easyHint = new Switch('#easy-hint', '#select-hint', '#show-hint')
const solution = new Switch('#solution', '#select-hint', '#show-hint');

//hints array
var hints = JSON.parse(window.localStorage.getItem('hints'));

window.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
    
    hardHint.element.addEventListener('click', () => {
        updateHint('hard');
        document.querySelector('#hint-display').style.backgroundImage = "url('/build/indices/etape" + window.localStorage.getItem('currentStep') + "/indice_difficile.png')";
        hardHint.change();
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
    });

    easyHint.element.addEventListener('click', () => {
        updateHint('easy');
        document.querySelector('#hint-display').style.backgroundImage = "url('/build/indices/etape" + window.localStorage.getItem('currentStep') + "/indice_facile.png')";
        easyHint.change();
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
    });
    
    solution.element.addEventListener('click', () => {
        updateHint('solution');
        document.querySelector('#hint-display').style.backgroundImage = "url('/build/indices/etape" + window.localStorage.getItem('currentStep') + "/solution.png')";
        solution.change();
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
    });
})

function updateHint(difficulty) {
    let currentStep = window.localStorage.getItem('currentStep');
    let newHint = new Hint(hints[currentStep-1].number);
    if (hints[currentStep-1].easy) {newHint.seeEasy();}
    if (hints[currentStep-1].hard) {newHint.seeHard();}
    if (hints[currentStep-1].solution) {newHint.seeSolution();}
    
    if (difficulty == 'easy') { 
        newHint.easy == false ? localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 250): false;
        newHint.easy = true;
    }
    if (difficulty == 'hard') { 
        newHint.hard == false ? localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 100): false;
        newHint.hard = true;
    }
    if (difficulty == 'solution') { 
        newHint.solution == false ? localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 600): false;
        newHint.solution = true;
    }

    hints[currentStep-1] = newHint;
    window.localStorage.setItem('hints', JSON.stringify(hints));
    updateDisplay();
}

function updateDisplay() {
    if (window.localStorage.getItem('currentStep') && window.localStorage.getItem('currentStep') != 1) {
        let currentStep = window.localStorage.getItem('currentStep');
        if (hints[currentStep-1].easy) {easyHint.element.style.backgroundImage = "url('/build/choix_indices/indice_facile_revoir.png')"}
        if (hints[currentStep-1].hard) {hardHint.element.style.backgroundImage = "url('/build/choix_indices/indice_difficile_revoir.png')"}
        if (hints[currentStep-1].solution) {solution.element.style.backgroundImage = "url('/build/choix_indices/solution_revoir.png')"}
    }
}
