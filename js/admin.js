var adminView = {
	init: function() {

		var $form = $("form");
		var $name = $("#name");
		var $imgURL = $("#img-url");
		var $clicks = $("#clicks");

		$("#admin-button").click(function(event) {
			var cat = controller.getCurrentCat();
			$form.removeClass("hidden");
			$name.val(cat.name);
			$imgURL.val(cat.image);
			$clicks.val(cat.clicks);
		});

		$("#cancel-button").click(function(event) {
			$form.addClass("hidden");
		});

		$form.submit(function(event) {
			console.log("submit")
			event.preventDefault();
			var name = $name.val();
			var image = $imgURL.val();
			var clicks = $clicks.val();
			controller.updateCat(name, image, clicks);
			$form.addClass("hidden");
		});
	}
};
