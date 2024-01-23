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
var cities = ["London","Berlin","Dublin", "Madrid","New York","Singapore","Mumbai"];
//target cities el in html
var destCityName = document.querySelectorAll('.cities');
console.log(destCityName);
destCityName.forEach(list => {

  for(var i=0;i<cities.length;i++){
    var opt = document.createElement('option');
    opt.innerHTML = cities[i];
    opt.value = cities[i];
    list.appendChild(opt)
  }
  
});
//loop through cities array

bookSubject();



