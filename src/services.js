$(document).ready(function (event) {
  // add a media query. When it matches, the associated function will run

  // //Hero Load Animation

  let heroTags = $(".hero_sec_text p");

  let loadTl = gsap.timeline({ paused: true });
  loadTl.from(heroTags, {
    opacity: 0,
    xPercent: 50,
    duration: 0.5,
    ease: "power1.out",
    stagger: { amount: 0.4 },
  });

  setTimeout(() => {
    loadTl.play();
  }, 550);

  let iconTl = gsap.timeline({ repeat: -1 });
  iconTl.to(".hero_sec_icon", { rotate: 360, duration: 20, ease: "none" });
  iconTl.to(
    ".service_divider_icon",
    { rotate: 360, duration: 20, ease: "none" },
    0
  );

  mm.add("(min-width: 992px)", () => {
    // Regualar Animation Events

    return () => {};
  });

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Events
    },
  });
});

let bgColor = $(".chang-color-back-trigger").attr("data-color");

$(".service_divider_wrap").each(function (index) {
  let colorChangeTl = gsap.timeline({
    scrollTrigger: {
      duration: 0,
      trigger: $(this),
      start: "top 50%",
      onEnter: () => {
        $(".page_wrap").attr("data-color", "");
      },
      onLeaveBack: () => {
        $(".page_wrap").attr("data-color", bgColor);
      },
    },
  });
});
