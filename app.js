const navbrand = document.getElementById("h1");
const para = document.getElementsByClassName("para")[0];
const para2 = document.getElementsByClassName("para2")[0];

const image = document.getElementById("pic");
const second = document.querySelector("#second");
const first = document.querySelector("#first");
const third = document.querySelector("#third");
const card = document.querySelector(".card");
const overlay = document.querySelector(".imgover");





gsap.registerPlugin(ScrollTrigger);
let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        toggleActions: "restart none none none",
        start: "10px 50%"
    }
}).from(".cir3,.cir1,.cir2", {
    opacity: 0,
    duration: 0.7,
    scale: 4.6,
    rotation: 180,
    stagger: 0.1,
}).from(".cardsub,.cardtext,.cardhead", {
    opacity: 0,
    duration: 0.7,
    x: -300,
    stagger: 0.2
})

let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#section4",
        scrub:true,
        duration:5,
        start:"-10% 0",
        // end: "+=700",
        pin:true,
        // pinSpacing:false

    }
})

    .from(".sec2", {
        xPercent: 200,
        duration:2
    })
    .from(".sec3", {
        xPercent: -200,
        duration:2
    })
    .from(".sec4", {
        yPercent: -200,
        duration:2
    });


// let t3 = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#section2",
//         pin:true,
//         scrub:true
//     }
// }).from(".card2",{
//     xPercent:200,
//     duration:1
// }).from(".card3",{
//     yPercent:200,
//     duration:1
// }).from(".card4",{
//     yPercent:500,
//     duration:1
// })  
// ScrollTrigger.create({
//     animation: t2,
//     trigger: "#section4",
//     start: "top top",
//     end: "+-4000",
//     scrub: true,
//     pin: true,
//     // anticipatePin: 1
// });

const ball = document.getElementById("ball");
const cube = document.getElementById("cubes");
const f = document.getElementsByClassName("te")[0];
const ic = document.getElementsByClassName("ic")[0];
const bars = document.getElementsByClassName("bars")[0];
const nav = document.getElementsByClassName("nav")[0];
const exit = document.getElementsByClassName("exit")[0];
const wrapper = document.querySelector(".wrapper");
const contact = document.querySelector("#contact");


contact.addEventListener("click",()=>{
    wrapper.style.zIndex = "999";
    gsap.from(".wrapper",{
        opacity:0,
        x:-2000,
        duration:1,
        ease:"power",
        scale:0
    })
    gsap.from(".inner",{
        opacity:0,
        scale:0,
        delay:0.9,
        y:-2000,
        duration:1,
        ease:"power2",

    })
})


exit.addEventListener("click",()=>{
    wrapper.style.zIndex = "-1";

})



ball.addEventListener("click",()=>{
    cube.classList.toggle("stop");
})

bars.addEventListener("click",()=>{
    nav.classList.toggle("toggle-btn");
    gsap.from(".nav",{
        duration:1,
        opacity:0,
        y:-400,
        ease:"ease",
    })

    
})
bars.addEventListener("click",()=>{
    
    gsap.from("ul li",{
        duration:1,
        delay:1,
        opacity:0,
        x:-400,
        ease:"ease",
        stagger:0.2
    })
   
})
