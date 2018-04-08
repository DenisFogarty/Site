function hover(id) {
	document.getElementById(id).style.color = "red";
	document.getElementById(id).style.cursor = "pointer";
}

function mouseout(id) {
	text = document.getElementById(id).style.color = "black";
}

function changeContrast(id) {
	if(document.body.style.backgroundColor == "rgb(255, 255, 255)") {
		document.body.style.backgroundColor = "rgb(0, 0, 0)";
		document.body.style.color = "rgb(255, 255, 255)";
	}
	else {
		document.body.style.backgroundColor = "rgb(255, 255, 255)";
		document.body.style.color = "rgb(0, 0, 0)";
	}
	//document.getElementById(id).style.color = "hsl(0, 0%, 50%)";
	var textColor = document.body.style.color;
	window.alert(textColor);
}