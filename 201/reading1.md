# This is a main heading
## this is a sub heading
### this is another sub heading
- HTML provides the structure for your web page.  
- examples of elements: body, h1, p, h2, ect..
- each element has an opening tag and a closing tag ex. The terms Element and tag are often used interchangeably (stricly speaking the element is what comprises the opening and closing tag and all the content within them)
- this is how you lay out the structure of your page
<html>
    <body>
        <h1> "This is the main heading" <h1>
        <p> "This text might be an intro to the rest of the page.  if the page is long it might be split up into several sub-headings." <p>

            <h2> "This is a sub heading"<h2>
            <p>"more information about the page<p>
            <h2> "another sub-heading" <h2>


    <body>
<html>
- tags act like containers.  They tell you somethig about the information that lies between their opening and closing tags. 

### attributes
- attributes tell us more about the contents of the element.  they appear on the opening tag ane are made up of a "name" and a "value" separated by a "="
- these should always be written in lowercase
- value: information or setting for the attribute.  it's placed in double quotes ""
- here is an example of an attribute used to specify language.  <p> lang = "en-us"> paragraph in english <P> (lang is the name of the attribute and en-sus is the attribute value (english) ).
- the majority of attributes can only be used within certain elements.  a few attributes (such as lang) can apear in any element.  

#### body tag <body><body> : 
- this is everything that shows in the main browser window

#### head <head>
- this often comes before the body element and contains information *about* the page rather than whats actually shown in the browser

#### title
- this is what shows up on the tab of your browser.  above where you would type the URL


# Extra Markup

### DOCTYPES
- this tells the browser which version of HTML you are using. there are different doctypes for different HTML versions  ex. <!DOCTYPE>
 
 ### comments
 - use <!-- "comments here" --> if you want to make a comment that is not visible within the users browser.  
 - comments are useful when looking back at code  to remember why yo did something, or for someone else who might be workin on it
 
 ### global attributes
 - These can be used in any element
 - ID attribute: This gives an element a unique identity and allows you to style it differently than any other instance of the same element on a page.  this should only be used one per page ex. ID = "value">
 - class attribue: This is a way to identify several elements as being different from the other elements on the page.  a grouping ex. class = "value">
 - block elements: These appear to start on a new line in the browser window (block level element) examples include; <h1></h1>, <p></p>, <ul></ul>, <li></li> 
 - inline elements: these will always appear to continus on the same line as their neighbouring elements examples include; <em></em> , <b></b>, <a></a>, <img></img>

 ### grouping text and elements in a block
 - the <div> element allows youto group a set of elements together in one block- level box.  

### grouping text and elements inline
- THE <span> element act like an inline equivalent of the <div>

### iframes
- an <iframe> is like a little window that has been cut into your page -- and in that window you can see another page.  (inline frame)
- the *src* attribute specifies the URL of the page to show in the frame
- the *height* attribute specifies the heights of the iframe in pixels
- the *width* attribute specifies the width of the iframe in pixels

<iframe
width="450"
height="350"
src="httpblablablaimalinktoapage">
</iframe>
 - the *scrolling* attribute will indicate whether the iframe should have scrollvars or not.  this is important if the page inside the iframe islarger than thespace you hage allowed for it.  
 - the *frameborder* attribute will indicate wether the frame should have a border or not.  the value 0 indicates that no border will be shown. 1 indicates that it will be shown
 - *seamless* can be applied to an iframe where scrollvars are not desired.  
 <iframe
 src="httpblablablaimalinktoapage"
 width="450"
 height="350"
 frameborder= "0"
 scrolling="no">
 </iframe>

 ## info about pages 
 - <met> Element lives inside the <head> element and contains info about that web page not visible to users that fulfills a number of purposes such as telling search engines about your page, who created it, and wether or not it's time sensitive.  
 - there is no closing tag for this element.  it uses attributes to carry it's information.  
 - some attributres are *description*, *keywords*, *robots*, *author*, *pragma*, and *expires*

### escape characters
- these allow symbols to show on the page that would otherwise be used in code and not be visible.  
- &lt; or &#60; would make "<" appear


