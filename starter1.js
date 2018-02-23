console.log('starter1.js linked');

var zone = document.querySelectorAll('.zone');

for (var i = 0; i < zone.length; i++) {
  zone[i].addEventListener('mouseover', turnGreen);
  zone[i].addEventListener('mouseleave', turnWhite);
  zone[i].addEventListener('click', stayGreen);
}
var count = 0;
function turnGreen(evt) {
  evt.target.style.backgroundColor = "green";
}

function turnWhite(evt) {
  evt.target.style.backgroundColor = "white";
}

function stayGreen(evt) {
  count++;
  if (count >= 4) {
    alert("congratulations!");
  }
  evt.target.style.backgroundColor = "green";
  evt.target.removeEventListener('click', stayGreen);
  evt.target.removeEventListener('mouseover', turnGreen);
  evt.target.removeEventListener('mouseleave', turnWhite);
}

// for (var i = 0; i < $zone; i++) {
//   console.log($zone[i]);
// }

// $( ".zone" ).each(function( index ) {
//   //console.log( index + ": " + $( this ).text() );
//   $(this).addEventListener('mouseover', turnGreen);
// });


//code goes here
