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

gsap.from("#page1-content h1 span", {
    y: "25vw",    // Move vertically from 20vw
    duration: 1, // Animation duration for each span
    delay: 0.5,   // Delay before animation starts
    stagger: 0.07, // Stagger of 0.2 seconds between each span

  });
  gsap.from(".nav-p1" , {
    y:"-5vw",
    duration: 1, // Animation duration for each span
    delay: 0.5,   // Delay before animation starts
   
  })
  
