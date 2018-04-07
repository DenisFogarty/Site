function hover(id) {
	document.getElementById(id).style.color = "red";
	document.getElementById(id).style.cursor = "pointer";
}

function mouseout(id) {
	text = document.getElementById(id).style.color = "black";
}

function changeContrast(id) {
	if(document.getElementById(id).style.backgroundColor == "black") {
		document.getElementById(id).style.backgroundColor = "white";
		document.getElementById(id).style.color = "black";
	}
	else {
		document.getElementById(id).style.backgroundColor = "black";
		document.getElementById(id).style.color = "white";
	}
}

function hideSidebar() {
	
}