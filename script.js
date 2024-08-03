
//part 1
// gsap.to("#box",{
//     x:900,
//     delay:1,
//     duration:2,
//     // borderRadius:"50%",
//     rotate:360,
//     backgroundColor:"yellow",
//     scale:0.5,   //1 orignal 2 double
//     repeat:-1, //1 2 times repeat -1 continuously
//     yoyo:true
// })
// gsap.to("#box1",{
//     x:900,
//     y:200,
//     delay:1,
//     duration:2
// })
// gsap.from("#text h1",{
//     y:30,
//     delay:1,
//     duration:2.5,
//     opacity:0,
//     stagger:0.4   //1 slow 0.5 fast -1 ulta

// })



// part2
const tl = gsap.timeline()
tl.from("nav h1",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.6
})
tl.from("nav ul li",{
    y:-30,
    opacity:0,
    duration:0.7,
    stagger:0.4
})
tl.from(".effect",{
    y:26,
    scale:0.3,
    opacity:0,
    duration:0.8,
})