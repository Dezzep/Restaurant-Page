const componentHome= () => {
  const element = document.createElement('div');
  const idSelect = document.getElementById('content');
  const header = document.createElement('h2');
  const para = document.createElement('p');
  
  header.textContent = "Real Food For Real Humans";
  para.textContent = `Birds eat nice food now humans can eat nice food
  from us birds! We don't cook birDs squak - we are birds but we are good cooks! We
  all watched Ratatouille! Anyone can cook even birds! We make good food fast good! SQuak 
  real nice edible fast and good with real stuff for good nutrition and cheap stuff for good money savings sQUAAK 
  birds are cool come and talk to us about real food! Maybe eat too?`;

  element.appendChild(header);
  element.appendChild(para);
  element.className = "intro-msg right-side";
  

 
  return idSelect.appendChild(element)
};

const componentHomeHide = (bool) => {
  const el = document.getElementsByClassName('intro-msg')
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



export {componentHome, componentHomeHide};