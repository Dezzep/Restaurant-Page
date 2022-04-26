import {initNav} from './nav';
import {componentHome} from './home';
import {componentMenu, componentMenuHide} from './menu';
import {componentAbout, componentAboutHide} from './about';
import "./styles/style.scss";

initNav(); // adds nav bar + event listeners related to nav bar.
           //such as hideAllElementsExceptClicked


componentHome(); 
componentMenu();
componentMenuHide(true); //loads elements onto page but has them hidden
componentAbout();
componentAboutHide(true);




//will be beneficial to generate everything in advance 
// and then hide using initNav I think.

