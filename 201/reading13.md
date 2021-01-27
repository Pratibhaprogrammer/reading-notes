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

