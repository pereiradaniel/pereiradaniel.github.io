$(document).ready(function() {
		$("#menu").click(function(e) {
			e.preventDefault();
			$("#menu-mask").toggleClass("masked");
			$("#menu-options").toggleClass("notvisible");
			$("#menu").toggleClass("fa-bars");
			$("#menu").toggleClass("fa-close");
      $("#menu").toggleClass("white-80");
		})
		$("#icon1").click(function() {
			$("#icon1").toggleClass("fa-spin");
		})
});
