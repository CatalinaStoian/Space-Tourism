const moonButton = document.querySelector('.moon-button');
const marsButton = document.querySelector('.mars-button');
const europaButton = document.querySelector('.europa-button');
const titanButton = document.querySelector('.titan-button');
const destinationName = document.querySelector('.name');
const destinationImages = document.querySelector('.images');
const destinationDescription = document.querySelector('.description');
const destinationDistance = document.querySelector('.distance');
const destinationTravel = document.querySelector('.travel');

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    moonButton.addEventListener('click', () => {
        const moonDestination = data.destinations.find(destination => destination.name === 'Moon');
        destinationDescription.innerText = moonDestination.description;
        destinationName.innerText = moonDestination.name;
        destinationDistance.innerText = moonDestination.distance;
        destinationTravel.innerText = moonDestination.travel;
        destinationImages.innerHTML = `
            <img class="images" src="${moonDestination.images.png}" alt="Moon Image">
        `;
      });
  
      marsButton.addEventListener('click', () => {
        const marsDestination = data.destinations.find(destination => destination.name === 'Mars');
        destinationDescription.innerText = marsDestination.description;
        destinationName.innerText = marsDestination.name;
        destinationDistance.innerText = marsDestination.distance;
        destinationTravel.innerText = marsDestination.travel;
        destinationImages.innerHTML = `
            <img class="images" src="${marsDestination.images.png}" alt="Mars Image">
        `;
      });
  
      europaButton.addEventListener('click', () => {
        const europaDestination = data.destinations.find(destination => destination.name === 'Europa');
        destinationDescription.innerText = europaDestination.description;
        destinationName.innerText = europaDestination.name;
        destinationDistance.innerText = europaDestination.distance;
        destinationTravel.innerText = europaDestination.travel;
        destinationImages.innerHTML = `
            <img class="images" src="${europaDestination.images.png}" alt="Europa Image">
        `;
      });
  
      titanButton.addEventListener('click', () => {
        const titanDestination = data.destinations.find(destination => destination.name === 'Titan');
        destinationDescription.innerText = titanDestination.description;
        destinationName.innerText = titanDestination.name;
        destinationDistance.innerText = titanDestination.distance;
        destinationTravel.innerText = titanDestination.travel;
        destinationImages.innerHTML = `
            <img class="images" src="${titanDestination.images.png}" alt="Titan Image">
        `;
      });

    });