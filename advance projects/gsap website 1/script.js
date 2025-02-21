function page1Animation(){
    var tl = gsap.timeline();
tl.from("nav h1, nav h4,nav button",{
    y:-40,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,  
    duration:0.5
},"-=0.3")   
// },"-=0.3") this part between }) is used in timeline for fas the animation execution because delay in timeline not work properly
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img",{
    opacity:0,
    x:200,
    duration:0.7
},"-=0.3")
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
         trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -60%",
        scrub:2,
        }
     })
     tl2.from(".section2top img",{
         opacity:0,
         y:30,
         stagger:0.15,
         duration:0.6
     })
     tl2.from(".services",{
         y:30,
         opacity:0,
         duration:0.5,
     })
     // line codes
     tl2.from(".elem.line1.left",{
         x:-300,
         opacity:0,
         duration:1
     },"boss")
     // },"boss") in this part between }) you can write any random text for matching the time of two objects animation
     tl2.from(".elem.line1.right",{
         x:300,
         opacity:0,
         duration:1
     },"boss")
     tl2.from(".elem.line2.left",{
         x:-300,
         opacity:0,
         duration:1
     },"boss1")
     // },"boss1") in this part between }) you can write any random text for matching the time of two objects animation
     tl2.from(".elem.line2.right",{
         x:300,
         opacity:0,
         duration:1
     },"boss1")
     
}
page1Animation()
page2Animation()