

function getbooks(){
    const queryURL = `http://openlibrary.org/search.json?q=`
    
    fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

}
getbooks()

//a form input that allows the user to input a subject(city)
//when button is clicked
// onclick="getbooks()"