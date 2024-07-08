document.getElementById('celebrate-button').addEventListener('click', function() {
    const celebrationDiv = document.getElementById('celebration');
    celebrationDiv.innerHTML = ''; // Clear any existing emojis

    for (let i = 0; i < 100; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = '🎉';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh';
        emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
        celebrationDiv.appendChild(emoji);
    }
});
