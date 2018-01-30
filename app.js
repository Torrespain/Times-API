// Setting up Global Variables

var searchInput = "giants";
var beginYear = 2015;
var endYear = 2016;
var resultAmount = 5;

// AJAX Callout for Requesting Data

var apiKey = "?api-key=cf9a21c9efdc4b95bd59f3d57b679d20"

var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + apiKey

function articleSearch(){

  queryURL = baseURL + "&" + "q=" + searchInput + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "0101"
  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

      console.log(response)
    });


}

articleSearch()




//   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "cf9a21c9efdc4b95bd59f3d57b679d20",
//   'q':
//   'begin_date':
//   'end_date':