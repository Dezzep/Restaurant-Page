import {initNav} from './nav';
import {componentHome} from './home';
import {componentMenu} from './menu';
import "./styles/style.scss";

componentMenu();
initNav(); // adds nav bar + event listeners related to nav bar.
           //such as hideAllElementsExceptClicked

           // componentHome();

//will be beneficial to generate everything in advance 
// and then hide using initNav I think.

