const crewOneButton = document.querySelector('.crew-one-btn');
const crewTwoButton = document.querySelector('.crew-two-btn');
const crewThreeButton = document.querySelector('.crew-three-btn');
const crewFourButton = document.querySelector('.crew-four-btn');
const crewRole = document.querySelector('.role-crew');
const crewName = document.querySelector('.name-crew');
const crewBio = document.querySelector('.bio-crew');
const crewImage = document.querySelector('.crew-image');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    crewOneButton.addEventListener('click', () => {
        const crewDescriptionOne = data.crew.find(crew => crew.role === "Commander");
        crewBio.innerText = crewDescriptionOne.bio;
        crewRole.innerText = crewDescriptionOne.role;
        crewName.innerText = crewDescriptionOne.name;
        crewImage.innerHTML = `
        <img class="img-fluid" src="${crewDescriptionOne.images.png}" alt="Crew Image">
        `
        
      });
  
      crewTwoButton.addEventListener('click', () => {
        const crewDescriptionTwo = data.crew.find(crew => crew.role === "Pilot");
        crewBio.innerText = crewDescriptionTwo.bio;
        crewRole.innerText = crewDescriptionTwo.role;
        crewName.innerText = crewDescriptionTwo.name;
        crewImage.innerHTML = `
        <img class="img-fluid" src="${crewDescriptionTwo.images.png}" alt="Crew Image">
        `
    });

    crewThreeButton.addEventListener('click', () => {
        const crewDescriptionThree = data.crew.find(crew => crew.role === "Flight Engineer");
        crewBio.innerText = crewDescriptionThree.bio;
        crewRole.innerText = crewDescriptionThree.role;
        crewName.innerText = crewDescriptionThree.name;
        crewImage.innerHTML = `
        <img class="img-fluid" src="${crewDescriptionThree.images.png}" alt="Crew Image">
        `
    });

    crewFourButton.addEventListener('click', () => {
      const crewDescriptionFour = data.crew.find(crew => crew.role === "Mission Specialist");
      crewBio.innerText = crewDescriptionFour.bio;
      crewRole.innerText = crewDescriptionFour.role;
      crewName.innerText = crewDescriptionFour.name;
      crewImage.innerHTML = `
      <img class="img-fluid" src="${crewDescriptionFour.images.png}" alt="Crew Image">
      `
  });

});