 

<?php
$host = "localhost";
$user = "root";
$pass = "bitstorm@2003";
$db = "sensor_data";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sensor data from POST
$mq2 = $_POST['mq2'];
$mq135 = $_POST['mq135'];
$mq7 = $_POST['mq7'];
$ds18b20_temp = $_POST['ds18b20_temp'];
$sensor_lat = $_POST['lat'];
$sensor_lng = $_POST['lng'];

// Step 1: Check or insert sensor location
$stmt = $conn->prepare("SELECT id FROM locations WHERE latitude = ? AND longitude = ?");
$stmt->bind_param("dd", $sensor_lat, $sensor_lng);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($location_id);
    $stmt->fetch();
} else {
    $city = "Unknown"; // Optional: pass actual city from frontend if available
    $insertLoc = $conn->prepare("INSERT INTO locations (city, latitude, longitude) VALUES (?, ?, ?)");
    $insertLoc->bind_param("sdd", $city, $sensor_lat, $sensor_lng);
    $insertLoc->execute();
    $location_id = $insertLoc->insert_id;
    $insertLoc->close();
}
$stmt->close();

// Step 2: Insert air quality
$now = date('Y-m-d H:i:s');
$air_quality_value = ($mq2 + $mq135 + $mq7) / 3; // Simplified average
$insertAir = $conn->prepare("INSERT INTO air_quality (location_id, recorded_at, air_quality) VALUES (?, ?, ?)");
$insertAir->bind_param("isd", $location_id, $now, $air_quality_value);
$insertAir->execute();
$insertAir->close();

// Step 3: Insert water quality
$insertWater = $conn->prepare("INSERT INTO water_quality (location_id, recorded_at, Temp) VALUES (?, ?, ?)");
$insertWater->bind_param("isd", $location_id, $now, $ds18b20_temp);
$insertWater->execute();
$insertWater->close();

echo "Data inserted successfully";
$conn->close();
?>
                       