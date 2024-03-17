$(document).ready(function (event) {
  // add a media query. When it matches, the associated function will run

  //-----------------------------Hero Marquee----------------------------------------

  let marquee = $(".hero_marquee");
  let marqueeItem = $(".hero_marquee_item");

  let marqueeTl = gsap.timeline({ paused: true, repeat: -1 });
  marqueeTl.to(marquee, {
    xPercent: -50,
    duration: 30,
    ease: "none",
  });
  marqueeTl.set(marquee, { xPercent: 0 });

  marqueeItem.on("mouseover", function () {
    marqueeTl.pause();
    $(this).siblings(".hero_marquee_item").addClass("is-faded");
    $(this)
      .parent()
      .parent()
      .siblings(".hero_marquee_list_wrap")
      .find(".hero_marquee_item")
      .addClass("is-faded");
  });

  marqueeItem.on("mouseleave", function () {
    marqueeTl.play();
    $(this).siblings(".hero_marquee_item").removeClass("is-faded");
    $(this)
      .parent()
      .parent()
      .siblings(".hero_marquee_list_wrap")
      .find(".hero_marquee_item")
      .removeClass("is-faded");
  });

  //–––––––––––––––––––––––––Hero Load Animation–––––––––––––––––––––––––––––––––––––

  let heroText = $(".hero_main_text");

  let loadTl = gsap.timeline({ paused: true });
  loadTl.from($("[words-slide-up]").find(".word"), {
    opacity: 0,
    rotation: 2,
    yPercent: 101,
    duration: 0.5,
    ease: "power1.out",
    stagger: { each: 0.07 },
  });
  loadTl.from(
    heroText.find(".span_animated"),
    {
      opacity: 0,
      yPercent: 100,
      duration: 0.7,
      stagger: { amount: 0.3 },
    },
    ">-0.5"
  );
  loadTl.from(
    $("[element-slide-up]").find("[hero-img-animated]"),
    {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power1.out",
      stagger: { amount: 0.5 },
    },
    ">-1"
  );
  setTimeout(() => {
    loadTl.play();
    marqueeTl.play();
  }, 550);

  // Icon Spans

  $(".icon_span").each(function (index) {
    let relatedEl = $(".span_element").eq(index);
    relatedEl.appendTo($(this));
  });

  mm.add("(min-width: 992px)", () => {
    // Regualar Animation Events

    $(".hero_main_link").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".hero_link_bg"), {
        yPercent: 101,
        duration: 0.3,
        ease: "power2.inOut",
      });
      tl.to(
        $(this).find(".hero_link_text_wrap"),
        {
          xPercent: 10,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      );
      tl.to(
        $(this).find(".hero_link_icon.is-arrow"),
        {
          rotate: -45,
          xPercent: -90,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      );

      $(this).on("mouseenter", function () {
        tl.play();
      });
      $(this).on("mouseleave", function () {
        tl.reverse();
      });
    });

    // Process Hover

    let processTrigger = $(".process_main_title_wrap");

    processTrigger.on("mouseover", function () {
      $(this)
        .parent(".process_main_item")
        .siblings(".process_main_item")
        .addClass("is-faded");
      $(this).addClass("is-active");
    });

    processTrigger.on("mouseleave", function () {
      $(this)
        .parent(".process_main_item")
        .siblings(".process_main_item")
        .removeClass("is-faded");
      $(this).removeClass("is-active");
    });

    return () => {
      processTrigger.off("mouseover mouseleave");
    };
  });

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Events

      let images = gsap.utils.toArray(".divider_main_img");

      images.forEach((image) => {
        let imgTl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom -100%",
            scrub: true,
          },
        });
        imgTl.fromTo(
          image,
          { yPercent: 100 * image.dataset.start },
          { yPercent: 100 * image.dataset.end }
        );
      });

      //Video Grow

      $(".about_main_video").each(function (index) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom",
            end: "top 30%",
            scrub: 1.5,
          },
        });
        tl.fromTo($(this), { width: "0%" }, { width: "100%" });
      });
    },
  });
});
