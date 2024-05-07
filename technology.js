const buttonOne = document.querySelector('.button-one');
const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');
const technologyImage = document.querySelector('.technology-images');
const technologyName = document.querySelector('.name-technology');
const technologyDescription = document.querySelector('.description-technology');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    buttonOne.addEventListener('click', () => {
        const technologyDescriptionOne = data.technology.find(technology => technology.name === "Launch vehicle");
        technologyName.innerText = technologyDescriptionOne.name;
        technologyDescription.innerText = technologyDescriptionOne.description;
        technologyImage.innerHTML = `
        <img class="img-fluid" src="${technologyDescriptionOne.images.portrait}" alt="Technology Image">
        `
    });

    buttonTwo.addEventListener('click', () => {
        const technologyDescriptionTwo = data.technology.find(technology => technology.name === "Spaceport");
        technologyName.innerText = technologyDescriptionTwo.name;
        technologyDescription.innerText = technologyDescriptionTwo.description;
        technologyImage.innerHTML = `
        <img class="img-fluid" src="${technologyDescriptionTwo.images.portrait}" alt="Technology Image">
        `
    });

    buttonThree.addEventListener('click', () => {
        const technologyDescriptionThree = data.technology.find(technology => technology.name === "Space capsule");
        technologyName.innerText = technologyDescriptionThree.name;
        technologyDescription.innerText = technologyDescriptionThree.description;
        technologyImage.innerHTML = `
        <img class="img-fluid" src="${technologyDescriptionThree.images.portrait}" alt="Technology Image">
        `
    });

  });