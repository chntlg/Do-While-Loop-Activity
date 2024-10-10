function askPassword() {
    const passWord = "HelloPhilippines,HelloWorld";
    let user;

    do {
        user = prompt("Enter your password:");
        if (user !== passWord) {
            alert("Incorrect, try again.");
        }
    } while (user !== passWord);

    alert("Access granted.");
}

askPassword();