document.addEventListener("DOMContentLoaded", function(event) {
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
		// if clicked, then make the img bigger
		if (thumbnailElement.className == "") {
			thumbnailElement.className = "small";
		} else if (thumbnailElement.className == "small") {
			thumbnailElement.className = "";
		}
		// クリックされたものの色を変える
	});
});