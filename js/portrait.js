function namesandportraits() {
  var tomb = '';
  for ( var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    tomb += `<div class='card'> <img src=/${gameOfThronesCharacters[i].portrait}>
  <div><p>${gameOfThronesCharacters[i].name}</p>
 </div></div> `;
  }
  document.querySelector('.portraitcontainer').innerHTML = tomb;
}


namesandportraits();


