document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger-button").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("close")
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const scrollItem = document.querySelector('.reviews-item')
    const scrollWrapper = document.querySelector('.reviews');
    const scrollContent = document.querySelector('.reviews-list');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');

    let scrollPosition = 0;
    const itemWidth =  scrollItem.clientWidth / 2

    scrollLeftButton.addEventListener('click', () => {
        scrollPosition = Math.min(scrollPosition + itemWidth, 0);
        updateScrollPosition();
    });

    scrollRightButton.addEventListener('click', () => {
        const maxScroll = -(scrollContent.scrollWidth - scrollWrapper.clientWidth);
        scrollPosition = Math.max(scrollPosition - itemWidth, maxScroll);
        updateScrollPosition();
    });

    window.addEventListener('resize', () => {
        // Сброс положения скролла в начало
        scrollPosition = 0;
        updateScrollPosition();
    });

    function updateScrollPosition() {
        scrollContent.style.transform = `translateX(${scrollPosition}px)`;
        checkButtons();
    }

    function checkButtons() {
        scrollLeftButton.disabled = scrollPosition === 0;
        scrollRightButton.disabled = scrollPosition <= -(scrollContent.scrollWidth - scrollWrapper.clientWidth);
    }

    checkButtons();
});

