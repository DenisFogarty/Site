function hover(id) {
	document.getElementById(id).style.color = "red";
	document.getElementById(id).style.cursor = "pointer";
}

function mouseout(id) {
	text = document.getElementById(id).style.color = "black";
}

function changeContrast(id) {
	var elem = document.body;
	var colorProperty = window.getComputedStyle(elem, null).getPropertyValue("color").toString();
	var splitColors = colorProperty.match(/(\d+)+/g);

	window.alert(splitColors);

	elem.style.color = "rgb(256, 0, 0)";
}