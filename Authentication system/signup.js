const handleRegistration  = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passward").value;
    let repeatPassword = document.getElementById("repeatpassward").value;
    const agree = document.querySelector('input[name="agree"]').checked;

    // Check if passwords match
    if (password !== repeatPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if agree with terms and conditions
    if (!agree) {
        alert("You must agree to the terms of service");
        return;
    }

    // Add the new registration to the array


    let newRegistration = {
        name: name,
        email: email,
        password: password,
        agree: agree,
        uniqueID:uniqueID
    };

    const Allusers= JSON.parse(localStorage.getItem('alluser')) || [];
    Allusers.push(newRegistration)
    localStorage.setItem('alluser', JSON.stringify(Allusers));
    alert("Registration successful!");
    window.location.href = 'login.html';
};



function generateRandomID() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  const uniqueID = generateRandomID();
  console.log(uniqueID);



