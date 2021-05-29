window.addEventListener("resize", ()=> {
	editExternalLinks();
});

window.addEventListener("load", ()=> {
	editExternalLinks();
});

function editExternalLinks() {
	let links = document.querySelectorAll(".external-links");
	for (l of links) {
		var url = l.getAttribute("temp");
		l.href= url;
	}
}