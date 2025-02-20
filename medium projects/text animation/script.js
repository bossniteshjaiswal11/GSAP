function breaktheText() {
    // var h1Text = document.querySelector("h1").textContent

var h1 = document.querySelector("h1")
var h1Text = h1.textContent
var splittedText = h1Text.split("")
var halfValue = splittedText.length/2
var clutter = ""
splittedText.forEach(function(elem,idx){
    // clutter = clutter + elem
    // clutter += elem
    if(idx<halfValue){
        clutter += `<span class="a">${elem}</span>`
    }else{
        clutter += `<span class="b">${elem}</span>`
    }
})
 h1.innerHTML = clutter
}
breaktheText()

gsap.from("h1 .a",{
    y:50,
    duration:0.6,
    opacity:0,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    opacity:0,
    delay:0.5,
    stagger:-0.15
})