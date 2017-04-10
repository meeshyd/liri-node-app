//global variables
const fs = require("fs"); 
const request = require("request");
const Twitter = require("twitter");
const spotify = require ("spotify");
const keys = require("./keys");
const command = process.argv[2];

//switch function to take in user commands
switch (command) {
	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotifySong();
	break;

	case "movie-this":
	movieThis();
	break;

	case "do-what-it-says":
	whatever();
	break;
	//handle invalid commands
	default:
	  console.log('\n-------------------------------------------------\nNot a valid command! Please use one of these valid commands:\n\nmy-tweets\nspotify-this-song <insert song name>\nmovie-this <insert movie name>\ndo-what-it-says\n-------------------------------------------------\n');
	  break;
}

function myTweets() {
	//twitter keys from keys.js
	const twitterClient = new Twitter({
	 	"consumer_key": keys.twitterKeys.consumer_key,
 	 	"consumer_secret": keys.twitterKeys.consumer_secret,
	 	"access_token_key": keys.twitterKeys.access_token_key,
	 	"access_token_secret": keys.twitterKeys.access_token_secret
	});
	
	//twitter parameters: assigned a random public username and limited search results to 20 tweets
	const params = {
		screen_name: 'seinfeld2000',
		count: 20
	};

	twitterClient.get('statuses/user_timeline', params, function(error, tweets, response){
		//error handling
		if (error) {
			console.log("Error retrieiving tweets: " + error)
		}
		//loop through results and pretty print to console
			for (let key in tweets) {
				console.log("-------------------------------------------------\n\nDate and Time: " + tweets[key].created_at + "\n\n" + tweets[key].text + "\n\n" + "-------------------------------------------------");
			}
	});
};

function spotifySong() {
	let song = process.argv[3];
	//if no song name is provided after command, assign "The Sign" by Ace of Base to song
	if (song === undefined) {
		song = "The Sign Ace of Base";
	//otherwise use the song typed in terminal - splice and join used to handle multiple words
	} else {
		song = process.argv.splice(3).join(' ');
	}
	
	//use spotify API query URL, limits return to 5 songs
	const queryURL = "https://api.spotify.com/v1/search?q="+song+"&type=track&limit=5";
	
	//use spotify NPM to retrieve data from spotify API
	spotify.get(queryURL, function(err,data){

		//error handling
		if (err) {
			console.log("Error retrieiving Spotify data:\n")
			return;
		}
		//loop through results and pretty print to console
		for (let key in data.tracks.items) {
			
			const songJSON = data.tracks.items[key];

			console.log("-------------------------------------------------\n"+"SONG INFORMATION\n")
			console.log("Artist(s): " + songJSON.artists[0].name);
			console.log("Song: " + songJSON.name);
			console.log("Preview this song: " + songJSON.preview_url);
			console.log("Album: " + songJSON.album.name + "\n");
			console.log("-------------------------------------------------")
		};
	});
};

function movieThis() {

	let movieName = process.argv[3];
	
	if (movieName === undefined) {
		movieName = "Mr. Nobody";
	} else {
		movieName = process.argv.splice(3).join(' ');
	}
	
	const movieURL = "http://www.omdbapi.com/?t="+ movieName + "&y=&plot=short&tomatoes=true&r=json";
	
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
			console.log("Rotten Tomatoes Rating: " + movieJSON["tomatoRating"]);
			console.log("Rotten Tomatoes URL: " + movieJSON["tomatoURL"] + "\n");
			console.log("-------------------------------------------------")
		};
	});
};

function whatever() {
	fs.readFile("random.txt", "utf8", function(err, data){
		console.log(data);
	});
};