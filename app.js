// Setting up Global Variables

var searchInput = "";
var beginYear = 0;
var endYear = 0;
var resultAmount = 0;

// AJAX Callout for Requesting Data

var apiKey = "?api-key=cf9a21c9efdc4b95bd59f3d57b679d20"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + apiKey

// $.ajax({
//   url: url,
//   method: 'GET',