document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector(".nav-toggle");
    var siteNav = document.querySelector(".site-nav");

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", function () {
            siteNav.classList.toggle("nav-open");
        });
    }

    var form = document.getElementById("appointment-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var fullName = document.getElementById("full-name");
        var phone = document.getElementById("phone");
        var email = document.getElementById("email");
        var patientType = document.getElementById("patient-type");
        var appointmentType = document.getElementById("appointment-type");
        var preferredDate = document.getElementById("preferred-date");
        var message = document.getElementById("message");
        var consent = document.getElementById("consent");
        var contactMethod = document.querySelector('input[name="contact-method"]:checked');

        var nameError = document.getElementById("name-error");
        var phoneError = document.getElementById("phone-error");
        var emailError = document.getElementById("email-error");
        var patientError = document.getElementById("patient-error");
        var appointmentError = document.getElementById("appointment-error");
        var dateError = document.getElementById("date-error");
        var contactMethodError = document.getElementById("contact-method-error");
        var messageError = document.getElementById("message-error");
        var consentError = document.getElementById("consent-error");
        var formSuccess = document.getElementById("form-success");

        nameError.textContent = "";
        phoneError.textContent = "";
        emailError.textContent = "";
        patientError.textContent = "";
        appointmentError.textContent = "";
        dateError.textContent = "";
        contactMethodError.textContent = "";
        messageError.textContent = "";
        consentError.textContent = "";
        formSuccess.textContent = "";

        var hasError = false;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phonePattern = /^[0-9+\s()-]{8,20}$/;

        if (fullName.value.trim() === "") {
            nameError.textContent = "Please enter your full name.";
            hasError = true;
        }

        if (phone.value.trim() === "") {
            phoneError.textContent = "Please enter your phone number.";
            hasError = true;
        } else if (!phonePattern.test(phone.value.trim())) {
            phoneError.textContent = "Please enter a valid phone number.";
            hasError = true;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email address.";
            hasError = true;
        } else if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            hasError = true;
        }

        if (patientType.value === "") {
            patientError.textContent = "Please select your patient type.";
            hasError = true;
        }

        if (appointmentType.value === "") {
            appointmentError.textContent = "Please select an appointment type.";
            hasError = true;
        }

        if (preferredDate.value === "") {
            dateError.textContent = "Please select your preferred date.";
            hasError = true;
        }

        if (!contactMethod) {
            contactMethodError.textContent = "Please choose a preferred contact method.";
            hasError = true;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Please enter your reason for visit or message.";
            hasError = true;
        }

        if (!consent.checked) {
            consentError.textContent = "Please confirm that you understand the booking process.";
            hasError = true;
        }

        if (!hasError) {
            formSuccess.textContent = "Your booking request has been submitted successfully.";
            form.reset();
        }
    });
});