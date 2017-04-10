//require fs package for do-what-it-says command
const fs = require("fs"); 

//require external js files, used to call functions for my-tweets, spotify-this-song, and movie-this commands
const tweet = require("./tweet");
const spotify = require("./spotify");
const movie = require("./movie");

//global variable: storing command and query song/movie inputs in variables
let command = process.argv[2];
let query = process.argv.splice(3).join('+');

//switch function reads user commands and executes the corresponding function
switch (command) {

	case "evil-tweets":
	tweet.evilTweets();
	break;

	case "spotify-this-song":
	spotify.spotifySong(query);
	break;

	case "movie-this":
	movie.movieThis(query);
	break;

	case "do-what-it-says":
	whatever();
	break;
	//handle invalid commands
	default:
	  console.log('\n-------------------------------------------------\nNot a valid command! Please use one of these valid commands:\n\nmy-tweets\nspotify-this-song <insert song name>\nmovie-this <insert movie name>\ndo-what-it-says\n-------------------------------------------------\n');
	  break;
}

//runs when do-what-it says command is used and executes whatever command is in random.txt
function whatever() {
	//reads random.txt
	fs.readFile("random.txt", "utf8", function(err, data){
		//content in text file is split into an array
		const dataArray = data.split(",");
		//store array items into command and query variables
		command = dataArray[0];
		query = dataArray[1];
		
		//switch function reads user commands and executes the corresponding function
		switch (command) {

			case "evil-tweets":
			tweet.evilTweets();
			break;

			case "spotify-this-song":
			spotify.spotifySong(query);
			break;

			case "movie-this":
			movie.movieThis(query);
			break;

			case "do-what-it-says":
			whatever();
			break;
			//handle invalid commands
			default:
			  console.log('\n-------------------------------------------------\nNot a valid command! Please use one of these valid commands:\n\nmy-tweets\nspotify-this-song <insert song name>\nmovie-this <insert movie name>\ndo-what-it-says\n-------------------------------------------------\n');
			  break;
		}

	});
};