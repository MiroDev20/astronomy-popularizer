const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    const controls = Array.from(carousel.querySelectorAll('[data-carousel-action]'));
    const pagination = carousel.querySelector('[data-carousel-pagination]');
    const status = carousel.querySelector('[data-carousel-status]');

    if (slides.length === 0 || controls.length === 0 || !pagination || !status) {
        return;
    }

    let activeIndex = slides.findIndex((slide) => slide.classList.contains('carousel__slide--active'));

    if (activeIndex === -1) {
        activeIndex = 0;
    }

    const updateCarousel = (nextIndex, announce = true) => {
        activeIndex = (nextIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === activeIndex;
            slide.hidden = !isActive;
            slide.setAttribute('aria-hidden', String(!isActive));
            slide.classList.toggle('carousel__slide--active', isActive);
        });

        controls
            .filter((control) => control.dataset.carouselAction === 'go-to')
            .forEach((control, index) => {
                const isActive = index === activeIndex;
                control.classList.toggle('carousel__dot--active', isActive);

                if (isActive) {
                    control.setAttribute('aria-current', 'true');
                } else {
                    control.removeAttribute('aria-current');
                }
            });

        if (announce) {
            const image = slides[activeIndex].querySelector('img');
            status.textContent = `Imagen ${activeIndex + 1} de ${slides.length}: ${image?.alt ?? ''}`;
        }
    };

    carousel.querySelectorAll('[data-carousel-action="previous"], [data-carousel-action="next"]').forEach((control) => {
        control.hidden = false;
    });
    pagination.hidden = false;

    controls.forEach((control) => {
        control.addEventListener('click', () => {
            const { carouselAction, carouselIndex } = control.dataset;

            if (carouselAction === 'previous') {
                updateCarousel(activeIndex - 1);
            } else if (carouselAction === 'next') {
                updateCarousel(activeIndex + 1);
            } else if (carouselAction === 'go-to') {
                updateCarousel(Number(carouselIndex));
            }
        });
    });

    updateCarousel(activeIndex, false);
});
