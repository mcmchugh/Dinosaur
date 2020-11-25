/**
* @description Represents the dinosaur object
* @constructor
* @param {string} species - The species of the dinosaur
* @param {number} weight - The weight of the dinosaur
* @param {number} height - The height of the dinosaur
* @param {string} diet - The diet of the dinosaur
* @param {string} where - Where the dinosaur lived
* @param {string} when - When the dinosaur lived
* @param {string} fact - A fact about the dinosaur
*/

const dino = function (dinoFacts) {
    this.species = dinoFacts.species;
    this.weight = dinoFacts.weight;
    this.height = dinoFacts.height;
    this.diet = dinoFacts.diet;
    this.where = dinoFacts.where;
    this.when = dinoFacts.when;
    this.fact = dinoFacts.fact;
};

/**
* @description Represents the human object
* @constructor
* @param {string} species - The species of the user
* @param {number} name - The name of the user
* @param {number} feet - The height of the user in feet
* @param {number} inches - The height of the user in inches
* @param {number} weight - The weight of the user in lbs
* @param {string} where - Where the user lives
* @param {string} diet - The diet of the user
*/

const human = function (name,feet,inches,weight, where, diet) {
    this.species = 'human';
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.where = where;
    this.diet = diet;
};

/**
* @description Human object compare methods -
* combine the feet and inches properties
*/

human.prototype.height = function () {
    return `${this.feet} feet and ${this.inches} inches`;
};

human.prototype.fact = function () {
    return `${this.name} is ${this.height()}`;
};

/**
* @description Dino object compare methods -
* one that compares the dinosaur height
* with the human object height, one that compares
* the location of the dinosaur object and
* the human object, and one that compares the
* diet of the dinosaur object and the human object.
*/

//Compare method 1 - compare height
dino.prototype.compareHeight = function (object){
    if(object.species == 'human') {
        const getHumanHeightinInches = (parseInt(object.feet)* 12) + parseInt(object.inches);
        if(this.height > getHumanHeightinInches) {
            const heightDiff = this.height - getHumanHeightinInches;
            return `${this.species} is taller than ${object.name} by ${heightDiff} inches.`;
        } else {
            const heightDiff = getHumanHeightinInches - this.height;
            return `${object.name} is taller than the  ${this.species} by ${heightDiff} inches.`;
        }
    }
};

//Compare method 2 - compare location
dino.prototype.compareLocation = function(humanObj) {
    if(humanObj !== null) {
        if(humanObj.species == 'human') {
            if(this.where !== humanObj.where) {
                return `The ${this.species} lived in ${this.where}, while ${humanObj.name} lives in ${humanObj.where}.`;
            } else {
                return `The ${this.species} and ${humanObj.name} lived and lives in ${humanObj.where}.`;
            }
        }
    }
};

//Compare method 3 - compare diet
dino.prototype.compareDiet = function(humanObj) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  //Last modified: Apr 21, 2020, by MDN contributors - referenced on Nov 24, 2020 by MM
    if(humanObj !== null && humanObj.species == 'human') {
        const getVowels = ['a', 'e', 'i', 'o','u'];
        const startsWithVowel =  this ? this.diet.charAt(0) : humanObj.diet.charAt(0);
        let dinoVowel;
        let humanVowel;
        getVowels.forEach(vowel => {
          dinoVowel = startsWithVowel !== vowel ? 'a' : 'an';
          humanVowel = startsWithVowel !== vowel ? 'a' : 'an';
        })
        if(this.diet !== humanObj.diet) {
            return `The ${this.species} was ${dinoVowel} ${this.diet}, while ${humanObj.name} is ${humanVowel} ${humanObj.diet}.`;
        } else {
            return `The ${this.species} and ${humanObj.name} both eat ${humanVowel} diet.`;
        }
    }
}

/**
* @description Create a new method that randomizes
* what custom methods to call when building the dinosaur grid blocks.
* @param {object} humanObj - Pass humanObj into the randomFact method
*/

dino.prototype.randomfact = function (humanObj) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //Doc last updated Nov 1, 2020, by MDN contributors - referenced on Nov 24,2020 by MM
    if(humanObj !== null) {
        const getThis = this;
        //used the length of when the dinos lived to help generate a random number
        const maxNumber = getThis.when.length;
        const getRandomNum = Math.floor(Math.random() * (maxNumber - 0) + 0);

        if(getRandomNum > 0 &&  getRandomNum < 3) {
            return getThis.fact;
        } else if (getRandomNum >= 3 && getRandomNum < 6) {
            return getThis.compareDiet(humanObj);
        } else if (getRandomNum >= 6 && getRandomNum < 9) {
            return `The ${getThis.species} weighed ${getThis.weight}lbs.`;
        } else if (getRandomNum >= 9 && getRandomNum < 12) {
            return getThis.compareLocation(humanObj);
        } else if (getRandomNum >= 12 && getRandomNum > 15) {
            return getThis.compareHeight(humanObj);
        } else {
            return getThis.fact;
        }
    }
}

/**
* @description Takes the dino json and makes a new dino object
* @param {object} dinoObj - Object containing the dino json
*/

const makeDinoObj = (dinoObj) => {
    const getDino = dinoObj.Dinos;

    const Dino1 = new dino(getDino[0]);
    const Dino2 = new dino(getDino[1]);
    const Dino3 = new dino(getDino[2]);
    const Dino4 = new dino(getDino[3]);
    const Dino5 = new dino(getDino[4]);
    const Dino6 = new dino(getDino[5]);
    const Dino7 = new dino(getDino[6]);
    const Dino8 = new dino(getDino[7]);

    return {Dino1, Dino2 , Dino3, Dino4, Dino5,  Dino6, Dino7, Dino8};
};

