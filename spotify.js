//requiring spotify package
const spotify = require ("spotify");

function spotifySong(query) {
	let song;
	//if no song name is provided after command, assign "The Sign" by Ace of Base to song
	if (query === undefined) {
		song = "The Sign Ace of Base";
	//otherwise use the song typed in terminal - splice and join used to handle multiple words
	} else {
		song = query;
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

//export spotifySong function to be called within liri.js
module.exports.spotifySong = spotifySong;