<?php
if ($_SERVER["REQUEST_METHOD"]== "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"],FILTER_SANITIZE_EMAIL);
    $date = $_POST["date"];
    $time = $_POST["time"];
    $guests = $POST["guests"];
    $message = htmlspecialchars($_POST["message"]);

    $to = "pranitamule908@gmail.com";
    $subject = "Reservation Request from $name";
    $headers = "From: $email";

    $mailBody = "Name: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Date: $date\n";
    $mailBody .= "Time: $time\n";
    $mailBody .= "Guests: $guests\n";
    $mailBody .= "Message: $message\n";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Reservation request sent successfully";
    } else {
        echo "Failed to send reservation request. Please try again later.";
    }
    }
