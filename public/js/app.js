gsap.from(".pers", {duration: 1.3, scale: 1, y : -600, ease: "back.out(1.2)", stagger: 0.1});


let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#main-logo",
      //pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+900", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: true
    }
  });


tl.to(".pers", {scale:0.8})


gsap.registerPlugin(ScrollTrigger);

gsap.from("#brownie", {
  scrollTrigger: {

    trigger: "#personnages",
    toggleActions: "play none none none",
    start: "top top", // when the top of the trigger hits the top of the viewport
    markers:true,

  },
  duration: 1.2,
  rotate: 50,
  x : -1500,
  ease: "power3.inOut"

});
