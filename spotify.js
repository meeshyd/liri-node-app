//requiring spotify & fs packages
const spotify = require ("spotify");
const fs = require("fs"); 

function spotifySong(query) {
	let song;
	//if no song name is provided after command, assign "The Sign" by Ace of Base to song
	if (query === undefined) {
		song = "The Sign Ace of Base";
	//otherwise use the song typed in terminal - splice and join used to handle multiple words
	} else {
		song = query;
	}
	
	//use spotify API query URL, limits return to 5 hits for song name
	const queryURL = "https://api.spotify.com/v1/search?q="+song+"&type=track&limit=5";
	
	//use spotify NPM to retrieve data from spotify API
	spotify.get(queryURL, function(err,data){
		//error handling
		if (err) {
			return;
		}
		//loop through results and pretty print to console
		for (let key in data.tracks.items) {
			
			const songJSON = data.tracks.items[key];
			
			const songInfo = "-------------------------------------------------\n\n"+
							"SONG INFORMATION\n" +
							"Artist(s): " + songJSON.artists[0].name + "\n" +
							"Song: " + songJSON.name  + "\n" +
							"Preview this song: " + songJSON.preview_url + "\n" +
							"Album: " + songJSON.album.name + "\n\n" ;
			
			console.log(songInfo);

			fs.appendFile("log.txt", songInfo + "\n\n", function(err){
	        	if(err) {
	        		return;
	   			};
	        });
		};
	});
};

//export spotifySong function to be called within liri.js
module.exports.spotifySong = spotifySong;