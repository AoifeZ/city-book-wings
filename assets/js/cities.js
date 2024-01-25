
//create var for cities
//make sure each one matches the city name verbatim as configured in the API.
var cities = [
	"London, United Kingdom",	
	"Los Angeles, USA, California",
	"Shanghai, China",
	"Paris, France",	
	"Berlin, Germany",
	"Chennai (Madras), India",
	"Dublin, Ireland",
	"Rome, Italy",
	"Tokyo, Japan",
	"Stockholm, Sweden",
];

// Function to populate dropdown
function populateDropdown(selectId) {
	var selectElement = document.getElementById(selectId);

	cities.forEach(function (city) {
			var option = document.createElement("option");
			option.value = city;
			option.text = city;
			selectElement.add(option);
	});
}

// Populate the "From" dropdown
populateDropdown("locationFrom");

// Populate the "To" dropdown
populateDropdown("locationTo");

//! Code below is now resolved in books.js
/*function getbooks() {
	//const queryURL = `http://openlibrary.org/search.json?q=london`

	const queryURL = `http://openlibrary.org/subjects/london.json?q=london`;
	// /subjects/love.json

	fetch(queryURL)
			.then(function (response) {
					return response.json();
			})
			.then(function (data) {
					console.log(data);
			});
}
getbooks();

function bookSubject() {
	var flightdestination = document.getElementById("citysearch").value;
	alert(flightdestination);
}
//bookSubject()

// bookSubject()
//a form input that allows the user to input a subject(city)
//when button is clicked
// onclick="getbooks()"

//target cities el in html
var destCityName = document.querySelectorAll(".cities");
console.log(destCityName);
destCityName.forEach((list) => {
	for (var i = 0; i < cities.length; i++) {
			var opt = document.createElement("option");
			opt.innerHTML = cities[i];
			opt.value = cities[i];
			list.appendChild(opt);
	}
});
//loop through cities array
bookSubject();

// create variable for city to search openlibraryAPI for search
// const cityForBooks = document.innerHTML.getElementById('destination');
// console.log("Books will be returned on the topic of:"cityForBooks);

//for localStorage:
//destination cities + relevant books
//(limited to strings)

// let savedBookData = {
//   name:titleEl;
//   author:authorEl;
//   publicationyear:yearEl;
//   pagecount:pageCountEl;
//   readingtime:readingTimeEl;
// }
// localStorage.setItem("savedBookData",savedBookData);
// console.log(localStorage;)
// //save name
// localStorage.getItem("savedBookData").name; */