function openNav() {
    document.getElementById("mySidenavs").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}



document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var message = document.getElementById('message');
    var valid = true;

    // Reset previous error messages and borders
    document.querySelectorAll('.error').forEach(function (element) {
        element.style.display = 'none';
    });


    // Validation logic
    if (!firstName.value.trim()) {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').style.display = 'block';
        valid = false;
    }
    if (!email.value.trim()) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }
    if (!phoneNumber.value.trim()) {
        document.getElementById('phoneNumberError').style.display = 'block';
        valid = false;
    }
    if (!message.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    // If the form is valid, submit the form
    if (valid) {
        document.getElementById('contactForm').submit();
    }
});