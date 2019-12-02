/* globals
gameOfThronesCharacters*/
var characterTablesElement = document.querySelector('#characters');
var arrOfOrganizations = [];
var arrMemberOfOrganization = [0, 0, 0, 0, 0, 0];
var stepperMemberOfOrganization = 0;
var j = 0;

function organizationsOfGot() {
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    if (gameOfThronesCharacters[i].organization !== undefined && !arrOfOrganizations.includes(gameOfThronesCharacters[i].organization)) {
      arrOfOrganizations.push(gameOfThronesCharacters[i].organization);
      arrMemberOfOrganization[stepperMemberOfOrganization] += 1;
      stepperMemberOfOrganization += 1;
    } else if (gameOfThronesCharacters[i].organization !== undefined) {
      for (j = 0; j <= arrOfOrganizations.length; j++) {
        if (gameOfThronesCharacters[i].organization === arrOfOrganizations[j]) {
          arrMemberOfOrganization[j] += 1;
        }
      }
    }
  }
}

function organizationsTableFill() {
  organizationsOfGot();
  var tableRow =
    `
      <tr >
        <td class="cimer">Symbol</td>
        <td class="cimer">Organization</td>
        <td class="house">Members of organization</td>
      </tr>
     `;
  for (var i = 0; i < arrOfOrganizations.length; i += 1) {
    tableRow +=
      `
      <tr >
        <td class="cimer"><img src="/img/houses/${arrOfOrganizations[i]}.png"</td>
        <td class="organization">${arrOfOrganizations[i]}</td>
        <td class="member">${arrMemberOfOrganization[i]}</td>
      </tr>
    `;
  }
  characterTablesElement.innerHTML = tableRow;
}
organizationsTableFill();

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
