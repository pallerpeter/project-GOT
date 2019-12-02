/* globals gameOfThronesCharacters*/

function nav() {
  var navElement = document.querySelector('#nav');
  var row =
    `
  <div class="menu-bar">
  <a class="menu logo" href="/html/index.html"><img src="/img/got logo.png" alt="" width="120px" /></a>
</div>
<div class="menu-bar">
  <a class="menu" href="/html/characters.html" target="_self">Characters</a>
</div>
<div class="dropdown">
  <a class="menu dropbtn">Statistics</a>
  <div class="dropdown-content">
    <a href="/html/dead_alive.html">Alive/dead</a>
    <a href="/html/houses.html">Houses</a>
    <a href="/html/organizations.html">Organizations</a>
  </div>
</div>
<div><a class="menu" href="/html/portraits.html">Portraits</a></div>
<div><a class="menu" href="/html/gallery.html">Gallery</a></div>
  `;
  navElement.innerHTML = row;
}

function characterPage() {
  var characterTablesElement = document.querySelector('#characters');
  var bioJon = `<textarea class="bio" cols="60" rows="8" onclick="this.focus();this.select()" disabled>${gameOfThronesCharacters[0].bio} </textarea>`;
  var cimerJon = '';
  var houseJon = '';
  if (gameOfThronesCharacters[0].house) {
    cimerJon = `<img src="/img/houses/${gameOfThronesCharacters[0].house}.png"`;
    houseJon = `${gameOfThronesCharacters[0].house}`;
  }
  var tableRow =
    `
                              <tr >
                                  <td class="name">${gameOfThronesCharacters[0].name} </td>
                                  <td class="portrait"> <img src=/${gameOfThronesCharacters[0].portrait}>  </td>
                                  <td class="cimer"> ${cimerJon}</td>
                                  <td class="house"> ${houseJon}</td>
                                  <td id="bioText${0}">${bioJon}</td>
                                  <td class="buttonEdit"> <input type="button" value="edit" onclick="editRow('${0}')"> </td>
                                  <td class="buttonDelete"> <input type="button" value="delete" onclick="deleteRow()"> </td>
                              </tr>
                          `;
  for (var i = 1; i < gameOfThronesCharacters.length; i++) {
    var bio = `<textarea class="bio" cols="60" rows="8" onclick="this.focus();this.select()" disabled>${gameOfThronesCharacters[i].bio} </textarea>`;
    var cimer = '';
    var house = '';
    if (gameOfThronesCharacters[i].house) {
      cimer = `<img src="/img/houses/${gameOfThronesCharacters[i].house}.png"`;
      house = `${gameOfThronesCharacters[i].house}`;
    }


    tableRow +=
      `
        <tr >
        <td class="name">${gameOfThronesCharacters[i].name} </td>
        <td class="portrait"><img src=/${gameOfThronesCharacters[i].portrait}> </td>
        <td class="cimer"> ${cimer}</td>
        <td class="house"> ${house}</td>
        <td id="bioText${i}">${bio}</td>
        <td class="buttonEdit"> <input type="button" value="edit" onclick="editRow('${i}')"> </td>
        <td class="buttonDelete"> <input type="button" value="delete" onclick="deleteRow()"> </td>
    </tr>
                            `;
  }
  characterTablesElement.innerHTML = tableRow;
}

function footer() {
  var footerElement = document.getElementById('footer');
  var row =
    `
    <p><b>non official GAME OF THRONES website - build by pp</b></p>
    <p>Follow us</p>
    <a href="http://facebook.com"><img src="/img/facebook.png" alt="facebook" /></a>
    <a href="http://instagram.com"><img src="/img/Instagram.png" alt="Instagram" /></a>
    <a href="http://youtube.com"><img src="/img/youtube.png" alt="youtube" /></a>
    <a href="http://twitter.com"><img src="/img/twitter.svg" alt="twitter" /></a>
  `;
  footerElement.innerHTML = row;
}

function editRow(no) {
  var bio = document.getElementById('bioText' + no);
  bio.innerHTML = `<textarea class="bio" cols="60" rows="8" onclick="this.focus();this.select()">${gameOfThronesCharacters[no].bio} </textarea>`;
}

function deleteRow() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}
nav();
characterPage();
footer();
