var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x - 250 +"px"
    blur.style.top=dets.y - 250 +"px"
})

gsap.to("#nav",{
    backgroundColor:"#f2f2f2",
    height:"80px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -1%",
        end:"top -2%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        //markers: true,
        start:"top -20%",
        end:"top -70%",
        scrub:2,
    }
})