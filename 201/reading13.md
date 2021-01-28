# THE PAST, PRESENT & FUTURE OF LOCAL STORAGE FOR WEB APPLICATIONS
- this was an interesting article explaining the evolution of storage on the web.  (the good, the great, the bad, and the uglly)

## topics include
### A BRIEF HISTORY OF LOCAL STORAGE HACKS BEFORE HTML5

### INTRODUCING HTML5 STORAGE
- #### HTML5 STORAGE SUPPORT
IE	FIREFOX	SAFARI	CHROME	OPERA	IPHONE	ANDROID
8.0+	3.5+	4.0+	4.0+	10.5+	2.0+	2.0+
- ↶ check for HTML5 Storage
```javascript
 function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
// Instead of writing this function yourself, you can use Modernizr to detect support for HTML5 Storage.

if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}
```


- #### USING HTML5 STORAGE

### HTML5 STORAGE IN ACTION

### BEYOND NAMED KEY-VALUE PAIRS: COMPETING VISIONS
- #### WEB SQL DATABASE SUPPORT
IE	FIREFOX	SAFARI	CHROME	OPERA	IPHONE	ANDROID
·	·	4.0+	4.0+	10.5+	3.0+	2.0+

## Data persistence
- date is created and collecte using javascript, but as soon as we refresh the page, go to a different and come back, all the js stuff gets reinitialized
- A big part of any computer application is putting that data somewhere for it to remain indefinitely 
  - using a database we could get our data to persist, but those are complex and have very specific ways of interacting. 
    - browsers don't interact with databases, but computers do.  
- the way that we are going to persist data is through local storager.  
## local stoarage
- an API (application programming interface), just like "document' but this ape is used to stre data and allow it to persist within out file system,
  - deep in the programming files of our bowser, .ives a little directory that stores out localStorage data
    - often stores tokens, so that we don't have to log in every time we visit facebook, gmail, ect...
    - only accissible via a web browser. 
    - each URL has it's own little spot in our localStorage files. 
    - Each URL has a 5amb limit
    - The data is always key value pairs, both the key and the value are strings. 
    - The data will go away if the browser tells it to, or you as the developer, clear it using the API.

    ### localStorage usage
    - The API is accessible throught the local storage object within our runtime
      - localStorage.setItem('key', 'value') method for placing something in localStorage, passes a key and avalue to store.
      - 'localorage.getItem('key'), method for retrieving an item from localStorage, just passes a key and returns the value
      - localStorage.removeItem('key'), method for removing a single item stored, by the key that's passed in. 
      - localStorage.clear(), method for clearing all values in locaStorage.

    - `JSON` object, is another js api, for manipulating javascript objects
      - `JSON.stringify` turns a js object or array, into a string
      - `JSON.parse` turns a string that containsjs object notation and converts it back into a js object.
      