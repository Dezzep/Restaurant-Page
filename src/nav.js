import {componentHomeHide} from './home';


//have everything default to hidden here except for nav1?


//
const nav1 = "Home";
const nav2 = "Menu";
const nav3 = "About";
const nav4 = "Contact Us";

const componentHeader= () => {
  const element = document.createElement('div');
  const parent = document.getElementById('content');
  const ul = document.createElement('ul');
  const menuOptions = [nav1, nav2, nav3, nav4];
  element.appendChild(ul);
  element.className = "header";

  //creates list on dom for nav, assigns class -> menu-options
  for (let i = 0; i<menuOptions.length; i++){ 
     let li=document.createElement('li');
     li.innerText = `${menuOptions[i]}`
     li.className = 'menu-options';
     ul.appendChild(li); 
  }
  return parent.appendChild(element)
};

//event listener for nav bar element clicked
// -- shows the appropriate div of ex: Menu, About.. and hides all other elements
const navClicked = () => {
  const items = document.getElementsByClassName('menu-options');
  for (let i =0; i<items.length; i++){
    items[i].addEventListener('click', function(){
    
      //for --> NAV1
      if(items[i].innerText === nav1){
        componentHomeHide(false);
      }
      else{
        componentHomeHide(true);
      }

      //for --> NAV2
    });
    
  };
};

//bundles this scripts functions to simplify the export.
const initNav = () => {
  componentHeader();
  navClicked();
}

export {initNav};