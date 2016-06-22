$(document).ready(function() {
		$("#menu").click(function() {
			$("#menu-mask").toggleClass("masked");
			$("#menu-options").toggleClass("notvisible");
			$("#menu").toggleClass("fa-bars");
			$("#menu").toggleClass("fa-close");
			$("#menu").toggleClass("menu-close-colour");
		})
		$("#icon1").click(function() {
			$("#icon1").toggleClass("fa-spin");
		})
});