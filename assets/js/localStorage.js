// Log previous searches when "Search" button is clicked...
function logPreviousSearch() {
	// Read user inputs from the form
	var locationFrom = document.getElementById('locationFrom').value;
	var locationTo = document.getElementById('locationTo').value;
	var departureDate = document.getElementById('departureDate').value;

	// Log user entries to the console
	console.log('---- Previous Search: ----');
	console.log('From:', locationFrom);
	console.log('To:', locationTo);
	console.log('Date:', departureDate);
}

// Retrieve and pre-fill the form with stored user inputs on page load
window.onload = function() {
	// Retrieve the userSearch JSON string from localStorage
	var userSearchJSON = localStorage.getItem('userSearch');

	// Parse the JSON string to get the userSearch object
	var userSearch = JSON.parse(userSearchJSON);

	// Check if there's stored data and log it to the console
	if (userSearch) {
			console.log('---- Previous Search from localStorage: ----');
			console.log('From:', userSearch.locationFrom);
			console.log('To:', userSearch.locationTo);
			console.log('Date:', userSearch.departureDate);
	}
}
