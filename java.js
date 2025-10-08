
function redirectToIndex() {

    // Get the values of username and password fields
    var username = document.querySelector('#username input').value;
    var password = document.querySelector('#password input').value;

    // Check if both fields are filled
    if (username.trim() !== "" && password.trim() !== "") {
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        // Optionally, you can alert the user or show an error message
        alert("Please fill in both username and password.");
    }
}
function handleSignup() {
    // Get the values of firstname and lastname fields
    var firstname = document.querySelector('.register-container input[placeholder="Firstname"]').value;
    var lastname = document.querySelector('.register-container input[placeholder="Lastname"]').value;

    // Check if both fields are filled
    if (firstname.trim() !== "" && lastname.trim() !== "") {
        // Redirect to the signin form
        login();
    } else {
        // Optionally, you can alert the user or show an error message
        alert("Please fill in the credentials.");
    }
}
