
//requiring fs & request packages
const fs = require("fs"); 
const request = require("request");

function movieThis(query) {
	let movie;

	//if no movie name is included in the query, default to Mr. Nobody. Otherwise, movie is set to user query
	if (query === undefined) {
		movie = "Mr. Nobody";
	} else {
		movie = query;
	};
	
	//store omdb API URL in a variable
	const movieURL = "http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&tomatoes=true&r=json";
	//send data request to omdb API...
	request(movieURL, function(error, response, body) {
		//...if statement to check for errors
		if(!error && response.statusCode == 200){
			//storing main JSON object that's returned in a variable for ease of traversing object
			const movieJSON = JSON.parse(body);
			//storing all the various movie information in a variable
			const movieInfo = "-------------------------------------------------\n\n"+
							"MOVIE INFORMATION\n" + 
							"Title: " + movieJSON.Title + "\n" + 
							"Year: " + movieJSON.Year + "\n" + 
							"IMDB Rating: " + movieJSON.imdbRating + "\n" + 
							"Country: " + movieJSON.Country  + "\n" + 
							"Language: " + movieJSON.Language  + "\n" + 
							"Plot: " + movieJSON.Plot  + "\n" + 
							"Actors: " + movieJSON.Actors  + "\n" + 
							"Rotten Tomatoes Rating: " + movieJSON.Ratings[1].Value  + "\n" + 
							"Rotten Tomatoes URL: " + movieJSON.tomatoURL + "\n\n"+
							"-------------------------------------------------" + "\n";
			//log information to the terminal
			console.log(movieInfo);
            //append the same data to log.txt file using fs package
            fs.appendFile("log.txt", movieInfo + "\n\n", function(err){
        		if(err) {
        			return;
   				 }
        	});
        }
        return;   

	});
};

//export movieThis function to be called within liri.js
module.exports.movieThis = movieThis;