// VARIABLE DECLARATIONS
var customName = document.getElementById("customname"); // Input field for custom name
var randomize = document.querySelector(".randomize"); // Button for generating random story
var story = document.querySelector(".story"); // Paragraph where the story will be displayed

// The main story template
var storyText =
    "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Arrays containing replacement strings
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = [
    "spontaneously combusted",
    "rapidly sublimated",
    "evaporated instantly",
];

// FUNCTIONS

// Function to return a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate the result story
function result() {
    var newStory = storyText; // Copying the original story template

    // Generating random items to replace placeholders
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Replacing placeholders with random items
    newStory = newStory
        .replace(":insertx:", xItem)
        .replace(":inserty:", yItem)
        .replace(":insertz:", zItem);

    // Checking if a custom name is provided and replacing 'Bob' with it
    if (customName.value !== "") {
        newStory = newStory.replace(/Bob/g, customName.value);
    }

    // Checking if metric units are selected
    if (document.getElementById("metric").checked) {
        var weight = Math.round(300 * 0.453592); // Converting weight to kilograms
        var temp = Math.round((94 - 32) * (5 / 9)); // Converting temperature to Celsius
        newStory = newStory
            .replace("300 pounds", weight + " kilograms")
            .replace("94 farenheit", temp + " celsius");
    }

    // Displaying the new story
    story.textContent = newStory;
    story.style.visibility = "visible"; // Making the story visible
}

// EVENT LISTENERS

// Adding click event listener to the "Generate random story" button
randomize.addEventListener("click", result);
