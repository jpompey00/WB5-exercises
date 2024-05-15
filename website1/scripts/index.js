"use strict";




//dropdown elements
const toyCategoryDropdown = document.getElementById("toyCategoryDropdown");
const toyListbox = document.getElementById("toyListbox");

const toyDetailDiv = document.getElementById("toyDetailDiv");

//output elements
const toyNameOutput = document.getElementById("toyNameOutput");
const toyManufacturerOutput = document.getElementById("toyManufacturerOutput");
const toyAgeRangeOutput = document.getElementById("toyAgeRangeOutput");



window.onload = () => {


    toyCategoryDropdown.onchange = onToyCategoryDropdownChanged;
    toyListbox.onchange = onToyListboxChanged;

}


function onToyCategoryDropdownChanged() {
    let toyCategoryValue = toyCategoryDropdown.value;

    //practice using anon function, but function is only used in here.
    //made it a function to make it clear what it does.
    let clearListBox = () => toyListbox.options.length = 0;

    //The only reason this is in an if statement is to avoid an error.
    if (toyCategoryValue != "") {
        //clears and hides the output div
        clearOutputs();
        clearListBox();
        
        //loads the toys into the listbox
        loadListbox(formatValue(toyCategoryValue));

    } else {
        clearListBox();
    }
}


function onToyListboxChanged() {


    //The only reason this is in an if statement is to avoid an error.
    if (toyListbox.value != "") {

        //this is the worst thing i've written in a while
        let toy = toys.Toys[formatValue(toyCategoryDropdown.value)][toyListbox.value]; 


        //clears and hides the output when you change. Not really needed. 
        clearOutputs();      
        toyDetailDiv.setAttribute("style", "display: block;");

        toyNameOutput.innerHTML = toy.name;
        toyManufacturerOutput.innerHTML = toy.manufacturer;
        toyAgeRangeOutput.innerHTML = toy.age_range;
    } else {
        clearOutputs();
    }
}

function loadListbox(dropdownValue) {

    //purpose of the for i loop is to assign the index to the 
    //toys value when selected, needed for the onToyListboxChanged()
    //function
    for (let i = 0; i < toys.Toys[dropdownValue].length; i++) {
        
        let toy = toys.Toys[dropdownValue][i];

        let theOption = new Option(toy.name, i);
        toyListbox.append(theOption);
    }

}

function clearOutputs() {
    toyDetailDiv.setAttribute("style", "display: none;")
    toyNameOutput.innerHTML = "";
    toyManufacturerOutput.innerHTML = "";
    toyAgeRangeOutput.innerHTML = "";
}

//formats the value from the dropdown to match the data
//works under the assumption that it will always be two words
function formatValue(value) {
    let word1;
    let word2;

    let result;
    let firstSpace = value.indexOf("_");
    word1 = value.charAt(0).toUpperCase() + value.slice(1, firstSpace);
    word2 = value.charAt(firstSpace + 1).toUpperCase() + value.slice(firstSpace + 2);

    result = `${word1} ${word2}`
    return result;

}
