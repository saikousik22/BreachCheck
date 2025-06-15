const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // To parse JSON bodies

// POST endpoint to check breaches for a given email
app.post('/checkBreach', async (req, res) => {
    const email = req.body.email;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        const response = await axios.get(`https://api.xposedornot.com/v1/check-email/${email}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json'
            }
        });

        const data = response.data;
        console.log('Full API response:', data); // Debug output

        // If API returns { "detail": "Not found" }, treat it as no breaches
        if (data.detail && data.detail.toLowerCase() === 'not found') {
            return res.status(200).json({ message: '✅ No breaches found for this email.' });
        }

        // Check for and process breaches
        const breachesNested = data.breaches;

        if (Array.isArray(breachesNested) && breachesNested.length > 0) {
            const flatBreaches = breachesNested.flat(); // Flatten in case of nested arrays
            return res.status(200).json({ breaches: flatBreaches });
        } else {
            return res.status(200).json({ message: '✅ No breaches found for this email.' });
        }
    } catch (error) {

        // Handle known API errors gracefully
        if (error.response && error.response.data && error.response.data.detail === 'Not found') {
            return res.status(200).json({ message: '✅ No breaches found for this email.' });
        }

        // Return error response
        if (error.response) {
            return res.status(error.response.status).json({
                error: error.response.data || 'API responded with an error.'
            });
        } else if (error.request) {
            return res.status(500).json({ error: '❗ No response from the breach API.' });
        } else {
            return res.status(500).json({ error: '❗ Unexpected error occurred.' });
        }
    }
});

// Start server
app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
