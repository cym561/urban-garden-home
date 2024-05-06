document.getElementById("registration-page").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Redirect to courses.html
    window.location.replace("courses.html");
});
let submitButton = document.querySelector("button");
submitButton.addEventListener("click", submit); 
