const btn = document.querySelector('.btn-right');
const characterList = document.querySelector('.character-list');
const pageCounter = document.querySelector('.page-counter');
let page = 1;

fetchPage();

function createListItems(list) {
  list.forEach(character => {
    const listItem = document.createElement('li');
    listItem.classList.add('character-item');
    listItem.innerText = character.name;
    characterList.append(listItem);
  });
}

btn.addEventListener('click', () => {
  while (characterList.firstChild) {
    characterList.removeChild(characterList.firstChild);
  }
  page++;
  pageCounter.innerText = page;
  fetchPage();
});

async function fetchPage() {
  let request = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  let response = await request.json();
  const characters = response.results;
  createListItems(characters);
}
