$(document).ready(function (event) {
  // add a media query. When it matches, the associated function will run

  mm.add("(min-width: 992px)", () => {
    // Regualar Animation Events

    return () => {};
  });

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Events

      $(".service_main_tag").each(function (index) {
        let tagTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        });
        tagTl.from($(this), { xPercent: 100, opacity: 0 });
      });
    },
  });
});
