#Gotta Catch 'Em All

## Getting Started
visit [this page](https://pokeapi.co/docs/v2#pokemon) and familiarize 
yourself a bit with the PokeAPI. We will be using the `https://pokeapi.
co/api/v2/pokemon` endpoint. 

### Resources
- [jQuery](https://jquery.com/)
- [pokeAPI](https://pokeapi.co/)
- [how to retrieve images from pokeAPI](https://pokeapi-how.appspot.com/page5)
- [how to make a GET fetch request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- []

### Start Here:
In a new IntelliJ project, create the following files:
  - `app.js`: your app lives here, mainly
  - `index.html`
  - don't forget to:
    - link your js file to your html file
    - include jquery in the right spot
    - hydrate
    - have fun

Your HTML file should have only two elements inside the body (not 
including the script tags)
   - empty div with an id of `poke-container`
   - a button with an id of `catch-btn`; 

### Challenge
   Using jquery or DOM manipulation (your choice), create an 
   static app that allows users to click on the `catch 'em all` button 
   that will display a random pokemon's name and image. 

  A user should be able to continue "catching" random pokemon and see 
  them on the page.
-  

### BONUS:
- statically remove a pokemon from the page (you will not be 
able to DELETE pokemon from the API)
-  add some styling to your page ([bootstrap](https://getbootstrap.com/) is welcome)
- ask for user's name and display the following sentence on the page: 
  "Welcome, `person's name`! You have caught `num of pokemon caught`"
- 
