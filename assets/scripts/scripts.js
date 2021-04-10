


/* ONE person will create a function getRequestURL(search,format), 
this function will return a string, which will be the API URL to be
fetched for those values. After finishing, add, commit, pull ,
push and pull request.
*/
function getRequestUrl (searchTerm) { 
    return "https://www.libraryofcongress.gov/search/?"+ "q=" + searchTerm + "&fo=json"
 }

// part 6

function fetchResults(x) {
    //gets the values from search
    let fetchUsersearch = document.querySelector('search')
    let fetchUserSearchData = usersearch.value
    //formats input into url
    
    //creates url from getRequestURL()
    let fetchReq = getRequestUrl(searchTerm)

    //fetch the results?
    fetch(fetchReq)
    .then(response => response.json())
    .then(data => {
        let jsonstring = JSON.stringify(data)
    })
    .catch( fetchError => {
        let errorname = fetchError.name
        let errormessage = fetchError.error
        alert(`error: ${errorname} ${errormessage}`)
    })
    //exe displayResults(resA,resB,resC)
    
}
// part 6

