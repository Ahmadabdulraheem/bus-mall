 

'use strict';

let imgArray = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
 ];


let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById( 'leftImage' );
let rightImage = document.getElementById( 'rightImage' );
let midImage = document.getElementById( 'midImage' );

let productView = document.getElementById( 'productView' );
let itemList = document.getElementById( 'itemsList' );

let rounds = 25;
let counter = 0;

let leftIndex  ;
let midIndex  ;
let rightIndex ;


//  rounds = document.createElement("input");
// rounds.setAttribute('type', 'text');
// let parent = document.getElementById("parentDiv");
// parent.appendChild(rounds);

function Imagess( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  this.clicks =0;
  Imagess.all.push(this);
}

Imagess.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  console.log(imgArray[i]  );
   new Imagess( imgArray[i].split('.')[0], imgArray[i] );
}

function render() {
   leftIndex = randomNumber(0, imgArray.length - 1);
   midIndex  ;
   rightIndex ;

  do {
    rightIndex = randomNumber(0, imgArray.length - 1);
    midIndex = randomNumber(0, imgArray.length - 1);
  } while   ((midIndex  === rightIndex) || (midIndex === leftIndex) || (rightIndex === leftIndex));

 
 

  leftImage.src = Imagess.all[leftIndex].src;
  midImage.src = Imagess.all[midIndex].src;
  rightImage.src = Imagess.all[rightIndex].src;

  

  Imagess.all[rightIndex].views++;
  Imagess.all[leftIndex].views++;
  Imagess.all[midIndex].views++;

  


  console.log(Imagess.all);
}

function eventHandler(e) {

  
  if((e.target.id === 'rightImage' || e.target.id === 'leftImage' || e.target.id === 'midImage' ) && counter < rounds ){
   
    if(e.target.id === 'rightImage' ){

      Imagess.all[rightIndex].clicks++;
    }

    if(e.target.id === 'leftImage' ){
      Imagess.all[leftIndex].clicks++;
    }

    if(e.target.id === 'rightImage' ){
      Imagess.all[midIndex].clicks++;
    }
    counter++;
    render();
    
    
     console.log(counter);
  }
  else if (counter >= rounds) {
    drawChart();
  }

}

 

function printResult(e) {
  for (let i = 0; i <Imagess.all.length; i++) {
     let li = document.createElement('li');
     itemsList.appendChild(li);
     li.textContent = `${Imagess.all[i].name} had ${Imagess.all[i].clicks} votes, and was seen ${Imagess.all[i].views} `};
    
   

   productView.removeEventListener('click', printResult);
}

imageSection.addEventListener('click', eventHandler);
productView.addEventListener('click',printResult);
render();

 
function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}



function drawChart() {

  let name = [];
  let view = [];
  let clickN = [];

  for(let i = 0; i < Imagess.all.length; i++) {
    name.push(Imagess.all[i].name);
    view.push(Imagess.all[i].views);
    clickN.push(Imagess.all[i].clicks);
  }

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );

  let myChart = new Chart( ctx, {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of watches',
        data: view, 
        backgroundColor: 'rgba(255, 104, 2)',
      borderColor:(54, 162, 235, 1),
      borderWidth: 2},

      {  label: '# of Votes',
      backgroundColor: 'rgba(1, 104, 2)',
       data: clickN,
       borderColor:(75, 192, 192, 1),
      borderWidth: 2
      },

        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 10
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  } );

}
