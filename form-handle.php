<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize Inputs
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_NUMBER_INT);
    $country = filter_var(trim($_POST["country"]), FILTER_SANITIZE_STRING);
    $errors = [];

    // Validate Name
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    // Validate Email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // Validate Phone (10 digits only)
    if (!preg_match("/^\d{10}$/", $phone)) {
        $errors[] = "Invalid phone number.";
    }

    // Validate Country Selection
    if (empty($country)) {
        $errors[] = "Please select a country.";
    }

    // Process Form or Show Errors
    if (empty($errors)) {
        echo "Form submitted successfully!";
        // Database insertion or email sending can be done here
    } else {
        echo implode("<br>", $errors);
    }
}
?>
