import { Page } from "../class/Page";

const portraitScreen = new Page('#portrait-screen')
const landscapeScreen = new Page('#landscape-screen')


window.addEventListener('DOMContentLoaded', (event) => {
    //Check the screen orientation directly and if it is enabled in the current browser
    checkScreen();
    window.addEventListener('orientationchange', () => {
        checkScreen();
    })
});

function checkScreen() {
    portraitScreen.show();
    landscapeScreen.hide();
    if (window.orientation != 0) {
        portraitScreen.hide();
        landscapeScreen.show();
    }
}