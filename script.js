document.getElementById('celebrate-button').addEventListener('click', function() {
    const celebrationDiv = document.getElementById('celebration');
    celebrationDiv.innerHTML = ''; // Clear any existing emojis

    for (let i = 0; i < 100; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = '🎉';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh';
        emoji.style.animationDuration = Math.random() * 1 + 1 + 's';
        celebrationDiv.appendChild(emoji);
    }

    // Play the wedding song
    const weddingSong = document.getElementById('wedding-song');
    weddingSong.play();

    // Remove emojis after 2 seconds
    setTimeout(() => {
        celebrationDiv.innerHTML = '';
    }, 2000);
});
