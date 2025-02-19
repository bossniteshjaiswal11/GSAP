gsap.to("#page2 h1",{
     transform:"translate(-200%)",
     scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"end 100%",
        scrub:2,
        pin:true,
     }
})
 
