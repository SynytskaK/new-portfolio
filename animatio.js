let text = document.querySelector('.text_js');

let splitText = (el) => {
    el.innerHTML = el.textContent.replace(/(\S+)/g, m => {
        return '<div class="word">' +
            m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") + '</div>';
    });
    return el;
};
const split = splitText(text);

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.word')).forEach((el, idx) => {
    gsap.from(el, 2, {
        opacity: 0,
        scale: 0.1,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        delay: idx * 0.02,
        repeat: 0
    })
});

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true
})
gsap.fromTo('#s', {opacity:1}, {
    opacity:0,
    scrollTrigger: {
        trigger: '#s',
        start: 'top',
        end: 'bottom',
        scrub: true
    }
});
// Фото-анімація
Array.from(document.querySelectorAll('.el')).forEach((i, idx) => {
    gsap.from(i, 2, {
        opacity: 0,
        scale: 2,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        delay: idx * 0.02,
        repeat: 0
    })
});