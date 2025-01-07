function Homecursor(){
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")
    
    
    page1Content.addEventListener("mousemove" , function(dets){
        gsap.to("#cursor" , {
            left:dets.x,
            top:dets.y,
        })
    })
    page1Content.addEventListener("mouseenter" , function(){
        gsap.to("#cursor",{
            scale:1,
            duration:0.2,
            delay:0.2,
        })
    })
    
    page1Content.addEventListener("mouseleave" , function(){
        gsap.to("#cursor",{
            scale:0,
            duration:0.1,
            
        })
    })
}
Homecursor();

