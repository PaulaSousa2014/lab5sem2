// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response)=> response.json()
// .then(res=> console.log(res)))



 const getName = async(id)=>{
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
     const data = await response.json();
     const name = data.name;
     return name;
 }

 getName(10);

//Reto 3 - Hacer que al pulsar una tecla en el input se vea en un console.log el valor del input


//const question = document.querySelector("#text")

//question.addEventListener('keyup', () => {
//console.log(question.value)
    
//})

const getData = async ()=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);  
    const data = await response.json();
   
    return data;
    
}
let pokeData = [];
const getPokeData = async()=>{
    
    for(i=1; i<=151; i++){
        const data = await getData(i);
        pokeData.push(data);
    }
    return pokeData;

}

getPokeData();

// Mostrar en la lista el nombre y la imagen de los Pokémon

const question = document.querySelector("#text")

window.addEventListener('load', async (e) => {
    const decision = await getPokeData();
    for(i=0; i<= pokeData.length; i++){
      document.querySelector('#list').innerHTML += `${pokeData[i].name} <img src="${pokeData[i].sprites.front_default}">`

    }

    
    const input = document.querySelector('input')
    input.addEventListener('keyup', () => {
        const pokemonFilter = pokemons.filter((pokemon) => {
           
            if (pokemon.name.toLowerCase().includes(input.value.toLowerCase()))
                return true
        })
        
        let html = '';
       
        for (let i = 0; i < pokemonFilter.length; i++) {
            const element = pokemonFilter[i];
            
            html += `
            <a class="panel-block is-active">
                <figure class="image is-48x48">
                    <img src="${element.sprites.front_default}">
                </figure>
            <span class="is-capitalized has-text-weight-semibold">${element.name}</span>
            </a>`
        }
    
        list.innerHTML = html
    })
})




  
