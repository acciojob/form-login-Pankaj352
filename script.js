function getFormvalue(event) {
    event.preventDefault(); // Prevent form submission refresh

    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    if (!firstName || !lastName) {
        alert("Please enter both First Name and Last Name.");
        return;
    }

    alert(`${firstName} ${lastName}`);
}

// Make function available globally for Cypress
window.getFormvalue = getFormvalue;