/**
* @description  Function that takes in user input and creates new human object
* @param {number} name - The name of the user
* @param {number} feet - The height of the user in feet
* @param {number} inches - The height of the user in inches
* @param {number} weight - The weight of the user in lbs
* @param {string} where - Where the user lives
* @param {string} diet - The diet of the user
*/

// Create Human Object
const createHumanObj = (name, feet, inches, weight, where, diet) => {
    const newHumans = new human(name,feet,inches, weight,where, diet);
    return newHumans;
}

/**
* @description Grabs the new dinosaur and human objects,
* pushes into compareObject array and passes array into
* the buildGrid function, which creates, builds,
* and appends grid blocks on page.
* @param {object} dinoObj - The dino object
* @param {object} humanObj - The human object
*/

const createObjRenderPage =  (dinoObj, humanObj) => {
    const compareObject = [];
    const getDinoObj = dinoObj;
    const getHumanObj = humanObj;

    compareObject.push(
        getDinoObj.Dino1,
        getDinoObj.Dino2,
        getDinoObj.Dino3,
        getDinoObj.Dino4,
        getHumanObj,
        getDinoObj.Dino5,
        getDinoObj.Dino6,
        getDinoObj.Dino7,
        getDinoObj.Dino8
    );
    buildGrid(compareObject);
};

/**
* @description Take the compareObject, iterate over the array, build each grid block, append to DOM
* @param {array} compareObject - Array containing the dinosaur and human objects
*/

const buildGrid = (compareObject) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    //Last modified: Aug 25, 2020, by MDN contributors - referenced Nov 24, 2020 by MM
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
    //Last modified: Mar 18, 2019, by MDN contributors - referenced Nov 24, 2020 by MM
    let factContent;
    compareObject.forEach(a => {
        compareObject.forEach(b => {
            if(b.species == 'human'){
               //create text node to display fact
                factContent =  a.species == 'Pigeon' ? document.createTextNode(a.fact) : a.species !== 'human' ? document.createTextNode(a.randomfact(b)) : document.createTextNode(a.fact());
            }
        })
       //get the html element from the DOM
        const gridElementWrapper = document.getElementById('grid');
        //create grid block <div> element
        const gridBlock = document.createElement('div');
        //create new <h3> element to house name
        const gridBlockTitle = document.createElement('h3');
        //create <p> element to house fact
        const gridBlockFact = document.createElement('p');
        //create new <img> element
        const gridBlockImage = document.createElement('img');

        // create text node to display species
        const dinoTitleContent = a.species !== 'human' ? document.createTextNode(a.species) : document.createTextNode(a.name);
        //build image src path
        const gridImagePath = '/images' + '/' + a.species + '.png';
        //create src attribute for the newly created img element
        const gridImageSrc = document.createAttribute('src');
        //assign image src to the newly created src attribute
        gridImageSrc.value = gridImagePath;
        //add the newly populated src attribute to the new <img> element
        gridBlockImage.setAttributeNode(gridImageSrc);

        //append new title text node to the <h3>element
        gridBlockTitle.appendChild(dinoTitleContent);
        //append fact text node to the <p> element
        gridBlockFact.appendChild(factContent);
        //append title <p> element to the grid item
        gridBlock.appendChild(gridBlockTitle);
        //append fact <p> element to the grid item
        gridBlock.appendChild(gridBlockFact);
        //append image to the grid block item
        gridBlock.appendChild(gridBlockImage);

        //add class "grid-item" to the newly created div
        gridBlock.classList.add('grid-item');

        //append newly created div blocks to the grid element
        gridElementWrapper.appendChild(gridBlock);
    });
};

/**
* @description grabs user information from form and pass into createHumanObj function
*/

const getUserInput = () => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    //Last modified: Mar 26, 2020, by MDN contributors, referenced on Nov 24, 2020 by MM
    //get user data from form and assign to variables
    const name = document.getElementById('name').value;
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const where = document.getElementById('where').value;
    const diet = document.getElementById('diet').value.toLowerCase();

    //take assigned variables and pass into the createHumanObj function
    const createHuman = createHumanObj(name, feet,inches, weight, where, diet);
    return createHuman;
};

/**
* @description Function called on button click - gets human data from form,
* makes new XMLHttpRequest to get dinosaur json from dino.json file.
* When the json is loaded, pass dino json and human object to createObjRenderPage()
* and remove form from page.
*/

const setUpCompareObjectData = () => {
    //get data from form and assign to getHumanData variable
    const getHumanData =  getUserInput();
    // Get data from dino.json file
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
    //Last modified: Oct 31, 2020, by MDN contributors - referenced on Nov 24, 2020 by MM
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    //Last modified: May 20, 2020, by MDN contributors - referenced on Nov 24, 2020 by MM
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    //Last modified: Aug 9, 2020, by MDN contributors - referenced on Nov 24, 2020 by MM
    const getDinoJson = 'dino.json';
    const request = new XMLHttpRequest();
    request.open('GET', getDinoJson);
    request.responseType = 'json';
    request.onload = () => {
        const dinoJson = request.response;
        const getDinoData = makeDinoObj(dinoJson);
        createObjRenderPage(getDinoData, getHumanData);
         // Remove form from screen
        document.getElementById('dino-compare').style.display = 'none';
    };
    request.send();
};

// On button click, prepare and display infographic
const getButton = document.getElementById('btn');

//get button element from dom and add click handler
getButton.addEventListener('click', setUpCompareObjectData);
