function getbooks() {
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

//create var for cities
//make sure each one matches the city name verbatim as configured in the API.
var cities = [
    "London, United Kingdom",
    "Berlin, Germany",
    "Dublin, Ireland",
    "Madrid, Spain",
    "New York City",
    "Singapore",
    "Mumbai, India",
];
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
// localStorage.getItem("savedBookData").name;
