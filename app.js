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
    let allPokemon = pokemon.results
    let randomPokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)]
    // console.log(randomPokemon);
    $("#poke-container").append(`
        <h3>${randomPokemon.name}</h3>
    `)
    catchOnePokemon(randomPokemon.url);
}

function catchOnePokemon(pokeUrl) {
    // console.log(pokeUrl);
    fetch(pokeUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            $("#poke-container").append(`
               <p>base experience: ${data.base_experience}</p>
               <p>height: ${data.height}</p>
                <p>order: ${data.order}</p>
                <p>weight: ${data.weight}</p>
            `)
            displayImg(data.sprites);
        })
        .catch(err => {
            console.log(err);
        })

}

function displayImg(pokeSprites){
    console.log(pokeSprites);
    $("#poke-container").append(`<img src="${pokeSprites.front_default}" alt="" width="">`);
}

function renderMD(){

}

handleGenerateBtn();