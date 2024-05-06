document.addEventListener("click", (event) => {
	if (!sessionStorage.getItem("clicks")) {

		sessionStorage.setItem("clicks", 0);

	} else {
		let click = sessionStorage.getItem("clicks");
		sessionStorage.setItem("clicks", ++click);
	}
});


/** 
document.addEventListener("click", (event) => {
	if (!localStorage.getItem("clicks")) {
		localStorage.setItem("clicks", 0);
	} else {
		let click = localStorage.getItem("clicks");
		localStorage.setItem("clicks", ++click);
	}
});
 *//
