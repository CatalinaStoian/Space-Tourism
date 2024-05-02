const homeButton = document.querySelector('.home-button');
// Destination
// const moonButton = document.querySelector('.moon-button');
// const marsButton = document.querySelector('.mars-button');
// const europaButton = document.querySelector('.europa-button');
// const titanButton = document.querySelector('.titan-button');
// const destinationName = document.querySelector('.name');
// const destinationImages = document.querySelector('.images');
// const destinationDescription = document.querySelector('.description');
// const destinationDistance = document.querySelector('.distance');
// const destinationTravel = document.querySelector('.travel');
// // Crew
// const crewOneButton = document.querySelector('.crew-one-btn');
// const crewTwoButton = document.querySelector('.crew-two-btn');
// const crewThreeButton = document.querySelector('.crew-three-btn');
// const crewRole = document.querySelector('.role-crew');
// const crewName = document.querySelector('.name-crew');
// const crewBio = document.querySelector('.bio-crew');
// const crewImage = document.querySelector('.crew-image');

// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {

//     // Destination
//     moonButton.addEventListener('click', () => {
//       const moonDestination = data.destinations.find(destination => destination.name === 'Moon');
//       destinationDescription.innerText = moonDestination.description;
//       destinationName.innerText = moonDestination.name;
//       destinationDistance.innerText = moonDestination.distance;
//       destinationTravel.innerText = moonDestination.travel;
//       // destinationImages.innerHTML = `
//       //     <img src="${moonDestination.images.png}" alt="Moon Image">
//       // `;
//     });

//     marsButton.addEventListener('click', () => {
//       const marsDestination = data.destinations.find(destination => destination.name === 'Mars');
//       destinationDescription.innerText = marsDestination.description;
//       destinationName.innerText = marsDestination.name;
//       destinationDistance.innerText = marsDestination.distance;
//       destinationTravel.innerText = marsDestination.travel;
//       // destinationImages.innerHTML = `
//       //     <img src="${marsDestination.images.png}" alt="Mars Image">
//       // `;
//     });

//     europaButton.addEventListener('click', () => {
//       const europaDestination = data.destinations.find(destination => destination.name === 'Europa');
//       destinationDescription.innerText = europaDestination.description;
//       destinationName.innerText = europaDestination.name;
//       destinationDistance.innerText = europaDestination.distance;
//       destinationTravel.innerText = europaDestination.travel;
//       // destinationImages.innerHTML = `
//       //     <img src="${europaDestination.images.png}" alt="Europa Image">
//       // `;
//     });

//     titanButton.addEventListener('click', () => {
//       const titanDestination = data.destinations.find(destination => destination.name === 'Titan');
//       destinationDescription.innerText = titanDestination.description;
//       destinationName.innerText = titanDestination.name;
//       destinationDistance.innerText = titanDestination.distance;
//       destinationTravel.innerText = titanDestination.travel;
//       // destinationImages.innerHTML = `
//       //     <img src="${titanDestination.images.png}" alt="Titan Image">
//       // `;
//     });
//   // Crew
//   //   crewOneButton.addEventListener('click', () => {
//   //     const crewDescriptionOne = data.crew.find(crew => crew.role === "Commander");
//   //     crewBio.innerText = crewDescriptionOne.bio;
//   //   });

//   //   crewTwoButton.addEventListener('click', () => {
//   //     const crewDescriptionTwo = data.crew.find(crew => crew.role === "Pilot");
//   //     crewBio.innerText = crewDescriptionTwo.bio;
//   //     crewRole.innerText = crewDescriptionTwo.role;
//   // });
//     });
    

homeButton.addEventListener('click', () => {
  window.location.href = './destination.html';
});









