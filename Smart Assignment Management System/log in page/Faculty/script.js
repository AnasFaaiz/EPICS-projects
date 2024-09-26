// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        
        // Simulating API call to check credentials
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
                window.location.href = '/dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
