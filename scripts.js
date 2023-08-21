// checking window width
console.log(window.innerWidth); //full window width

// onUpdate window width when you inspect it
window.addEventListener('resize', () =>{console.log(window.innerWidth);});


// --------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".header");
const intro = document.querySelectorAll(".intro_L");
const highlight = document.querySelector(".highLight")
const message = document.querySelectorAll('.messageIn')
// const icons = document.querySelectorAll(".icon-item");
const icons = gsap.utils.toArray('.icon-item');

const tl = gsap.timeline();
const tl2 = gsap.timeline();

tl 
    .from(header, {
        opacity: 0, 
        duration: 2, 
        y: '-100', 
        ease: 'power2.out'
    })
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

tl2 .to(icons, {
        opacity: 1,
        duration: 5,
        // toggleActions: 'restart reverse none none',
        stagger: {
            from: 'random',
            each: 1,
            repeat: -1,
        },
        ease: 'power1.inOut',
    })
tl.add(tl2);

gsap.to(message, {
    scrollTrigger: {
        trigger: message,
        start: "20px 80%",
        end : "top 100px",
        markers: true,
        // toggleClass: ".active",
        // toggleActions: "restart pause reverse pause"
    },
    opacity: 1,
    
    duration: 1,
    stagger: .5
})


// gsap.timeline({scrollTrigger:{
//     trigger: message,
//     start: 'top top',
//     scrub: 1,
//     opacity: 0
// }})
// .to(message,{
//     height: '110%',
//     ease: 'expo.inOut'
// })