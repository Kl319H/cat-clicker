//If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().
var clickCount = 0;
var catName = document.getElementById('cat-name');
var catImage = document.getElementById('cat-img');

var catsContainer = document.getElementById('cat-container');
catsContainer.addEventListener('click', function(){
  clickCount++;
  console.log("clicked cat", clickCount);

}, false);

$("#cat-list").click(function(event) {
  var catID = event.target.id;
  console.log(cats[catID]);
});
