var cats = [
  {
    id: 0,
    name: 'Derrick',
    image: 'images/cat.jpg',
    clicks: 0
  },
  {
    id: 1,
    name: 'Derk',
    image: 'images/cat2.jpg',
    clicks: 0
  },
  {
    id: 2,
    name: 'Damage',
    image: 'images/cat3.jpg',
    clicks: 0
  },
  {
    id: 3,
    name: 'DMG',
    image: 'images/cat4.jpg',
    clicks: 0
  },
  {
    id: 4,
    name: 'Babes',
    image: 'images/cat5.jpg',
    clicks:0
  }
];

var $ul = $('#cat-list');
$(cats).each(function(index, cat) {
  var li = document.createElement('li');
  $(li).text(cat.name);
  $(li).attr("id", cat.id);
  $ul.append($(li));
});
