/* globals
var arrOfHouses
gameOfThronesCharacters*/
var arrOfHouses = [];
var arrMemberOfHouses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var stepperMemberOfHouses = 0;
var j = 0;

function housesOfGot() {
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    if (gameOfThronesCharacters[i].house !== undefined && !arrOfHouses.includes(gameOfThronesCharacters[i].house)) {
      arrOfHouses.push(gameOfThronesCharacters[i].house);
      arrMemberOfHouses[stepperMemberOfHouses] += 1;
      stepperMemberOfHouses += 1;
    } else if (gameOfThronesCharacters[i].house !== undefined) {
      for (j = 0; j < arrOfHouses.length; j++) {
        if (gameOfThronesCharacters[i].house === arrOfHouses[j]) {
          arrMemberOfHouses[j] += 1;
        }
      }
    }
  }
}

function housesTableFill() {
  var characterTablesElement = document.querySelector('#characters');
  housesOfGot();
  var tableRow =
    `
    <tr >
        <td class="cimer">Symbol</td>
        <td class="cimer">House</td>
        <td class="house">Members of house</td>
      </tr>
     `;
  for (var i = 0; i < arrOfHouses.length; i += 1) {
    tableRow +=
      `
      <tr >
        <td class="cimer"><img src="/img/houses/${arrOfHouses[i]}.png"</td>
        <td class="house">${arrOfHouses[i]}</td>
        <td class="house">${arrMemberOfHouses[i]}</td>
      </tr>
    `;
  }
  characterTablesElement.innerHTML = tableRow;
}
housesTableFill();

function footer() {
  var footerElement = document.getElementById('footer');
  var row =
    `
    <p><b>OFFICIAL GAME OF THRONES WEBSITE - team RED WEDDING</b></p>
    <p>Follow us</p>
    <a href="http://facebook.com"><img src="/img/facebook.png" alt="facebook" /></a>
    <a href="http://instagram.com"><img src="/img/Instagram.png" alt="Instagram" /></a>
    <a href="http://youtube.com"><img src="/img/youtube.png" alt="youtube" /></a>
    <a href="http://twitter.com"><img src="/img/twitter.svg" alt="twitter" /></a>
  `;
  footerElement.innerHTML = row;
}
footer();
