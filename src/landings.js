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

  // Play & Pause Video
  let playButtonIcon = $(".btn_play_wrap");
  let video = $(".lp_process_video");

  playButtonIcon.on("click", function () {
    if (playButtonIcon.css("display") === "flex") {
      playButtonIcon.css({ display: "none" });
      video.get(0).play();
      video.attr("controls", "true");
    }
  });
  video.on("ended", function () {
    playButtonIcon.css({ display: "flex" });
    video.removeAttr("controls");
  });

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
