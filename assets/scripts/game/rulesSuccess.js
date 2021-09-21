import { Page } from '../../class/Page.js';
import { Image } from '../../class/Image.js';

//Pages or subpages
const rulesContent = new Page('#rules-content');
const successContent = new Page('#success-content');

//Top btns for display change in subview
const rulesBtn = new Image('#rules-button', 'reglement_enable', 'reglement_disable', 'reglement');
const successBtn = new Image('#success-button', 'succes_enable', 'succes_disable', 'reglement');


window.addEventListener('DOMContentLoaded', () => {

    successBtn.element.addEventListener('click', () => {
        rulesBtn.deactivate();
        successBtn.activate();
        rulesContent.hide();
        successContent.show();
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
    })
    
    rulesBtn.element.addEventListener('click', () => {
        rulesBtn.activate();
        successBtn.deactivate();
        rulesContent.show();
        successContent.hide();
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
    })

})
