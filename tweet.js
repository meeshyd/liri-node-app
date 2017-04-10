
//twitter package + js file with twitter keys
const Twitter = require("twitter");
const keys = require("./keys");

const myTweets = function() {
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
//export myTweets function to be called within liri.js
module.exports.myTweets = myTweets;