# layout
- div elements are often used as containing elements to group together sections of a page
- Browsers display pages in normal flow unless you specify relative, absolute, or fixed positioning. 
- The float property moves content to the left or right of the page and can be used to create multi'column layouts. (floated items require a defined width)
- pages can be fixec width or liquid(stretchy) layouts
- designers keep pages within 960-1000 pixels wide, and indicate what the site is about within the top 600px 9to demonstrate it's relevance without scrolling)
- grids help create professional and flixible designs
- css Frameworks provide rules for common tasks
- you can include multiple css files in one pages

## block
- display property- how do other elements lay around the element we are styling
div, section, p tag, any box element : you can give these a height and width
  - other options:
    - inline(basically the oposite of block): things are meant to sit next to it. 
      - you catn't give these a height and width
    - inline block: sort of a combo of the two.  has a block like structure but things can sit next to it.  
    ## inline
    - span
  ## float
  - tells the container to sit to the left or right of the surrounding content. 

    ## flex vs float layouts
    - float: float is a property in css that is a property that wants to think of HTML(hyper text) , I can display text to people sort of like a newspaper. 
      - images and artifacts embedded around blocks of text. 
      - float was a property that was thought of as a way to get elements to float around each other. 
    - flex: how do mobile layouts perform well with limited space. 
      - think of a river of elements flowing one way. 
      - you give a container one of two flex proerties( row/ column). 
        - anything in the container will align itself as a row or column. 
    - positioning things within flex boxes: 
      - along the flex axis; justify content
      - opposite flex axis: align items


# Code Review
- see `review` folder
- When writing code, leave comments about what you are trying to do.  
- 