(() => {
    'use strict';

    const generateSpaceLayer = (selector, totalStars, size, duration) => {
        const layerElement = document.querySelector(selector);

        if (!layerElement) {
            throw new Error(`Star layer not found: ${selector}`);
        }

        const stars = [];

        for (let index = 0; index < totalStars; index++) {
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            const opacity = Math.random().toFixed(1);
            const color = `rgb(255, 255, 255, ${opacity})`;

            stars.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
        }

        layerElement.style.setProperty('--space-layer', stars.join(', '));
        layerElement.style.setProperty('--size', size);
        layerElement.style.setProperty('--duration', duration);
    };

    generateSpaceLayer('[data-star-layer="small"]', 200, '1.5px', '180s');
    generateSpaceLayer('[data-star-layer="medium"]', 150, '2px', '120s');
    generateSpaceLayer('[data-star-layer="large"]', 100, '2.5px', '60s');
})();
