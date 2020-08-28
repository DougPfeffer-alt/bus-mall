'use strict';

var productArray = [];
var renderArray = [];
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

function createRenderArray() {
  while (renderArray.length > 3) {
    renderArray.pop();
  }
  while (renderArray.length < 6) {
    var i = randomNumber(productArray.length);
    while (renderArray.includes(i)) {
      i = randomNumber(productArray.length);
    }
    renderArray.unshift(i);
    console.log(renderArray);
  }
}

// render product
function renderProduct() {
  createRenderArray();

  var prodOne = productArray[renderArray[0]];
  var prodTwo = productArray[renderArray[1]];
  var prodThree = productArray[renderArray[2]];


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

function renderChart() {
  var clicksArray = [];
  var viewedArray = [];
  var nameArray = [];

  for (var i = 0; i < productArray.length; i++) {
    clicksArray.push(productArray[i].clicked);
    viewedArray.push(productArray[i].viewed);
    nameArray.push(productArray[i].name);
  }
  console.log(productArray, clicksArray);

  var chartObject = {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: '# of Votes',
        data: clicksArray,
        backgroundColor: [
          'rgba(255, 165, 0, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(0, 255, 234, 0.2)',
          'rgba(0, 255, 106, 0.2)',
          'rgba(191, 255, 0, 0.2)',
          'rgba(255, 195, 0, 0.2)',
          'rgba(255, 81, 0, 0.2)',
          'rgba(255, 0, 145, 0.2)',
          'rgba(195, 0, 255, 0.2)',
          'rgba(64, 0, 255, 0.2)',
          'rgba(0, 76, 255, 0.2)',
          'rgba(0, 191, 255, 0.2)',
          'rgba(0, 255, 251, 0.2)',
          'rgba(0, 255, 157, 0.2)',
          'rgba(0, 255, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 165, 0, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 255, 234, 1)',
          'rgba(0, 255, 106, 1)',
          'rgba(191, 255, 0, 1)',
          'rgba(255, 195, 0, 1)',
          'rgba(255, 81, 0, 1)',
          'rgba(255, 0, 145, 1)',
          'rgba(195, 0, 255, 1)',
          'rgba(64, 0, 255, 1)',
          'rgba(0, 76, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 255, 251, 1)',
          'rgba(0, 255, 157, 1)',
          'rgba(0, 255, 64, 1)'
        ],
        hoverBackgroundColor: 'orange',
        borderWidth: 1
      }, {
        label: '# of Views',
        data: viewedArray,
        backgroundColor: [
          'rgba(255, 165, 0, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(0, 255, 234, 0.2)',
          'rgba(0, 255, 106, 0.2)',
          'rgba(191, 255, 0, 0.2)',
          'rgba(255, 195, 0, 0.2)',
          'rgba(255, 81, 0, 0.2)',
          'rgba(255, 0, 145, 0.2)',
          'rgba(195, 0, 255, 0.2)',
          'rgba(64, 0, 255, 0.2)',
          'rgba(0, 76, 255, 0.2)',
          'rgba(0, 191, 255, 0.2)',
          'rgba(0, 255, 251, 0.2)',
          'rgba(0, 255, 157, 0.2)',
          'rgba(0, 255, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 165, 0, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 255, 234, 1)',
          'rgba(0, 255, 106, 1)',
          'rgba(191, 255, 0, 1)',
          'rgba(255, 195, 0, 1)',
          'rgba(255, 81, 0, 1)',
          'rgba(255, 0, 145, 1)',
          'rgba(195, 0, 255, 1)',
          'rgba(64, 0, 255, 1)',
          'rgba(0, 76, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 255, 251, 1)',
          'rgba(0, 255, 157, 1)',
          'rgba(0, 255, 64, 1)'
        ],
        hoverBackgroundColor: 'blue',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: false,
    }
  };

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, chartObject); //eslint-disable-line
}

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
    console.log(productArray);
    renderChart();
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



