const header = document.querySelector(".header");

// let t1 = gsap.timeline({ pause:true, reversed: true});
// // let t2 = gsap.timeline({ pause:true, reversed: true});

// console.log("testing");
// header.addEventListener("click", (e) => {
//     t1.play();
//     console.log("this should work");
// })

// t1.play();

// t1.to(".logo", {
//     ease: "elastic.out(1, .8)",
//     top: "10%",
//     rotate: 0,
//     duration: 1.5,
// })


gsap.from(header, {
    duration: 2,
    opacity: 0,
    // y: '-100'
    ease: 'bounce'
})