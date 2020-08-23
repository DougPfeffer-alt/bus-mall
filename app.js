'use strict';

var productArray = [];
var prodElOne = document.getElementById('product-one');
var prodElTwo = document.getElementById('product-two');
var prodElThree = document.getElementById('product-three');
var section = document.getElementById('totalClicked');
var totalClicked = 0;

// Sourced from MDN Web Docs - Math.random
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Constructor for products
function Product(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;
  productArray.push(this);
}

// Products
new Product('R2D2 Bag', './img/bag.jpg');
new Product('Banana Cutter', './img/banana.jpg');
new Product('Bathroom iPad', './img/bathroom.jpg');
new Product('Rain Boots', './img/boots.jpg');
new Product('Breakfast', './img/breakfast.jpg');
new Product('Meatball Gum', './img/bubblegum.jpg');
new Product('Chair', './img/chair.jpg');
new Product('Sea Demon', './img/cthulhu.jpg');
new Product('Dog-Duck', './img/dog-duck.jpg');
new Product('Dragon Meat', './img/dragon.jpg');
new Product('Pen', './img/pen.jpg');
new Product('Pet Sweep', './img/pet-sweep.jpg');
new Product('Scissors', './img/scissors.jpg');
new Product('Shark Bag', './img/shark.jpg');
new Product('Sweep', './img/sweep.png');
new Product('Tauntaun', './img/tauntaun.jpg');
new Product('Unicorn', './img/unicorn.jpg');
new Product('USB', './img/usb.gif');
new Product('Water Can', './img/water-can.jpg');
new Product('Wine Glass', './img/wine-glass.jpg');

function renderProduct() {
  var prodOne = productArray[randomNumber(productArray.length)];
  var prodTwo = productArray[randomNumber(productArray.length)];
  var prodThree = productArray[randomNumber(productArray.length)];

  while (prodOne === prodTwo) {
    prodTwo = productArray[randomNumber(productArray.length)];
  }
  while (prodOne === prodThree) {
    prodThree = productArray[randomNumber(productArray.length)];
  }
  while (prodTwo === prodThree) {
    prodThree = productArray[randomNumber(productArray.length)];
  }

  prodElOne.src = prodOne.src;
  prodElTwo.src = prodTwo.src;
  prodElThree.src = prodThree.src;

  prodElOne.alt = prodOne.name;
  prodElTwo.alt = prodTwo.name;
  prodElThree.alt = prodThree.name;

  prodOne.viewed++;
  prodTwo.viewed++;
  prodThree.viewed++;

  console.log(productArray);
}

prodElOne.addEventListener('click', eventHandler);
prodElTwo.addEventListener('click', eventHandler);
prodElThree.addEventListener('click', eventHandler);

function eventHandler(e) {
  // console.log(e);
  console.log(e.target.alt);

  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].name === e.target.alt) {
      productArray[i].clicked++;
    }
  }
  renderProduct();
  totalClicked++;
  if (totalClicked === 25) {
    prodElOne.removeEventListener('click', eventHandler);
    prodElTwo.removeEventListener('click', eventHandler);
    prodElThree.removeEventListener('click', eventHandler);
    finalScore();
  }
}

function finalScore() {
  var scoreEl = document.createElement('p');
  var scoreString = '';
  for (var i = 0; i < productArray.length; i++) {
    scoreString = `${productArray[i].name} had ${productArray[i].clicked} votes, and was viewed ${productArray[i].viewed} times`;
    // document.getElementId('totalClicked').innerHTML += scoreString;
    scoreEl = document.createElement('p');
    scoreEl.textContent = scoreString;
    section.appendChild(scoreEl);
  }
}

renderProduct();



