const header = document.querySelector(".header");
const intro = document.querySelectorAll(".intro_L");
const highlight = document.querySelector(".highLight")

// const icons = document.querySelectorAll(".icon-item");
const icons = gsap.utils.toArray('.icon-item');

const tl = gsap.timeline();
const tl2 = gsap.timeline();

tl 
    .from(header, {
        duration: 2, 
        opacity: 0, 
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
        stagger: {
            from: 'random',
            each: 1,
            repeat: -1,
            
        },
        ease: 'power1.inOut',
    })
tl.add(tl2);
// for(let i = 0; i < tl2.length; i++){
//   console.log(tl2[i]);
// }

// tl2.reverse()

// function animateRandom(){
//     gsap.utils.shuffle(icons);
//     const tl2 = gsap.timeline({ 
//         repeat: -1, 
//         stagger: 1 , 
//         onComplete: animateRandom}),
//         subset = icons.slice(0,2); 

//     tl2.to(subset, {
//         opacity: 0,
//     }).set(subset, {
//         opacity: 1,
//     })
// }
// animateRandom();