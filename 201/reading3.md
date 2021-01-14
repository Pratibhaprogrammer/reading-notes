# lists
- There are 3 types of html lists: 
  - ordered lists. <ol>
  - unordered lists. <ul>
  - definition lists
    - <dl> creates the list
    - <dt>  contains the term
    - <dd> contains the definition

## html / css box model

- how to position elements among other elements.  
- each element is a box.  It has a height and a width which equates to a number
- each different element type has different default propertiesfor these numbers. 
- the css properties that control an elements box.   
  - Margin: space between the element content and any element adjacent to it.  
  - padding: the space around the content itself and its surrounding box
  - border: A line of various widths, around just the content.  
  - height + width dictates how much space the actual content takes up.  
- 'border-width' property is used to control the width of a border
  - you can use thin, medium, thick or give values in pixels
    - you can also control the individual size of borders using four separate properties
      - border-top-width, boder-right-width, border-bottom-width, border-left-width
- 'border-style' controls the style of a border
  - 'solid' for a solid line
  - 'dotted' for a dotted line
  - 'dashed' for a series of short lines
  - 'double' for two solid lines
  - 'groove' appears to be carved into the image
  - 'ridge' appears to stick out from the page
  - 'inset' appears embedded into the page
  - 'outset' looks like it is coming out of the screen
  - 'hidden/none' no border is shown
    - you can individually change the styles of different borders using
      - border-top-style, border-left-style and so on
  - 'border-color' specifies the color
    - you can specify with color names or RGB values
    - you can also specify different sections of the border with border-top-color... so on and so forth
  - other properties are padding and margin
