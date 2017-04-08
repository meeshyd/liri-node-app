//look up constants and lets
//look up fat arrow
//look up require readline
//look up require repl

var fs = require("fs"); 
var request = require("request");
var twitter = require("twitter");
var spotify = require ("spotify");
var keys = require("./keys");
var command = process.argv[2];

	switch (command) {
	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotify();
	break;

	case "movie-this":
	movie();
	break;

	case "do-what-it-says":
	whatever();
	break;
	default:
	  console.log('Remy!!!!');
	  break;
}

function myTweets () {
	const tweetClient = new twitter({
	 	"consumer_key": keys.twitterKeys.consumer_key,
 	 	"consumer_secret": keys.twitterKeys.consumer_secret,
	 	"access_token_key": keys.twitterKeys.access_token_key,
	 	"access_token_secret": keys.twitterKeys.access_token_secret
	});
	var params = {screen_name: 'seinfeld2000'};

	tweetClient.get('statuses/text', params, function(error, tweets, response){
		if (!error) {
			console.log(tweets);
		}
	});
};

spotify = () => {
	console.log("spotify function coming soon!");
};

function movie() {
	var movieName = process.argv[3];
	var movieURL = "http://www.omdbapi.com/?t="+ movieName + "&y=&plot=short&r=json";
	request(movieURL, function(error, response, body) {
  		if (!error && response.statusCode === 200) {
			console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
		};
	});
};

function whatever() {
	fs.readFile("random.txt", "utf8", function(err, data){
		console.log(data);
	});
};