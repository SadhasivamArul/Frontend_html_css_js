<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>

    <style>
        body {
            font-family: Arial;
            background-color: #f2f2f2;
        }

        .container {
            width: 400px;
            background: white;
            padding: 20px;
            margin: 50px auto;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
        }

        label {
            font-weight: bold;
        }

        input, select {
            width: 100%;
            padding: 8px;
            margin: 5px 0 15px 0;
        }

        .gender input {
            width: auto;
        }

        .buttons {
            text-align: center;
        }

        input[type="submit"],
        input[type="reset"] {
            padding: 8px 15px;
            margin: 5px;
        }
    </style>
</head>

<body>

<div class="container">
    <h2>Student Registration Form</h2>

    <form onsubmit="return validateForm()">

        <label>Register Number:</label>
        <input type="text" id="reg" maxlength="10" placeholder="10 digit number" required>

        <label>Student Name:</label>
        <input type="text" id="name" maxlength="10" placeholder="Max 10 characters" required>

        <label>Email:</label>
        <input type="text" id="email" placeholder="example@gmail.com" required>

        <label>Age:</label>
        <input type="number" id="age" min="1" max="100" required>

        <label>Gender:</label>
        <div class="gender">
            <input type="radio" name="gender" value="Male"> Male
            <input type="radio" name="gender" value="Female"> Female
        </div>

        <label>Course:</label>
        <select id="course" required>
            <option value="">Select course</option>
            <option>Computer Science</option>
            <option>IT</option>
            <option>Mechanical</option>
            <option>Electrical</option>
        </select>

        <div class="buttons">
            <input type="submit" value="Register">
            <input type="reset" value="Clear">
        </div>

    </form>
</div>

<script>
function validateForm() {

    // Register Number
    let reg = document.getElementById("reg").value;
    if (!/^\d{10}$/.test(reg)) {
        alert("Register number must be exactly 10 digits");
        return false;
    }

    // Name
    let name = document.getElementById("name").value;
    if (!/^[A-Za-z]+$/.test(name)) {
        alert("Name should contain only letters");
        return false;
    }

    // Email
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
    if (!emailPattern.test(email)) {
        alert("Email must be lowercase and end with .com");
        return false;
    }

    // Age
    let age = document.getElementById("age").value;
    if (age < 1 || age > 100) {
        alert("Age must be between 1 and 100");
        return false;
    }

    // Gender
    if (!document.querySelector('input[name="gender"]:checked')) {
        alert("Please select gender");
        return false;
    }

    // Course
    if (document.getElementById("course").value === "") {
        alert("Please select a course");
        return false;
    }

    alert("Registration Successful ✅");
    return true;
}
</script>

</body>
</html>

