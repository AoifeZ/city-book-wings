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

const cities = ["London","Dublin","Madrid","Paris","Budapest","NYC","Tokyo","Singapore"]