<?php

    // Set connection variables
   $server="localhost";
   $username="root";
   $password="";
   $database=" sagar-portfolio";
$conn = mysqli_connect("$server","$username","$password","$database");

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}
?>
