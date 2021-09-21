import { Rewriter } from '../class/Rewriter.js';

const axios = require('axios').default;

const code = new Rewriter('input.hidden-input', '#output', false)

const confirm = document.querySelector('#confirm');


window.addEventListener('DOMContentLoaded', () => {
    //Write the input text as the correct place as they are separated divs for display reasons
    code.watch();

    //Listen to the click on Valider to send the data
    confirm.addEventListener('click', () => {
        makePost(code.finalOutput());
    })
})

function makePost(password) {
    axios.post('/code', {
        password: password
    })
        .then(function (response) {
            if (response.data != null) {
                document.querySelector('#jingle-win-audio').currentTime = 0;
                document.querySelector('#jingle-win-audio').play();
                setTimeout(() => { window.location = '/game'}, 2000);
            } else {
                console.log('Code invalide');
                document.querySelector('#jingle-loose-audio').currentTime = 0;
                document.querySelector('#jingle-loose-audio').play();
            }
        })
        .catch(e => console.log('code already used', e))
};
