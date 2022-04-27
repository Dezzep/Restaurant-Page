import {componentHomeHide} from './home';
import {componentMenuHide} from './menu';
import { componentAboutHide } from './about';
const parent = document.getElementById('content');
const color = '#A64955';

const nav1 = "Home";
const nav2 = "Menu";
const nav3 = "Contact";

const componentHeader= () => {
  const element = document.createElement('div');
  const ul = document.createElement('ul');
  const navOptions = [nav1, nav2, nav3];
  element.appendChild(ul);
  element.className = "header";
  //creates list on dom for nav, assigns class -> menu-options
  for (let i = 0; i<navOptions.length; i++){ 
     let li=document.createElement('li');
     li.innerText = `${navOptions[i]}`
     li.className = 'nav-options';
     ul.appendChild(li); 
  }
  return parent.appendChild(element);
};
//event listener for nav bar element clicked
// -- shows the appropriate div of ex: Menu, About.. and hides all other elements
const navClicked = () => {
  const items = document.getElementsByClassName('nav-options');
  items[0].style.background = color;
  for (let i =0; i<items.length; i++){
    items[i].addEventListener('click', function(){
    
      //for --> NAV1
      if(items[i].innerText === nav1){
        componentHomeHide(false);
        items[i].style.background = color;
      }
      else{
        componentHomeHide(true);
        items[0].style.background = '';
      }
      //for --> NAV2
      if(items[i].innerText === nav2){
        componentMenuHide(false);
        items[i].style.background = color;
      }
      else{
        componentMenuHide(true);
        items[1].style.background = '';
      }
      //for --> NAV3
      if(items[i].innerText === nav3){
        componentAboutHide(false);
        items[i].style.background = color;      }
      else{
        componentAboutHide(true);
        items[2].style.background = '';
      }
    });
    
  };
};
const logo = () => {
  const element = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = 'La Bird';
  element.appendChild(header);
  element.id = "logo";
  return parent.appendChild(element);
};
//bundles this scripts functions to simplify the export.
const initNav = () => {
  componentHeader();
  navClicked();
  logo();
};

export {initNav};