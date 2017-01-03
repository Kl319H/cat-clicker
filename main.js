//If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().
var clickCount = 0;

var catImage = document.getElementById('cat-img');
var clickCountDisplay = document.getElementById('click-count');
catImage.addEventListener('click', function(){
  clickCount++;
  console.log("clicked cat", clickCount);
  clickCountDisplay.innerHTML=clickCount;
  //the element has been clicked... do stuff here
}, false);
