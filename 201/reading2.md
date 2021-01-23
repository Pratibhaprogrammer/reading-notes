## js data types
- there are 5 immutable data types in js
- strings
  - var string = 'here are words'
  - var anotherString = "more words"
- numbers
  - var number = 10
  - var decimal = 10.2
  - var decimal = 1/2
- booleans
  - true
  - false
  - var isBoolean = true
  - var isNotBoolean = false
- null
- undefined

## conditional statements
-  if / else / if else (keyworkds)
- flow control
  - what lines of code are going to be run in our js engine
  

- if (true){
  console.log('this statement will run)
} else {
  console.log('this statement will not run')
}
// this is a way to evaluate two sides of a statement

if(0 == 1){
  console.log('this will never be true');
}

### escape characters
- these allow symbols to show on the page that would otherwise be used in code and not be visible.  
- &lt; or &#60; would make "<" appear


## header and footer
- <header> <footer> : can be used as the main header and footer that appears at the top or bottom of  every page on the site.  or a header or footer for an individual <article> or <section> within the page


### paragraphs
- <p>
- a paragraph consists of one or more sentances that form a self-contained unit of discourse.  text is easier to understand when it is split up inot units of text.  

### bold and italic
- <b> for bold
- <i> for italic

### superscript and subscript
- <sup> used to contain characters that should be superscript such as the suffixes of dates or mathematical concepts like a raising a numberto a power
- <sub> used to contain characters that should be subscript.  commonly used with foot notes or a chimical formula

### line breaks and horizontal rules
-<br /> this takes all the text after and moves it to the next line
- <hr /> put this between your sections or <p>'s and it will creat a horizontal line

### strong and emphasis
- <strong> wrap this around any words that you want to stand out it bold
- <em> wrap this around andy words that you want to emphasise in italic

### quotations
- <blockquote> put around longer quotes that take up an entire paragraph.  
- <q> used for shorter quotes

- <abbr> to abreviate a word or to spell out an acronym
- <cite> when you want  to cite a piece of work 
- <dfn> used to indicate the defining instance of a new term
- <address> 

## using external css
- <link> can be used in and html document to tell the browser where to find the css file used to style the page
- href specifies the path to the css file
- type: this attribute specifies the type of document being linked to
- rel: specifies the relationship between the html page and the file it is linked to.  

### internal css
- <style> this can be used within your html document
