# Bitstorm
We have developed an AI-powered system which is also intergrated with IOT sensors for real-time pollution detection to montior air and water quality while enabling automated alerts for authorites and citizens.

EcoTrackAI is an IoT-based pollution monitoring system designed to track and analyze both air and water quality in real time. The system collects environmental data through sensors and stores it in a MySQL database. This data is then fetched using an Express.js backend and passed to a powerful Large Language Model (LLM) like Google Gemini for advanced analysis.
The LLM interprets the sensor data to determine the Air Quality Index (AQI) and Water Quality Index (WQI). It further identifies potential diseases associated with the measured pollution levels and provides insights into the affected ecosystem. Additionally, the system suggests artificial prevention and precautionary methods to mitigate health risks.
On the frontend, EcoTrackAI visually presents the analyzed data through interactive charts and summarized reports, making it user-friendly and informative for environmental agencies, researchers, and the general public.

Sensors:
 MQ2 – for detecting smoke and flammable gases
 MQ7 – for detecting carbon monoxide (CO) levels
 DHT11 – for measuring temperature and humidity
 NEO-6M – a GPS module used to capture the geographic location of the pollution data
 DS18B20 – for precise water temperature measurement
