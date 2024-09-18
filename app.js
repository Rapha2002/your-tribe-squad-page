let lastScrollTop = 0;
let lastScrollDirection = '';

function scrollDirection() {
    let scrolledTop = document.documentElement.scrollTop; 

    if (scrolledTop > lastScrollTop) {
        lastScrollDirection = 'down';
    } else {
        lastScrollDirection = 'up';
    }

    lastScrollTop = scrolledTop;
}

window.addEventListener('scroll', function() {
    // Check scroll direction
    scrollDirection();

    // If at the top of the page
    if (lastScrollTop == 0) {
        document.querySelector('.header').classList.add('active');
    }
    // If scrolling down
    else if (lastScrollDirection === 'down') {
        document.querySelector('.header').classList.remove('active');

        setTimeout(function() {
            document.querySelector('.header').classList.add('scrolled');
        }, 160);
    }
    // If scrolling up
    else if (lastScrollDirection === 'up') {
        document.querySelector('.header').classList.remove('scrolled');
    }
});