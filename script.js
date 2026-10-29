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

const initializeCarousel = () => {
    const carousel = document.querySelector('.carousel');

    if (!carousel) {
        return;
    }

    const viewport = carousel.querySelector('.carousel__viewport');
    const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
    const previousButton = carousel.querySelector('.carousel__button--prev');
    const nextButton = carousel.querySelector('.carousel__button--next');
    const dots = Array.from(carousel.querySelectorAll('.carousel__dot'));

    if (!viewport || slides.length === 0) {
        return;
    }

    let activeIndex = 0;

    const setActiveSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('carousel__slide--active', slideIndex === activeIndex);
        });

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            dot.classList.toggle('carousel__dot--active', isActive);

            if (isActive) {
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.removeAttribute('aria-current');
            }
        });
    };

    const navigateToSlide = (index) => {
        const nextIndex = (index + slides.length) % slides.length;

        viewport.scrollTo({
            left: nextIndex * viewport.clientWidth,
            behavior: 'smooth',
        });
        setActiveSlide(nextIndex);
    };

    const updateActiveSlide = () => {
        if (viewport.clientWidth === 0) {
            return;
        }

        const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
        setActiveSlide(Math.min(index, slides.length - 1));
    };

    previousButton?.addEventListener('click', () => navigateToSlide(activeIndex - 1));
    nextButton?.addEventListener('click', () => navigateToSlide(activeIndex + 1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => navigateToSlide(index));
    });

    viewport.addEventListener('scroll', updateActiveSlide);
    updateActiveSlide();
};

initializeCarousel();
