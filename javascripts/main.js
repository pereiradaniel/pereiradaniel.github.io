$(document).ready(function() {

	var lastItemClicked = undefined;
	var lastMenuItemClicked = undefined;

	$("#item1").click(function() {
		clearPageAndDisplayClickedItem($(".item1content"), $(this));
	});

	$("#item2").click(function() {
		clearPageAndDisplayClickedItem($(".item2content"), $(this));
	});

	$("#item3").click(function() {
		clearPageAndDisplayClickedItem($(".item3content"), $(this));
	});

	$("#item4").click(function() {
		clearPageAndDisplayClickedItem($(".item4content"), $(this));
	});

	var clearPageAndDisplayClickedItem = function (itemToDisplay, menuItemToBorder) {
		if (lastItemClicked != undefined) {
			lastItemClicked.toggleClass("notvisible");
			lastMenuItemClicked.toggleClass("underlined");
		}else{};
			itemToDisplay.toggleClass("notvisible");
			menuItemToBorder.toggleClass("underlined");
			lastItemClicked = itemToDisplay;
			lastMenuItemClicked = menuItemToBorder;
	};

});