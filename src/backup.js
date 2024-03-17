//–––––––––––––––––––––––––Color Switch–––––––––––––––––––––––––––––––––––––

let pageWrap = $(".page_wrap");
let colorSwitch = $(".nav_color_switch");
let darkModeTrigger = $(".nav_color_trigger.to-dark");
let lightModeTrigger = $(".nav_color_trigger.to-light");

const keepDarkMode = function () {
  if (localStorage.getItem("dark-mode") === "is-dark") {
    pageWrap.attr("data-theme", "dark");
    colorSwitch.addClass("is-dark");
    darkModeTrigger.css({ display: "none" });
    lightModeTrigger.css({ display: "block" });
  }
};

keepDarkMode();

darkModeTrigger.on("click", function () {
  localStorage.setItem("dark-mode", "is-dark");
  colorSwitch.addClass("is-dark");
  darkModeTrigger.css({ display: "none" });
  lightModeTrigger.css({ display: "block" });
  pageWrap.attr("data-theme", "dark");
});
lightModeTrigger.on("click", function () {
  localStorage.setItem("dark-mode", "is-light");
  colorSwitch.removeClass("is-dark");
  darkModeTrigger.css({ display: "block" });
  lightModeTrigger.css({ display: "none" });
  pageWrap.attr("data-theme", "light");
});

let heroHeading = $(".hero_sec_h1--fs2");
  let heroText = $(".hero_sec_scroll_wrap").siblings(".hero_sec_text");
  let heroTags = $(".hero_sec_text p");
  let heroIcon = $(".hero_sec_icon");

  let loadTl = gsap.timeline({ paused: true });
  loadTl.from(heroHeading, {
    opacity: 0,
    rotation: 2,
    yPercent: 100,
    duration: 0.7,
    stagger: { amount: 0.3 },
  });
  loadTl.from(
    heroText,
    {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: "power1.out",
    },
    0
  );
  loadTl.from(
    heroTags,
    {
      opacity: 0,
      xPercent: 50,
      duration: 0.5,
      ease: "power1.out",
      stagger: { amount: 0.4 },
    },
    ">-0.5"
  );
  loadTl.from(
    heroIcon,
    {
      opacity: 0,
      scale: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: { amount: 0.3 },
    },
    ">-0.5"
  );
  setTimeout(() => {
    loadTl.play();
  }, 1400);