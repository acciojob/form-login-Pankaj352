function getFormvalue(event) {
    event.preventDefault();

    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();


    if (!firstName || !lastName) {
        alert("Please enter both First Name and Last Name.");
        return;
    }


    alert(`${firstName} ${lastName}`);
}


document.getElementById("form1").addEventListener("submit", getFormvalue);
