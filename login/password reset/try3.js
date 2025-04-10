// Add event listener to the button
document.querySelector('.neuromorphic-button').addEventListener('click', () => {
    // Add a subtle animation to the button
    document.querySelector('.neuromorphic-button').style.transform = 'scale(0.9)';
    setTimeout(() => {
        document.querySelector('.neuromorphic-button').style.transform = 'scale(1)';
    }, 200);
});

