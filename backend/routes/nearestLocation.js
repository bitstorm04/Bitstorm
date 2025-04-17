import express from 'express';
import db from '../config/db.js';
const router = express.Router();


router.get('/nearest-location', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) return res.status(400).json({ error: 'Latitude and longitude are required' });

  const sql = `
    SELECT *, (
      6371 * acos(
        cos(radians(?)) * cos(radians(latitude)) *
        cos(radians(longitude) - radians(?)) +
        sin(radians(?)) * sin(radians(latitude))
      )
    ) AS distance
    FROM locations
    ORDER BY distance
    LIMIT 1
  `;

  try {
    const [results] = await db.query(sql, [lat, lng, lat]);
    res.json(results[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

export default router;
