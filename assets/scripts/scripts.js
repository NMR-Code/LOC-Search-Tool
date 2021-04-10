/* ONE person will create a function getRequestURL(search,format), 
this function will return a string, which will be the API URL to be
fetched for those values. After finishing, add, commit, pull ,
push and pull request.
*/
function getRequestUrl (searchTerm, format) { 
    return "https://www.libraryofcongress.gov/search/?"+ "q=" + searchTerm + "/format={"+format+"}&fo=json"
 }