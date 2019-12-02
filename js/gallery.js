function pictures() {
  var tomb = '';
  for ( var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    tomb += `<div class='picture'> <img src=/${gameOfThronesCharacters[i].picture} onerror="fixit(this)" alt='Jon Snow havatlapátol a Burger King-nél.'>

   </div> `;
  }
  document.querySelector('.picturecontainer').innerHTML = tomb;
}


pictures();

function fixit(a) {
  a.src = '/img/tenor.gif';
  a.addEventListener('click', playmusic);
}
var playing = 0;
var audio = new Audio('/music/gandalfmusic.mp3');
function playmusic() {
  if (playing == 0) {audio.play(); playing = 1;} else {audio.pause(); playing = 0;}
}
