
const handlelogin = (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve the existing registrations from local storage
    const userData = JSON.parse(localStorage.getItem("alluser")) || [];

    // Find the user with matching username and password
    const found = userData.find((element) => element.name === username && element.password === password);
     localStorage.setItem('CurrentUser', JSON.stringify(found));
    
    if (found) {
        alert("Login successful!");
        // return;
        // Redirect to a different page after successful login if necessary
        window.location.href = 'dashboard.html';
    } else {
        alert("Wrong username or password");
    }
};
