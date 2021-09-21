//Import Rewriter and Page
import { Rewriter } from '../../class/Rewriter.js';
import { Page } from '../../class/Page.js';
import { Switch } from "../../class/Switch";
//import axios
const axios = require('axios').default;
//Game board it self
const gameBoard = new Page('#game-board');
//This view
const teamnamePannel = new Page('#teamname-pannel');
//Confirm button
const confirmDiv = document.querySelector('#accept');
//Teamname rewriter
const teamname = new Rewriter('.hidden-team-input', '#team-output');

window.addEventListener('DOMContentLoaded', () => {
    //Write the input text as the correct place as they are separated divs for display reasons
    teamname.watch(); //Not the same as Switch.watch !!!

    //Listen to the click on Valider to send the data
    confirmDiv.addEventListener('click', () => {
        makePost(teamname.finalOutput());
    })
})

function makePost(team) {
    axios.post('/game/team', {
        teamname: team
    })
    .then(function (response) {
        if (response.data != null ) {
            if (window.localStorage.getItem('teamname')) {
                window.localStorage.clear('teamname');
            }
            window.localStorage.setItem('teamname', response.data);
            document.querySelector('#team-name').style.backgroundImage = "url('/build/menu_principal/nom_equipe_vide.png')"
            document.querySelector('#team-name').style.backgroundSize = "100% 60%";
            document.querySelector('#team-name').style.marginBottom = "-3rem";
            document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/lancerpartie_enable.png')"
            gameBoard.show();
            teamnamePannel.hide();
        }
        teamname.reset();
    })
    .catch(function (error) {
    console.log(error);
    })
};