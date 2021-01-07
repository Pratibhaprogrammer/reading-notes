# chapter 10 CSS
- associates style rules with HTML elemtents
- rules govern how the content of specified elements should be displayed.  A CSS rule contains two parts: selector and declaration
P {
    font-family: arial;}
- selectors indicate which element the rule applies to.  The same rule can apply to more than one element if you separate the element names with commas.  
- declarations indicate how the elements reffered to in the selector should be styled.  Declarations are split into two parts (a property and a value), and are separated by a colon. 
    
- CSS properties affect how elements are Displayed. they sit inside the curly brackets {} and are made up of a property and a value, separated by a colon.  you can specify several properties in one declaration, each separated by a semi colon.  {Font-family: Arial; Color: yellow; }
- properties indicate the aspect of the element you want to change.  ex. color, font, width, height, boarder.
- values specify the settings you want to use for the chosen properties. ex. if you specify a color property then the value is the color you want the text.

 # chap 11 color
 - the color property allows you to specify color of text within the element.  there are three ways
 - RGB value: how much red, green, or blue ex (100,100,90)
 - Hex codes: six digit codes that represent the amaount of red, blue, and green in the color, preceded by a # ex. #ee3e80
 - color names: there are 147 predefined color names that are recognized by browsers ex. DarkCyan

- color name h1  {
    color: DarkCyan;
}
- hex code {
    color: #ee3e80;}
- rgb value {
    color: rgb(100,100,90)
}

- backgroud color: 



# lab 05
- separation of concerns:  separating the languages in different files for easier refference
    the files need to be linked. "<link rel="style.css" type="text/css">"
- tage the area you want the color with {}

# CSS 
- ways to target elements in css
ID, Class, tag
- id can only be used once per page
- box model shows how margins, boarders, and padding effect your page
- margin pushes things away from the actual boarder
-padding pushes boarder farther from content

# Java script
-adds function to your site.  like the electrical in your house.  buttons, movement, ect...
- object oriented language
- generally used on back end of your site to effect change on the fron end


# Java
let username = prompt('please enter your name);
- to link java to html create <H2><script src="app1.js">script

- document.write(userName) 
- single = is an assignment opperator
- double == comparrison