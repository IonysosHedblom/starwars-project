async function loadCatalog() {
  const btnRight = document.querySelector('.btn-right');
  const btnLeft = document.querySelector('.btn-left');
  const characterList = document.querySelector('.character-list');

  const name = document.querySelector('.name');
  const height = document.querySelector('.height');
  const mass = document.querySelector('.mass');
  const hairColor = document.querySelector('.hair-color');
  const skinColor = document.querySelector('.skin-color');
  const eyeColor = document.querySelector('.eye-color');
  const birthYear = document.querySelector('.birth-year');
  const gender = document.querySelector('.gender');

  const pageCounter = document.querySelector('.page-counter');

  let page = 1;

  fetchPage();

  async function fetchPage() {
    const request = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    const response = await request.json();
    const characters = response.results;

    characters.forEach(character => {
      const listItem = document.createElement('li');
      listItem.classList.add('character-item');
      listItem.innerText = character.name;
      characterList.append(listItem);
      listItem.addEventListener('click', () => {
        name.innerText = listItem.innerText;
        height.innerText = `Height: ${character.height}`;
        mass.innerText = `Mass: ${character.mass}kg`;
        hairColor.innerText = `Hair color: ${character.hair_color}`;
        skinColor.innerText = `Skin color: ${character.skin_color}`;
        eyeColor.innerText = `Eye color: ${character.eye_color}`;
        birthYear.innerText = `Birth year: ${character.birth_year}`;
        gender.innerText = `Gender: ${character.gender}`;
      });
    });
  }

  // function createListItems(list) {
  //   list.forEach(character => {
  //     const listItem = document.createElement('li');
  //     listItem.classList.add('character-item');
  //     listItem.innerText = character.name;
  //     characterList.append(listItem);
  //     listItem.addEventListener('click', () => {
  //       console.log(listItem.innerText);
  //     });
  //   });
  // }

  btnRight.addEventListener('click', () => {
    while (characterList.firstChild) {
      characterList.removeChild(characterList.firstChild);
    }
    if (page !== 8) {
      page++;
      pageCounter.innerText = page;
    }
    fetchPage();
  });

  btnLeft.addEventListener('click', () => {
    while (characterList.firstChild) {
      characterList.removeChild(characterList.firstChild);
    }

    if (page !== 1) {
      page--;
      pageCounter.innerText = page;
    }
    fetchPage();
  });
}

loadCatalog();
