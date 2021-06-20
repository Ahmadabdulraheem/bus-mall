// Created by: Waleed A. Afifi
// Email: waleed-afifi@windowslive.com
// GitHub: https://github.com/waleedafifi90
// LinkedIn: https://www.linkedin.com/in/walafifi/

'use strict';

let imgArray = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
 ];


let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById( 'leftImage' );
let rightImage = document.getElementById( 'rightImage' );
let midImage = document.getElementById( 'midImage' );
let counter = 0;

function Imagess( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  Imagess.all.push(this);
}

Imagess.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  console.log(imgArray[i]  );
   new Imagess( imgArray[i].split('.')[0], imgArray[i] );
}

function render() {
  let leftIndex = randomNumber(0, imgArray.length - 1);
  let midIndex  ;
  let rightIndex ;

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
  // console.log(e.target.id);
  if((e.target.id === 'rightImage' || e.target.id === 'leftImage' || e.target.id === 'midImage' ) || counter < 25){
    render();
    console.log(counter);
    counter++;

  }

}

imageSection.addEventListener('click', eventHandler);

render();

// console.log(Images.all);
// leftImage.setAttribute('src', Images.all[0].src)
// let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;
// console.log( leftImage, rightImage );

// Helper function
function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}
