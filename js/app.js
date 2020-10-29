function starwars() {
  const characterList = document.querySelector('.character-list');
  


  async function loadCharacterList() {
    
    let people = await fetch('https://swapi.dev/api/people/');
    
    const data = await people.json();
    
    let results = data.results;
    

    
    

    

   

    
    results.forEach(result => {
      const character = document.createElement('li');
      characterList.append(character);
      character.innerText = result.name;
      character.classList.add('character-item');

      character.addEventListener('click', () => {
        
      })
    });
  }

  
  loadCharacterList();
  
}

starwars();