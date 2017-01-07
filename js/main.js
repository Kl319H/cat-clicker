/**
 * https://github.com/udacity/ud989-pizzamvo was used for reference
 */

var catClickerData = {
	currentCatId: 0,
	cats: [{
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
			clicks: 0
		}
	]
};



var controller = {
	init: function() {

		view.init();
	},
	/**
	 * Sets current cat Id
	 * @param {number} catId
	 */
	setCurrentCatId: function(catId) {
		catClickerData.currentCatId = catId;
	},
	getCurrentCat: function() {
		return catClickerData.cats[catClickerData.currentCatId];
	},
	getCats: function() {
		return catClickerData.cats;
	},
	incrementCatClicks: function() {
		this.getCurrentCat().clicks++;
	}
};

var view = {
	init: function() {
		var instance = this;
		instance.catTemplate = $('script[data-template="cat"]').html();
		instance.$catImage = $('#cat-img');
		instance.$catName = $('#cat-name');
		instance.$catClicks = $('#cat-clicks');
		$("#cat-list").click(function(event) {
			var catId = event.target.id;
			if (catId) {
				controller.setCurrentCatId(catId);
				instance.updateCatContainer();
			}
		});
		$("#cat-container").click(function(event) {
			controller.incrementCatClicks();
			var cat = controller.getCurrentCat();
			instance.$catClicks.text(cat.clicks);
		});
		instance.render();
	},
	render: function() {
		var $ul = $('#cat-list');
		var cats = controller.getCats();
		var catTemplate = this.catTemplate;
		$(cats).each(function(index, cat) {
			var template = catTemplate.replace(/{{id}}/g, cat.id)
				.replace(/{{name}}/g, cat.name);

			$ul.append($(template));
		});
		this.updateCatContainer();
	},
	updateCatContainer: function() {
		var cat = controller.getCurrentCat();
		this.$catImage.attr("src", cat.image);
		this.$catName.text(cat.name);
		this.$catClicks.text(cat.clicks);
	}
};

controller.init();
