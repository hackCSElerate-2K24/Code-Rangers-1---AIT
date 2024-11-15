document.getElementById('submitButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    
    if (query) {
        // Replace 'https://api.example.com/search' with your actual API endpoint
        fetch('1c3255bb0bmshd6c0cț43ac8c219p137ca3jsn53038a5561da', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ searchTerm: query })
        })
        .then(response => response.json())
        .then(data => {
            // Assuming data contains the response from the API
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('results').innerText = 'An error occurred. Please try again.';
        });
    } else {
        alert('Please enter a search term.');
    }
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
            const paragraph = document.createElement('p');
            paragraph.textContent = JSON.stringify(item);
            resultsDiv.appendChild(paragraph);
        });
    } else {
        resultsDiv.innerText = 'No results found.';
    }
}


