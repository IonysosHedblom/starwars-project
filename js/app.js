async function loadCatalog() {
  const btnRight = document.querySelector('.btn-right');
  const btnLeft = document.querySelector('.btn-left');
  const characterList = document.querySelector('.character-list');

  // Character list
  const name = document.querySelector('.name');
  const height = document.querySelector('.height');
  const mass = document.querySelector('.mass');
  const hairColor = document.querySelector('.hair-color');
  const skinColor = document.querySelector('.skin-color');
  const eyeColor = document.querySelector('.eye-color');
  const birthYear = document.querySelector('.birth-year');
  const gender = document.querySelector('.gender');

  // Planet list
  const planet = document.querySelector('.planet');
  const rotation = document.querySelector('.rotation');
  const orbital = document.querySelector('.orbital');
  const diameter = document.querySelector('.diameter');
  const climate = document.querySelector('.climate');
  const gravity = document.querySelector('.gravity');
  const terrain = document.querySelector('.terrain');

  const pageCounter = document.querySelector('.page-counter');

  let page = 1;

  fetchPage();

  async function fetchPage() {
    // Fetch character data
    const request = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    const response = await request.json();
    const characters = response.results;

    characters.forEach(async character => {
      const planetRequest = await fetch(character.homeworld);
      const planetResponse = await planetRequest.json();

      const listItem = document.createElement('li');
      listItem.classList.add('character-item');
      listItem.innerText = character.name;
      characterList.append(listItem);
      listItem.addEventListener('click', () => {
        // Update character details
        name.innerText = listItem.innerText;
        height.innerText = `Height: ${character.height}`;
        mass.innerText = `Mass: ${character.mass}kg`;
        hairColor.innerText = `Hair color: ${character.hair_color}`;
        skinColor.innerText = `Skin color: ${character.skin_color}`;
        eyeColor.innerText = `Eye color: ${character.eye_color}`;
        birthYear.innerText = `Birth year: ${character.birth_year}`;
        gender.innerText = `Gender: ${character.gender}`;

        //Update planet details
        planet.innerText = planetResponse.name;
        rotation.innerText = `Rotation period: ${planetResponse.rotation_period}`;
        orbital.innerText = `Orbital period: ${planetResponse.orbital_period}`;
        diameter.innerText = `Diameter: ${planetResponse.diameter}`;
        climate.innerText = `Climate: ${planetResponse.climate}`;
        gravity.innerText = `Gravity: ${planetResponse.gravity}`;
        terrain.innerText = `Terrain: ${planetResponse.terrain}`;
      });
    });
  }

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
