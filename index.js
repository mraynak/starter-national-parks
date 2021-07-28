// console.log(document)
// const heading = document.querySelector("h1");
// console.log(heading);
// const value = document.querySelector(".value")
// console.log(value)
// const button = document.querySelector("button")
// console.log(button)
// const area = document.querySelector(".area-display")
// console.log(area)
// const stat = document.querySelector(".stat > div")
// console.log(stat)
// const hello = document.querySelector(".class")
// console.log(hello)
// const buttons = document.querySelectorAll("button")
// console.log(buttons)
// const ratings = document.querySelectorAll(".rating-display > div")
// for (let element of ratings.values()) {
//     console.log(element)
// }
// for (let i = 0; i < ratings.length; i++) {
//     console.log(ratings[i])
// }

// const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
//     if (content.length > 250) {
//         content = content.slice(0, 250) + '<a href="#">...</a>';
//     }
//     desc.innerHTML = content
//   }

// const ratings = document.querySelectorAll(".rating-display .value");
// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText)
//     if (ratingValue > 4.7) {
//         rating.classList.add("high-rating")
//         rating.classList.remove("value")
//     }
// }

// const parks = document.querySelectorAll(".park-display")
// const numberParks = parks.length
// const newElement = document.createElement("div")
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");
// const header = document.querySelector("header")
// header.appendChild(newElement);

// const main = document.querySelector("main")
// const park = main.querySelector(".park-display")
// main.removeChild(park)

// const firstBtn = document.querySelector("button");
// console.log(firstBtn)
// firstBtn.addEventListener("click", (event) => {
//     console.log("You clicked the button", event);
//   });

  const allBtns = document.querySelectorAll(".rate-button");

  // Iterate through the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });


// original code



//   // Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();
//   const main = document.querySelector("main");
//   const parksList = main.querySelectorAll(".park-display");
//   main.innerHTML = ""; 
//   const parksArray = Array.from(parksList);
//   parksArray.sort((parkA, parkB) => {
//       const parkAName = parkA.querySelector("h2").innerText;
//       const parkBName = parkB.querySelector("h2").innerText;
//       if (parkAName < parkBName) {
//           return -1;
//       } else if (parkAName > parkBName) {
//           return 1;
//       } else {
//           return 0;
//       }
//   })
//   parksArray.forEach((park) => {
//       main.appendChild(park);
//   })
// });

// updated code

// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  



  // sort by rating


const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value").innerText;
    const parkBRating = parkB.querySelector(".rating-display .value").innerText;
    if(parkARating < parkBRating) {
        return -1;
    } else if (parkBRating < parkARating) {
        return 1;
    } else {
        return 0;
    }
  };

  const rateSorterClickHandler = (event) => {
      event.preventDefault();
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
    parksArray.sort(sortByRating);
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
  };


  const main = () => {
    const nameSorter = document.querySelector("#name-sorter")
    nameSorter.addEventListener("click", nameSorterClickHandler)
    const rateSorter = document.querySelector("#rating-sorter");
    rateSorter.addEventListener("click", rateSorterClickHandler); 
  }
  
window.addEventListener("DOMContentLoaded", main);


  console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");