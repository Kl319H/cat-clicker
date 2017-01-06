
var cat;
var catNameElem = document.getElementById('cat-name');
var catImageElem = document.getElementById('cat-img');

var catsContainer = document.getElementById('cat-container');
catsContainer.addEventListener('click', function(){
    cat.clicks++;
    $("#"+cat.id).find("div").text(cat.clicks);
    console.log("clicked cat", cat);
}, false);

function setCat(catID) {
  cat = cats[catID];
  $(catImageElem).attr("src", cat.image);
  $(catNameElem).text(cat.name);
  console.log(cat);
};

$("#cat-list").click(function(event) {
  var catID = event.target.id;
  setCat(catID);
});
