const componentAbout= () => {
  const id = document.getElementById('content');
  const dezzepLink = 'https://github.com/Dezzep/Restaurant-Page'
  const pictureLink = 'https://unsplash.com/@ninjason'
  // Reused code from menu.js --> it works almost exactly the same

  //MAKE SURE YOU CHECK IF STATEMENT IN j === 1 to assure this works.
  const about1 = [
    'Created By',
    'Dezzep',
  ];
  const about2 = [
    'Picture By',
    'Jason Leung'
  ]
  const about3 = [
    'is it working',
    'lets find out',
  ]
  
  const links = [dezzepLink, pictureLink];
  const aboutElements = [about1, about2, about3];
  const div = document.createElement('div');
  div.className = 'about-section right-side';
  
    // creates the div for each menuItem
    //assigns div a unique ID, all Divs are contained in class:'about-section'
    for (let i = 0; i < aboutElements.length; i++){ 
      let innerDiv = document.createElement('div');
      innerDiv.id = `about${i}`
      for(let j = 0; j < aboutElements[i].length; j++){
        
        
        //iterates through each element of j (array in each array)
        if (j === 0){
         let header = document.createElement('h3');
         header.textContent = aboutElements[i][j];
         innerDiv.appendChild(header);
         
        }
        else if (j === 1){
         let para = document.createElement('p');
         para.textContent = aboutElements[i][j];
         innerDiv.appendChild(para);
         
         //Anchors Given Links in links array
         if (i < links.length){
           let a = document.createElement('a'); 
           a.appendChild(para);
           a.href = links[i];
           innerDiv.appendChild(a);

         }
        }
        else{
         let para = document.createElement('p');
         para.textContent = aboutElements[i][j];
         innerDiv.appendChild(para);
        }
      
        div.appendChild(innerDiv);
      }
    }
    return id.appendChild(div);
  };
  
  const componentAboutHide = (bool) => {
    const el = document.getElementsByClassName('about-section')
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
  
  
  
  export {componentAbout, componentAboutHide};