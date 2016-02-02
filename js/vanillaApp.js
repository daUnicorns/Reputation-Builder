
   // this function takes the question object returned by the StackOverflow request
   // and returns new results to be appended to DOM
var showQuestion = function(question) {
  var xhr = new XMLHttpRequest();
  var response;
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      response = JSON.parse(xhr.responseText);

    }
  };
  xhr.open("GET", "https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&site=stackoverflow", false);
  xhr.send();
  var result = response.items[0].link; // make loop
  return result;
};


// this function takes the results object from StackOverflow
// and returns the number of results and tags to be appended to DOM
var showSearchResults = function(query, resultNum) {
    var results = resultNum + ' results for <strong>' + query + '</strong>';
    return results;
};


// takes a string from input and searches
// for unaswered questions on StackOverflow API.

var getUnanswered = function(tags) {// inputs tags from submit and should match anything that we get from the showQuestion
  // loop through elements
  // if .match > -1 add response.item.title with link

  return string // showSearchResultsesults ... list of links
};


document.getElementById('unanswered-getter').addEventListener('submit',function(e){
	  e.preventDefault();
	  document.getElementById('results').innerHTML+="";
	  var tags = document.getElementById('tags').value;
	  getUnanswered(tags);

});
