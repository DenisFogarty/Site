function hover(id) {
	document.getElementById(id).style.color = "red";
	document.getElementById(id).style.cursor = "pointer";
}

function mouseout(id) {
	text = document.getElementById(id).style.color = "black";
}

function getColors(id) {
	var elem = document.body;
	var colorProperty = window.getComputedStyle(elem, null).getPropertyValue("color").toString();
	var splitColors = colorProperty.match(/(\d+)+/g);
}

function darken(id, red, green, blue) {
	var elem = document.getElementById(id);
	elem.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	
	if(red > 128 || green > 128 || blue > 128) {
		elem.style.color = "rgb(0, 0, 0)";
	}
	else {
		elem.style.color = "rgb(255, 255, 255)";
	}
}

function saveTheme(theme) {
	document.cookie = "theme="+theme;
}

function loadTheme() {
	if(document.cookie == "theme=dark") {
		darken("body", "0", "0", "0");
		document.getElementById("Dark").checked = true;
	}
	else {
		darken("body", "255", "255", "255");
		document.getElementById("Light").checked = true;
	}
}