console.log('starter2.js linked');

var order = ['zone-3', 'zone-4', 'zone-1', 'zone-2']
//code goes here
//var zone = document.querySelectorAll('.zone');

var zone = document.getElementById(order[0]);
addEventListeners(zone);

var orderCount = 0;
for (var i = 1; i < order.length; i++){
  //console.log(document.getElementById(order[i]))
  document.getElementById(order[i]).addEventListener('mouseover', turnRed);
}
function addEventListeners(order) {
  order.addEventListener('mouseover', turnGreen);
  order.addEventListener('mouseleave', turnWhite);
  order.addEventListener('click', stayGreen);
}
var count = 0;
function turnGreen(evt) {
  evt.target.style.backgroundColor = "green";
}
function turnRed(evt) {
  evt.target.style.backgroundColor = "red";
}
function turnWhite(evt) {
  evt.target.style.backgroundColor = "white";
}

function stayGreen(evt) {
  count++;
  orderCount++;

  if (count >= 4) {
    alert("congratulations!");
  } else {
    addEventListeners(document.getElementById(order[orderCount]));
    evt.target.style.backgroundColor = "green";
    evt.target.removeEventListener('click', stayGreen);
    evt.target.removeEventListener('mouseover', turnGreen);
    evt.target.removeEventListener('mouseleave', turnWhite);
  }

}
