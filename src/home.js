const componentHome= () => {
  const element = document.createElement('div');
  const idSelect = document.getElementById('content');
  const header = document.createElement('h2');
  const para = document.createElement('p');
  
  header.textContent = "Welcome Socks";
  para.textContent = `Blick blocks??? That's what we eat here. Blocks and clocks and 
  other stocks such as hawks but the hawks were paid to be here
  blokcckckckckck blickckckckckck stick and flicks? well anyways we eat sticks if you dont eat sticks but 
  like menus you can eat the menu if not you can read menu with word with eyes?
  Thankyou we are block blick sticks! We lick! `;

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