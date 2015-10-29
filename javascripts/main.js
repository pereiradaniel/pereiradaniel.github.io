$(document).ready(function() {

	var lastItemClicked = undefined;

	$("#item1").click(function() {
		clearPageAndDisplayClickedItem($(".item1content"));
	});

	$("#item2").click(function() {
		clearPageAndDisplayClickedItem($(".item2content"));
	});

	$("#item3").click(function() {
		clearPageAndDisplayClickedItem($(".item3content"));
	});

	$("#item4").click(function() {
		clearPageAndDisplayClickedItem($(".item4content"));
	});

	var clearPageAndDisplayClickedItem = function (itemToDisplay) {
		if (lastItemClicked != undefined) {
			lastItemClicked.toggleClass("notvisible");
		}else{};
			itemToDisplay.toggleClass("notvisible");
			lastItemClicked = itemToDisplay;
	};

});