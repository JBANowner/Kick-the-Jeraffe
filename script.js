const boot = document.getElementById('boot');
const jeraffeFace = document.getElementById('jeraffe-face');
const gem = document.getElementById('gem');

boot.addEventListener('click', startKick);

function startKick() {
    // Disable clicking during animation
    boot.style.pointerEvents = 'none';

    // First hop
    boot.classList.add('boot-hop');
    setTimeout(() => {
        boot.classList.remove('boot-hop');

        // Second hop
        boot.classList.add('boot-hop');
        setTimeout(() => {
            boot.classList.remove('boot-hop');

            // Swing kick
            boot.classList.add('boot-swing');
            setTimeout(() => {
                // Change face to frown
                jeraffeFace.src = 'frown.png'; // Replace with your frown image

                // Show random gem
                const multipliers = ['1x', '2x', '3x', '5x', '10x'];
                const randomGem = multipliers[Math.floor(Math.random() * multipliers.length)];
                gem.textContent = randomGem;
                gem.classList.remove('hidden');

                // Reset after 1 second
                setTimeout(() => {
                    boot.classList.remove('boot-swing');
                    jeraffeFace.src = 'smile.png'; // Back to smile
                    gem.classList.add('hidden');
                    boot.style.pointerEvents = 'auto';
                }, 1000);
            }, 500); // Swing duration
        }, 300); // Second hop duration
    }, 300); // First hop duration
}
