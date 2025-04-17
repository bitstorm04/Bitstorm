
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>


const char* ssid = "Bitstorm";
const char* password = "khushi01";
const char* serverUrl = "http:// 192.168.4.82/sensordata.php";
  


#define DHTPIN 27
#define DHTTYPE DHT11
#define ONE_WIRE_BUS 15
#define MQ2_PIN 34
#define MQ135_PIN 35
#define MQ7_PIN 33


DHT dht(DHTPIN, DHTTYPE);
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature ds18b20(&oneWire);
TinyGPSPlus gps;
HardwareSerial SerialGPS(1);

void setup() {
  delay(1000); 
  Serial.begin(115200);
  Serial.println("Booting...");

  dht.begin();
  ds18b20.begin();
  SerialGPS.begin(9600, SERIAL_8N1, 4, 2); 


  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  
  int mq2 = analogRead(MQ2_PIN);
  int mq135 = analogRead(MQ135_PIN);
  int mq7 = analogRead(MQ7_PIN);

  float dhtTemp = dht.readTemperature();
  float dhtHum = dht.readHumidity();

  ds18b20.requestTemperatures();
  float ds18b20Temp = ds18b20.getTempCByIndex(0);

  
  while (SerialGPS.available()) {
    gps.encode(SerialGPS.read());
  }
  float latitude = gps.location.isValid() ? gps.location.lat() : 0.0;
  float longitude = gps.location.isValid() ? gps.location.lng() : 0.0;

  Serial.println("\n----- Sensor Data -----");
  Serial.printf("MQ2: %d, MQ135: %d, MQ7: %d\n", mq2, mq135, mq7);
  Serial.printf("DHT11 Temp: %.2f °C, Humidity: %.2f %%\n", dhtTemp, dhtHum);
  Serial.printf("DS18B20 Temp: %.2f °C\n", ds18b20Temp);
  Serial.printf("GPS: Lat: %.6f, Lng: %.6f\n", latitude, longitude);


  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    String postData = "mq2=" + String(mq2) +
                      "&mq135=" + String(mq135) +
                      "&mq7=" + String(mq7) +
                      "&dht_temp=" + String(dhtTemp) +
                      "&dht_hum=" + String(dhtHum) +
                      "&ds18b20_temp=" + String(ds18b20Temp) +
                      "&lat=" + String(latitude, 6) +
                      "&lng=" + String(longitude, 6);

    int httpResponseCode = http.POST(postData);
    Serial.printf("HTTP Response Code: %d\n", httpResponseCode);

    http.end();
  } else {
    Serial.println("WiFi not connected.");
  }

  delay(5000);
}
