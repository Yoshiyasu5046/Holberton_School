document.addEventListener("DOMContentLoaded", function(event) {
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
		if (thumbnailElement.className == "") {
			thumbnailElement.className = "small";
		} else if (thumbnailElement.className == "small") {
			thumbnailElement.className = "";
		}
	});
});