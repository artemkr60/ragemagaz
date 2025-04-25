document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');

    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log('Start button clicked!');
            // Add navigation or other actions here
            // For example: window.location.href = '/next-page.html';
            alert('Welcome to RAGE MAGAZ!');
        });
    }

    // Add more interactive elements or animations here if needed
}); 