document.getElementById('breachForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value.trim();
    const resultBox = document.getElementById('result');

    // Clear previous result
    resultBox.innerHTML = '';

    if (!emailInput) {
        resultBox.innerText = '❗ Please enter a valid email.';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/checkBreach', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailInput })
        });

        if (!response.ok) {
            const errorText = await response.text();
            resultBox.innerText = `⚠️ Server error: ${errorText || response.statusText}`;
            return;
        }

        let result;
        try {
            result = await response.json();
        } catch (jsonError) {
            resultBox.innerText = '❌ Invalid JSON response from server.';
            return;
        }

        // Show breaches
        if (result.breaches && Array.isArray(result.breaches) && result.breaches.length > 0) {
            const breachCount = result.breaches.length;
            const breachList = result.breaches.map(b => `<li>${b}</li>`).join('');
            resultBox.innerHTML = `
                <strong>🔐 Total breaches found for <code>${emailInput}</code>: ${breachCount}</strong>
                <ul>${breachList}</ul>
            `;
        }
        // Show message like "No breaches found"
        else if (result.message) {
            resultBox.innerText = result.message;
        }
        // Fallback
        else {
            resultBox.innerText = '✅ No breaches found.';
        }

    } catch (error) {
        resultBox.innerText = '❌ Network error while checking breach.';
    }
});
