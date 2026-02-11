const form = document.getElementById("studentForm");

function showError(input, message) {
    input.classList.add("invalid");

    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
        error = document.createElement("div");
        error.className = "error";
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.innerText = message;
}

function clearError(input) {
    input.classList.remove("invalid");

    let error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.remove();
    }
}

// Field validations
form.reg_number.addEventListener("blur", function () {
    if (!/^\d{10}$/.test(this.value)) {
        showError(this, "Register Number must be exactly 10 digits");
        this.focus();
    } else {
        clearError(this);
    }
});

form.student_name.addEventListener("blur", function () {
    if (!/^[A-Za-z\s]+$/.test(this.value)) {
        showError(this, "Name must contain only letters");
        this.focus();
    } else {
        clearError(this);
    }
});

form.email.addEventListener("blur", function () {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(this.value)) {
        showError(this, "Enter valid email");
        this.focus();
    } else {
        clearError(this);
    }
});

form.age.addEventListener("blur", function () {
    if (this.value < 17 || this.value > 30) {
        showError(this, "Age must be between 17 and 30");
        this.focus();
    } else {
        clearError(this);
    }
});

// Final submit validation
form.addEventListener("submit", function (event) {

    if (!/^\d{10}$/.test(form.reg_number.value) ||
        !/^[A-Za-z\s]+$/.test(form.student_name.value) ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(form.email.value) ||
        form.age.value < 17 || form.age.value > 30 ||
        !document.querySelector('input[name="gender"]:checked') ||
        form.course.value === "") {

        alert("Please correct all fields before submitting.");
        event.preventDefault();
    } else {
        alert("Form Submitted Successfully ✅");
    }
});
