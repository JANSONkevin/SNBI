//import validation code
import './scripts/validation.js';
//import screen orientation script
import './scripts/orientation.js';

const landing = document.querySelector('#portrait-screen');
const code = document.querySelector('#code');
const cancelDiv = document.querySelector('#cancel');

window.addEventListener('DOMContentLoaded', (event) => {
    //Enable click on img after 3 secondes
    setTimeout(() => {
        landing.addEventListener('click', () => {
           landing.classList.add("visually-hidden");
           code.classList.remove("visually-hidden");
           document.querySelector('#page-audio').currentTime = 0;
           document.querySelector('#page-audio').play();
        })
    }, 100)

    //Go back to landing page
    cancelDiv.addEventListener('click', () => {
        document.querySelector('#code').classList.add('visually-hidden');
        document.querySelector('#portrait-screen').classList.remove('visually-hidden');
        document.querySelector('#touche-retour-audio').currentTime = 0;
        document.querySelector('#touche-retour-audio').play();
    })
})

