$(document).ready(function (event) {
  // add a media query. When it matches, the associated function will run

  // Load Animation

  // let heroText = $(".hero_about_h1");
  // let heroEyebrowTop = $(".hero_about_text--fs7.1").eq(0);
  // let heroEyebrowBottom = $(".hero_about_text--fs7.1").eq(1);

  // let loadTl = gsap.timeline({ paused: true });
  // loadTl.from(heroEyebrowTop, {
  //   opacity: 0,
  //   xPercent: 50,
  //   duration: 0.5,
  // });
  // loadTl.from(
  //   $("[words-slide-up]").find(".word"),
  //   {
  //     opacity: 0,
  //     rotation: 2,
  //     yPercent: 101,
  //     duration: 0.5,
  //     ease: "power1.out",
  //     stagger: { each: 0.07 },
  //   },
  //   ">-0.3"
  // );
  // loadTl.from(
  //   heroText.find(".span_element"),
  //   {
  //     opacity: 0,
  //     rotation: 2,
  //     scale: 0,
  //     duration: 0.5,
  //     ease: "power1.out",
  //     stagger: { each: 0.07 },
  //   },
  //   ">-0.3"
  // );
  // loadTl.from(
  //   heroEyebrowBottom,
  //   {
  //     opacity: 0,
  //     xPercent: 50,
  //     duration: 0.5,
  //   },
  //   ">-0.7"
  // );
  // loadTl.from(
  //   $(".btn_wrap"),
  //   {
  //     opacity: 0,
  //     scale: 0,
  //     duration: 0.8,
  //     ease: "power1.out",
  //   },
  //   ">-1"
  // );
  // setTimeout(() => {
  //   loadTl.play();
  // }, 1500);

  // Service Text Animation

  // Icon Spin Animation

  $(".icon_span").each(function (index) {
    let relatedEl = $(".span_element").eq(index);
    relatedEl.appendTo($(this));
  });

  mm.add("(min-width: 992px)", () => {
    // Regualar Animation Events

    return () => {};
  });

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Events

      // Text Change on scroll

      let headingWebsite = $(".about_services_h2.is-1");
      let headingBranding = $(".about_services_h2.is-2");
      let headingContent = $(".about_services_h2.is-3");
      // let headingNetwork = $(".about_services_h2.is-4");

      let triggerBranding = $(".about_services_text_wrap.is-2");
      let triggerContent = $(".about_services_text_wrap.is-3");
      // let triggerNetwork = $(".about_services_text_wrap.is-4");

      function createScrollTrigger(triggerElement, timeline) {
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 60%",
          onEnter: () => timeline.play(),
          onLeaveBack: () => timeline.reverse(),
        });
      }

      triggerBranding.each(function (index) {
        let textChangeTl = gsap.timeline({ paused: true });
        textChangeTl.to(headingWebsite.find(".char"), {
          yPercent: -100,
          duration: 0.3,
          stagger: { amount: 0.2 },
        });
        textChangeTl.from(
          headingBranding.find(".char"),
          {
            yPercent: 100,
            duration: 0.3,
            stagger: { amount: 0.2 },
          },
          0
        );
        createScrollTrigger($(this), textChangeTl);
      });

      triggerContent.each(function (index) {
        let textChangeTl = gsap.timeline({ paused: true });
        textChangeTl.to(headingBranding.find(".char"), {
          yPercent: -100,
          duration: 0.3,
          stagger: { amount: 0.2 },
        });
        textChangeTl.from(
          headingContent.find(".char"),
          {
            yPercent: 100,
            duration: 0.3,
            stagger: { amount: 0.2 },
          },
          0
        );
        createScrollTrigger($(this), textChangeTl);
      });

      // triggerNetwork.each(function (index) {
      //   let textChangeTl = gsap.timeline({ paused: true });
      //   textChangeTl.to(headingContent.find(".char"), {
      //     yPercent: -100,
      //     duration: 0.3,
      //     stagger: { amount: 0.2 },
      //   });
      //   textChangeTl.from(
      //     headingNetwork.find(".char"),
      //     {
      //       yPercent: 100,
      //       duration: 0.3,
      //       stagger: { amount: 0.2 },
      //     },
      //     0
      //   );
      //   createScrollTrigger($(this), textChangeTl);
      // });
    },
    all: function () {
      $(".about_services_text_inner").each(function (index) {
        let tagTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        });
        tagTl.to($(this), { width: "100%" });
      });

      $(".about_services_track_wrap").each(function (index) {
        let tagTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top 50%",
            end: "bottom 20%",
            scrub: true,
          },
        });
        tagTl.to($(".about_services_line"), { height: "100%" });
      });

      $(".about_divider_img").each(function (index) {
        let tagTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        tagTl.fromTo($(this), { yPercent: -15 }, { yPercent: 15 });
      });
    },
  });
});
