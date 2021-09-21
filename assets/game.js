//Import scripts specific to each sub view used during the game
import './scripts/game/gameboard.js';
import './scripts/game/rulesSuccess.js';
import './scripts/game/teamname.js';
import './scripts/game/settingUp.js';
import './scripts/game/stepCode.js';
import './scripts/game/hintCode.js';
import './scripts/game/selectHint.js';
import './scripts/game/detailsPannel.js';
import './scripts/game/question.js';
//import components basic functions (switch buttons are all prepared at once)
import initSwitch from './components/switch.js';
window.addEventListener('DOMContentLoaded', () => {
    initSwitch();
    
})

window.onbeforeunload = function() { return "Abandonner la partie ou quitter la page fera perdre définitivement l'accèes au jeu."; };
