import express from 'express';
import axios from 'axios';
import db from '../config/db.js'; 
const router = express.Router();
import dotenv from 'dotenv';
 dotenv.config();

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
router.get('/analyze-health-impact', async (req, res) => {
  try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

 
    const [nearestResult] = await db.query(`
      SELECT id
      FROM locations
      ORDER BY ST_Distance_Sphere(
        point(longitude, latitude),
        point(?, ?)
      ) ASC
      LIMIT 1
    `, [lng, lat]);

    if (!nearestResult.length) {
      return res.status(404).json({ error: 'No location found nearby.' });
    }

    const locationId = nearestResult[0].id;

    
    const [airResults] = await db.query(`
      SELECT location_id, recorded_at, air_quality
      FROM air_quality
      WHERE location_id = ?
      ORDER BY recorded_at DESC
    `, [locationId]);

    const [waterResults] = await db.query(`
      SELECT location_id, recorded_at, Temp
      FROM water_quality
      WHERE location_id = ?
      ORDER BY recorded_at DESC
    `, [locationId]);

    
    const prompt = `
      Given the following air and water quality data, list:
      1. Diseases that could arise from these values.
      2. For each disease, list two categories of precautions: 
         - Artificial (e.g. purifiers, medication)
         - Natural (e.g. lifestyle changes, environment)

      Air Quality:
      ${JSON.stringify(airResults, null, 2)}

      Water Quality:
      ${JSON.stringify(waterResults, null, 2)}

      Format:
      {
        "diseases": [
          {
            "name": "",
            "description": "",
            "artificial_precautions": [],
            "natural_precautions": []
          }
        ]
      }
    `;

 
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ parts: [{ text: prompt }] }]
    });

    const geminiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({ data: geminiResponse });
  } catch (error) {
    console.error('Gemini Analysis Error:', error);
    res.status(500).json({ error: error.message });
  }
});



export default router;

