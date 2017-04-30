# LIRI

## Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

To use LIRI you will need to make a JavaScript file named `keys.js`. Inside `keys.js` your file shoul look like this:

```JavaScript

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}
```

Get your Twitter API keys by following these steps:

   * Step One: Visit <https://apps.twitter.com/app/new>
   * Step Two: Fill out the form with dummy data. Type `http://google.com` in the Website input. Don't fill out the Callback URL input. Then submit the form.
   * Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 
     * Copy and paste them where the `<input here>` tags are inside your keys.js file.
   * Step Four: At the bottom of the page, click the `Create my access token` button to get your access token key and secret. 
     * Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the `<input here>` tags are inside your keys.js file.

## Using LIRI

LIRI accepts the following commands:
1. `evil-tweets`
	* This command shows Lord Voldemort's last 20 tweets and when they were created at in your terminal/bash window. This code can be easily modified to show your personal tweets or any other public account's tweets!

2. `spotify-this-song`
	* This will show the following information about the song in your terminal/bash window
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

   * if no song is provided then your program will default to
     * "The Sign" by Ace of Base

3. `movie-this`
	* This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       * Rotten Tomatoes URL.
     ```

   * If no movie name is provided, the program will output data for the movie 'Mr. Nobody.'

4. `do-what-it-says`
	* LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Additionally, LIRI outputs data to a .txt file called `log.txt` by appending each command you run to the `log.txt` file. 

## Technologies Used:

* JavaScript
* Node.js
* npm Packages
	* [Twitter](https://www.npmjs.com/package/twitter)
	* [Spotify](https://www.npmjs.com/package/spotify)
	* [Request](https://www.npmjs.com/package/request)
    	* Request is used to grab data from the [OMDB API](http://www.omdbapi.com).

## License

### Copyright 2017 Northwestern University Coding Bootcamp - Michelle Didier
