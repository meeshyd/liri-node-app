
const request = require("request");

function movieThis(query) {
	let movie;

	if (query === undefined) {
		movie = "Mr. Nobody";
	} else {
		movie = query;
	};
	
	const movieURL = "http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&tomatoes=true&r=json";
	
	request(movieURL, function(error, response, body) {
		
		if(!error && response.statusCode == 200){
			const movieJSON = JSON.parse(body);
			console.log("-------------------------------------------------\n"+"MOVIE INFORMATION\n")
			console.log("Title: " + movieJSON.Title);
			console.log("Year: " + movieJSON.Year);
			console.log("IMDB Rating: " + movieJSON.imdbRating);
			console.log("Country: " + movieJSON.Country);
			console.log("Language: " + movieJSON.Language);
			console.log("Plot: " + movieJSON.Plot);
			console.log("Actors: " + movieJSON.Actors);
			console.log("Rotten Tomatoes Rating: " + movieJSON.Ratings[1].Value);
			console.log("Rotten Tomatoes URL: " + movieJSON.tomatoURL + "\n");
			console.log("-------------------------------------------------")
		};
	});
};

//export movieThis function to be called within liri.js
module.exports.movieThis = movieThis;