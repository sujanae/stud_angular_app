<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");


$host = "localhost";
$db_name = "student_registration";
$username = "root";
$password = "";
$conn = null;

try {
    $conn = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $exception) {
    echo json_encode(array("message" => "Connection error: " . $exception->getMessage()));
    exit();
}

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email) && !empty($data->phone) && !empty($data->course)) {
    $query = "INSERT INTO students (name, email, phone, course) VALUES (:name, :email, :phone, :course)";
    $stmt = $conn->prepare($query);

    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":phone", $data->phone);
    $stmt->bindParam(":course", $data->course);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Student registered successfully."));
    } else {
        echo json_encode(array("message" => "Unable to register student."));
    }
} else {
    echo json_encode(array("message" => "Incomplete data."));
}

?>
