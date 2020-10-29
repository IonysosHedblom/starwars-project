const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const characterList = document.querySelector('.character-list');
const pageCounter = document.querySelector('.page-counter');
let characterListALL = document.querySelectorAll('.character-list li')
let page = 1;

fetchPage();
async function fetchPage() {
    let request = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    let response = await request.json();
    const characters = response.results;
    createListItems(characters);
   
  }
  console.log(characterListALL)
function createListItems(list) {
  list.forEach(character => {
    const listItem = document.createElement('li');
    listItem.classList.add('character-item');
    listItem.innerText = character.name;
    characterList.append(listItem);
    
  });
}

btnRight.addEventListener('click', () => {
  while (characterList.firstChild) {
    characterList.removeChild(characterList.firstChild);
  }
  if(page !== 8){
      page++
      pageCounter.innerText = page;
  }
  fetchPage();
});

btnLeft.addEventListener('click', () => {
    while (characterList.firstChild) {
      characterList.removeChild(characterList.firstChild);
    }

    if(page !== 1){
        page--;
        pageCounter.innerText = page;
    }
    fetchPage();
   
  });


