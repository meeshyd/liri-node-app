
//twitter package + js file with twitter keys + fs
const Twitter = require("twitter");
const keys = require("./keys");
const fs = require("fs"); 

const evilTweets = function() {
	//twitter keys from keys.js
	const twitterClient = new Twitter({
	 	"consumer_key": keys.twitterKeys.consumer_key,
 	 	"consumer_secret": keys.twitterKeys.consumer_secret,
	 	"access_token_key": keys.twitterKeys.access_token_key,
	 	"access_token_secret": keys.twitterKeys.access_token_secret
	});
	
	//twitter parameters: assigned a username and limited search results to 20 tweets
	const params = {
		screen_name: 'Lord_Voldemort7',
		count: 20
	};

	twitterClient.get('statuses/user_timeline', params, function(error, tweets, response){
		//error handling
		if (error) {
			console.log("Error retrieiving tweets: " + error)
		}
		//loop through results and pretty print to console
			for (let key in tweets) {
				var tweetData = "-------------------------------------------------\n\n" +
								"LORD VOLDEMORT TWEETED ON " + tweets[key].created_at + "\n\n" + 
								tweets[key].text + "\n\n" ;
			
			console.log(tweetData);

			fs.appendFile("log.txt", tweetData + "\n\n", function(err){
        		if(err) {
        			return;
   				 }
        	});
		};
	});
};
//export myTweets function to be called within liri.js
module.exports.evilTweets = evilTweets;