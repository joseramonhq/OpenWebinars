

/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
const http = new XMLHttpRequest();

http.open("GET", "http://www.boredapi.com/api/activity/", true);

http.onreadystatechange = function () {

	if (this.readyState === 4 && this.status === 200) {

		const response = JSON.parse(this.responseText);

		const activity = response.activity;


		console.log("Actividad aleatoria:", activity);
	}
};
http.send();

