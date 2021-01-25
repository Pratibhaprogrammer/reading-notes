## web Development practical topics
- website hosting
  - Where our files go, how do we access them?
    - In order to access a website on the internet, you need to go to a url that points to a site HOST. 
      - GoDaddy, NameCheap, SquareSpace, AWS.
      - Host site content
        - html, css, js, images, videos, audio files, ect...
      - FTP / git and git remotes=> to a remote dirctory
      - think of this a s a directory that lives in the cloud that can accept http requests. 
    - accessing this is just a matter of buying an adress. 
      - domain name registrars. 
      - CNAME
- SEO
  - Search Engine Optimization
  - is your content listed well for search engine indexors?
    - program that is constantly running to see what content exists for keywords and topics.  
    - data driven, but it starts with data existing. 
  - for a site developer, this data is our site content.  
    - what is your site about? what is it giving to the world?
    - have content that people care about
      - the content already includes keywords, titles, headings. 
    - creating good outlines and semantic HTML. 
    - meta tags that describe your content well. 
      - data about your content. 
    - having content that loads well. 
    - tayloring scripts/configuration and meta date to specific 3rd parties (google ect...). 
- Analytics
  - data driven
  - how users are engaging with your content. 
    - The data we're talking about is the collection of stats involving user engagement. 
    - How long are people looking at my homepage?
    - How many times are people clicking on calls to action?
    - Logging geolocation data of your users. 
      - a lot of this stuff is calculated already by hosting services.  
    - what do you want to do with this data and what questions are you asking?
      - Do I want people to only spend 3-10 seconds on a specific page?

## user interaction continues
- HTML vide0/audio
  - native support in html
  - host vidio and audio content on the web( in the cloud)
  - This content can be rendered / listened to via HTML

  ```html
  <video src="path/to/video.file">
  <audio src="path/to/audio.file">

  <video controls volume="0.5" autoplay muted>
    <source src="path/to/a/video.file>
    <source src="path/to/another/video.file">
    <!-- if one source element is unsupported you can list another that hopefully, the first one will be used-->
    </video>


  ```
  