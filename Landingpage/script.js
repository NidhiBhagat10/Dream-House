/***** Landing page******/

gsap.to("#nav", {
    backgroundColor: "#021b44",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#021b44",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -70%",
        scrub: 2,
    }
})

