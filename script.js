import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

// Select City

const customSelect = document.querySelector(".custom-select");

data.forEach((value,index) => {
  const option = document.createElement("option");
  option.setAttribute("value",index);

  option.innerHTML = value.name;

  customSelect.appendChild(option);

})



customSelect.addEventListener('change', (event) => {

  let selectedCity = Number(event.target.value);
  
  createTableElements([data[selectedCity]], "singlecity");
  

});


// Population - bigger than 500.000

const populationBigger = document.querySelector("#populationBigger");


populationBigger.addEventListener("click", function(){

  const biggerThan = data.filter(city => {
    return city.population > 500000;
  })

  createTableElements(biggerThan, "allcities");

  
});

// land area - less than 1000

const landArea = document.querySelector("#landAreaLess");

landArea.addEventListener("click", function(){

  const lessThan = data.filter(city => {
    return city.landArea < 1000;
  })

  createTableElements(lessThan, "allcities");

  
})

// does any city has population less than 100.000?

const isPopulationLess = document.querySelector("#isPopulationLess");

isPopulationLess.addEventListener("click", function(){

  const isLess = data.filter(city => {
    return city.population < 100000;
  })

  if(isLess.length > 0){
    toastr.info(`There is ${isLess.length} city/cities Population less than 100.000.`)
  }
})


// does every city has land area bigger than 100?

const everyLandArea = document.querySelector("#isLandBigger");

everyLandArea.addEventListener("click", function(){

  const everyLand = data.every(city => {
    return city.landArea > 100;
  })

  if(everyLand){
    toastr.info(`Yes, every city has land area bigger than 100`)
  }

})