
//Selecteurs
let searchForm = document.getElementById('moteur');
let mots = document.getElementById('motif');
let result = document.getElementById('resultat');
let title = document.querySelector('.title');
let snippet = document.querySelector('.snippet');
let read = document.querySelector('.read');

//l'écouteur
moteur.addEventListener('submit',search);

const quest = document.querySelector('.quest');



//fonction de recuperation des resultats
function  search(event) {
    quest.classList.remove('hidden');   
    event.preventDefault();
    result.innerHTML = "";
    word = mots.value.trim();
    console.log(word);
    const url = `https://fr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${mots.value}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {

        res.query.search.forEach(element => {
            console.log(element);  
        });

        res.query.search.forEach(element => {
            let div = document.createElement('div');
            result.appendChild(div);

             div.innerHTML = `  <div class="element card  shafe">
                                <div class="title">${element.title}</div>
                                <div class="snippet">${element.snippet}</div>
                                <a href="https://fr.wikipedia.org/?curid=${element.pageid}">Read more</a>
                                </div>`
        });
        mots.value = "";
        quest.classList.add('hidden');
    })
    
  
}
