//// Remove the <main> element with id "main"
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to "victory"
newHeader.id = "victory";

// Set its text content
newHeader.innerHTML = "Your-Name is the champion"; // Replace 'Your-Name' with your actual name

// Append the new <h1> to the body
document.body.appendChild(newHeader);
