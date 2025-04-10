//# JavaScript (in script.js file)

// Add event listener to the button
document.querySelector('.neuromorphic-button').addEventListener('click', () => {
    // Add a subtle animation to the button
    document.querySelector('.neuromorphic-button').style.transform = 'scale(0.9)';
    setTimeout(() => {
        document.querySelector('.neuromorphic-button').style.transform = 'scale(1)';
    }, 200);
});

// Add event listener to the progress bar
document.querySelector('.neuromorphic-progress-bar').addEventListener('mouseover', () => {
    // Animate the progress bar fill
    document.querySelector('.progress-bar-fill').style.width = '90%';
});

document.querySelector('.neuromorphic-progress-bar').addEventListener('mouseout', () => {
    // Reset the progress bar fill
    document.querySelector('.progress-bar-fill').style.width = '50%';
});
