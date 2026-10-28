const generateSpaceLayer = (selector, totalStars, size, duration) => {
    const layer = [];

    for (let i = 0; i < totalStars; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const opacity = Math.random().toFixed(1);

        layer.push(`${x}vw ${y}vh 0 rgb(255, 255, 255, ${opacity}), ${x}vw ${y + 100}vh 0 rgb(255, 255, 255, ${opacity})`);
    };

    const startsContainer = document.querySelector(selector);
    startsContainer.style.setProperty('--space-layer', layer.join(','));
    startsContainer.style.setProperty('--size', size);
    startsContainer.style.setProperty('--duration', duration);
};

generateSpaceLayer('.space1', 200, '1px', '180s');
generateSpaceLayer('.space2', 150, '1.5px', '120s');
generateSpaceLayer('.space3', 100, '2px', '60s');

