const apiKey = 'b56035edafbd0d69ffbe8b0f'; // Replace with your actual API key
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    try {
        const response = await fetch(`${apiUrl}${fromCurrency}`);
        const data = await response.json();

        if (data.result === "success") {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = amount * rate;
            document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            document.getElementById('result').innerText = 'Error fetching exchange rate. Please try again later.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again later.';
    }
}
