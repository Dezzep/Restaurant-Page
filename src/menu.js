const componentMenu= () => {
const id = document.getElementById('content');
const color = '#A64955';
//Array Layout for menuItem = [Header, para, para, para..]
const menuItem1 = 
['Rock Soup', 
"Broccoli and rock made with care by head chef Soup Bird Man. Some birds eat it some don't", 
'6$',
]
const menuItem2 = 
['bllooop?',
'Classic bllooop on a stick it is made with goop and stick very good for healthy birds and real humans too',
'56.99$',
]
const menuItem3 = [
  'Blocks Socks',
  'Delicious Block Socks made with real flick flock shoe socks! For those who hate shoes but like socks',
  '17.99$',
]
const menuItem4 = [
  'Real Life Meat',
  'This is not fake meat we get it from real stuff really real good stuff made fresh every day and real too!',
  '46.99$',
]
const menuItem5 = [
  'Joshuas Homemade Rice',
  'Every morning Joshua comes in with 4 rices (each rice is size of big rice) Josh is allergic to rice now :(',
  '4.00$ -- Chef Special!',
]
const menuItem6 = [
  'Very Serious Food',
  "For those who are serious about taste and love food or maybe you're on a date?",
  "199.99$ -- Serves 2",
]


const menuOptions = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6,];
const div = document.createElement('div');
div.className = 'menu-options right-side';

  // creates the div for each menuItem
  //assigns div a unique ID, all Divs are contained in class:'menu-options'
  for (let i = 0; i < menuOptions.length; i++){ 
    let innerDiv = document.createElement('div');
    innerDiv.id = `menu-item${i}`; // created a ID for each menuItem
    for(let j = 0; j < menuOptions[i].length; j++){
      
      
      //iterates through each element of j (array in each array)
      if (j === 0){
       let header = document.createElement('h3');
       header.textContent = menuOptions[i][j];
       innerDiv.appendChild(header);
      }
      else{
       let para = document.createElement('p');
       para.textContent = menuOptions[i][j];
       
       if(j === 2){
         para.style.color = color;
       }
       innerDiv.appendChild(para);
      }
    
      div.appendChild(innerDiv);
    }
  }
  return id.appendChild(div);
};

const componentMenuHide = (bool) => {
  const el = document.getElementsByClassName('menu-options')
  if (bool === true){
  for (let i = 0; i < el.length; i++){
    el[i].style.display = 'none';
    }
  };
  if (bool === false){
    for (let i = 0; i < el.length; i++){
      el[i].style.display = '';
    }
  };
}



export {componentMenu, componentMenuHide};