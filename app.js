// Write an app that generates an activity to be done when someone is bored

function handleGenerateBtn() {
    $('#bored-btn').click(function (e) {
        console.log("I'm bored clicked!")
        makeApiCall();
    })
}

function makeApiCall() {
    fetch('https://pokeapi.co/api/v2/pokemon', {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            generateRandom(data);
        })
        .catch(err => {
            console.log("There's been an error: ", err);
        })
}

function generateRandom(pokemon) {
    // create variables
    // console.log(pokemon);
    $("#poke-container").append(`<div id="each-poke" class="col"></div>`)
    let allPokemon = pokemon.results
    let randomPokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)]
    // console.log(randomPokemon);
    $("#each-poke").append(`
        <h3 class="">${randomPokemon.name}</h3>
    `)
    catchOnePokemon(randomPokemon.url);
}

function catchOnePokemon(pokeUrl) {
    // console.log(pokeUrl);
    fetch(pokeUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            $("#each-poke").append(`
                <ul class="container">
                <li>base experience: ${data.base_experience}</li>
                <li>height: ${data.height}</li>
                <li>order: ${data.order}</li>
                <li>weight: ${data.weight}</li>
</ul>`)
            displayImg(data.sprites);
        })
        .catch(err => {
            console.log(err);
        })

}

function displayImg(pokeSprites){
    console.log(pokeSprites);
    $("#each-poke").append(`<img src="${pokeSprites.front_default}" alt="" width="" class="">`);
}

function renderMD(){

}

handleGenerateBtn();