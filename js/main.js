// 1. SELECT the elements we want to work with
const contactButton = document.getElementById("contact-btn");
const emailDisplay = document.getElementById("email-display");

// 2. LISTEN for an event
contactButton.addEventListener("click", function() {
    
    // 3. RUN this function when the click happens
    emailDisplay.textContent = "romcastr@ttu.edu"; // Change this!
    contactButton.textContent = "Email Displayed!";
});
// --- MODULE 6: TOGGLE BUTTON ---

// 1. SELECT the elements
const toggleButton = document.getElementById("toggle-btn");
const interestsList = document.getElementById("interests-list");

// 2. LISTEN for an event
toggleButton.addEventListener("click", function() {

    // 3. RUN this function
    // This time, we "toggle" the .hidden class on the list
    interestsList.classList.toggle("hidden");
});