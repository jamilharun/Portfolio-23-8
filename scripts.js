// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener('resize', () =>{console.log(window.innerWidth);});


// --------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

// const header = document.querySelector(".header");
const intro = document.querySelectorAll(".intro_L");
const highlight = document.querySelector(".highLight")

const message = document.querySelector('.message')
const messageIn = document.querySelectorAll('.messageIn')

// const icons = document.querySelectorAll(".icon-item");
const icons = gsap.utils.toArray('.icon-item');

const tl = gsap.timeline();
const tl2 = gsap.timeline({ repeat: -1, stagger: { from: 'random', each: 1 } });
const qwe = gsap.timeline();

qwe .from('.header', {        
    opacity: 1, 
    duration: 4, 
    y: '-100', 
    ease: 'power2.out'
    });
tl 
    .from(intro, {
        duration: 1.5,
        opacity: 0,
        x: '-100',
        ease: 'power1.inOut',
        stagger: .5
    })
    .from(highlight, {
        duration: 2.5,
        opacity: 0,
        ease: 'expo.inOut' 
    })

tl2 .to(icons[0], { opacity: 1, duration: 5, ease: 'power1.inOut' })
    .to(icons[0], { opacity: 0, duration: 5, ease: 'power1.inOut' })
    .to(icons[1], { opacity: 1, duration: 5, ease: 'power1.inOut' })
    .to(icons[1], { opacity: 0, duration: 5, ease: 'power1.inOut' })
    .to(icons[2], { opacity: 1, duration: 5, ease: 'power1.inOut' })
    .to(icons[2], { opacity: 0, duration: 5, ease: 'power1.inOut' })

tl.add(tl2);


// future jamil plss fix
// const tlsection2 = gsap.timeline()
// tlsection2
//     .to([messageIn, message], {
//     scrollTrigger: {
//         trigger: message,
//         start: "20px 80%",
//         end : "top 100px",
//         // onEnter: { opacity: 1},
//         // onLeave: { opacity: 0},
//         // onEnterBack: { opacity: 1 },
//         // onLeaveBack: { opacity: 0 },
//         // stagger: .5,
//         toggleClass: "active",
//         toggleActions: "restart pause reverse pause",
//         markers: true,
//     },
//     opacity: 1,
//     duration: 4,
//     stagger: .5
//     })
    
const links = gsap.utils.toArray('.links');
const tl4 = gsap.timeline()
tl4 .from(links, {
    scrollTrigger: { trigger: '.link', toggleActions: 'restart pause' },
    opacity: 1,
    duration: 1,
    y: -400,
    x: 400,
    stagger: .5,
    ease:  'power1.inOut'   
})