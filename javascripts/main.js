$(document).ready(function() {
		// Handles click of mobile hidden menu
		$("#menu").click(function(e) {
			// Prevent default action of element
			e.preventDefault();
			// Toggles 'masked' class from hidden menu
			// 		'masked' class masks the browser window with a transparent div element to display #menu-options to the client
			$("#menu-mask").toggleClass("masked");
			// Toggles 'notvisible' class
			//		'notvisible' class sets display property of menu-options to notvisible when menu is not in use
			$("#menu-options").toggleClass("notvisible");
			// Toggles menu icon
			//		Only one of these classes should be active at a time, in order to display either a cross or the three menu bars
			$("#menu").toggleClass("fa-bars");
			$("#menu").toggleClass("fa-close");
			// Toggles colours
			//		Colours for menu bars and menu close icon are different due to darker menu colour scheme
      $("nav").toggleClass("black-bgnd");
		})
});
