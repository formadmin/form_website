//–––––––––––––––––––––––––Lenis Scroll–––––––––––––––––––––––––––––––––––––

let lenis;
if (Webflow.env("editor") === undefined) {
  lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.9,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
$("[data-lenis-start]").on("click", function () {
  lenis.start();
});
$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});
$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});

//–––––––––––––––––––––––––Initial Dom Setup–––––––––––––––––––––––––––––––––––––

let replaceText2 = $(".footer_info_text.is-2").attr("cursor-trigger");
let mm = gsap.matchMedia();

let splitType = new SplitType("[hoverstagger='text']", {
  types: "words,chars",
  tagName: "span",
});

let splitType2 = new SplitType("[text-split]", {
  types: "words,chars",
  tagName: "span",
});

gsap.set("[text-split]", { opacity: 1 });
gsap.set("[element-animated-trigger]", { opacity: 1 });

//–––––––––––––––––––––––––Loader Animation–––––––––––––––––––––––––––––––––––––

let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
let progressBar = $(".loader_main_bar.is-2");
let counter = { value: 0 };
let loaderDuration = 0.7;

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $("#loader").text(progress);
}

function endLoaderAnimation() {
  let loaderOutTl = gsap.timeline({});
  loaderOutTl.to(".loader_main", {
    yPercent: -101,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
      gsap.set(".loader_main", { yPercent: 101 });
    },
  });

  $(".loader_trigger.is-end").click();
}

function stopScroll() {
  $(".loader_trigger.is-start").click();
}

stopScroll();

gsap.set(".loader_main_logo", { opacity: 100 });

let loaderInTl = gsap.timeline({
  onComplete: endLoaderAnimation,
});
loaderInTl.to(counter, {
  value: 100,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase),
});
loaderInTl.to(
  progressBar,
  {
    width: "100%",
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase),
  },
  0
);
loaderInTl.from(
  $("[element-slide-up]").find(".loader_main_logo_svg"),
  {
    yPercent: 110,
    duration: 0.4,
    ease: "power2.out",
    stagger: { amount: 0.15 },
  },
  0
);

// On Back Button Click
window.onpageshow = function (event) {
  if (
    event.persisted &&
    $(".loader_main").css("transform") == "matrix(1, 0, 0, 1, 0, 0)"
  ) {
    // window.location.reload();
    endLoaderAnimation();
  }
};

//–––––––––––––––––––––––––Document Ready–––––––––––––––––––––––––––––––––––––

$(document).ready(function (event) {
  // add a media query. When it matches, the associated function will run

  $("a").on("click", function (e) {
    if (
      $(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank"
    ) {
      e.preventDefault();
      let destination = $(this).attr("href");

      gsap.set(".loader_main_logo", { opacity: 0 });
      gsap.set(counter, { value: 0 });
      gsap.set(progressBar, { width: "0%" });
      updateLoaderText();

      let transitionTl = gsap.timeline();
      transitionTl.to(".loader_main", {
        yPercent: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          window.location = destination;
        },
      });
    }
  });

  mm.add("(min-width: 992px)", () => {
    // Regualar Animation Events

    let textOpacity = $("[hoverstagger='text']");
    gsap.set(textOpacity, { opacity: 100 });

    // Follow Cursor

    let cursor = $(".follow_cursor");
    let iconWebsite = $(".follow_cursor_icon_wrap.is-website");
    let iconBranding = $(".follow_cursor_icon_wrap.is-branding");
    let iconContent = $(".follow_cursor_icon_wrap.is-content");
    let iconNetwork = $(".follow_cursor_icon_wrap.is-network");
    let cursorTrigger = $("[cursor-trigger]");
    let websiteIconTrigger = $("[website-icon-trigger='true']");
    let brandingIconTrigger = $("[branding-icon-trigger='true']");
    let contentIconTrigger = $("[content-icon-trigger='true']");
    let networkIconTrigger = $("[network-icon-trigger='true']");

    let cursorText = $(".cursor_text");
    let replaceText;

    cursorTrigger.on("mouseover", function () {
      replaceText = $(this).attr("cursor-trigger");
      cursorText.text(replaceText);
      cursor.addClass("is-active");
    });
    cursorTrigger.on("mouseleave", function () {
      cursor.removeClass("is-active");
    });

    websiteIconTrigger.on("mouseover", function () {
      iconWebsite.addClass("is-active");
    });
    websiteIconTrigger.on("mouseleave", function () {
      iconWebsite.removeClass("is-active");
    });
    brandingIconTrigger.on("mouseover", function () {
      iconBranding.addClass("is-active");
    });
    brandingIconTrigger.on("mouseleave", function () {
      iconBranding.removeClass("is-active");
    });
    contentIconTrigger.on("mouseover", function () {
      iconContent.addClass("is-active");
    });
    contentIconTrigger.on("mouseleave", function () {
      iconContent.removeClass("is-active");
    });
    networkIconTrigger.on("mouseover", function () {
      iconNetwork.addClass("is-active");
    });
    networkIconTrigger.on("mouseleave", function () {
      iconNetwork.removeClass("is-active");
    });

    // Hover Stagger Animation

    $("[hoverstagger='true']").each(function (index) {
      let text1 = $(this).find("[hoverstagger='text']").eq(0);
      let text2 = $(this).find("[hoverstagger='text']").eq(1);
      let text = $(this).find(".btn_text.is-2");
      let sw = text.width() + 64;

      let tl = gsap.timeline({ paused: true });
      tl.to(text1.find(".char"), {
        yPercent: -90,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: { amount: 0.15 },
      });
      tl.from(
        text2.find(".char"),
        {
          yPercent: 100,
          duration: 0.3,
          ease: "power2.inOut",
          stagger: { amount: 0.15 },
        },
        0
      );
      tl.to(
        $(this).find(".btn_tertiary_icon"),
        {
          rotate: -45,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      );
      tl.to($(this).find(".btn_main_wrap"), { width: sw, duration: 0.3 }, 0);

      $(this).on("mouseenter", function () {
        tl.play();
      });
      $(this).on("mouseleave", function () {
        tl.reverse();
      });
    });

    // Footer Link Animation

    let footerLink = $(".footer_link");

    footerLink.on("mouseover", function () {
      $(this).addClass("is-active");
    });

    footerLink.on("mouseleave", function () {
      $(this).removeClass("is-active");
    });

    return () => {
      footerLink.off("mouseover mouseleave");
      cursorTrigger.off("mouseover mouseleave");
      websiteIconTrigger
        .add(brandingIconTrigger)
        .add(contentIconTrigger)
        .add(networkIconTrigger)
        .off("mouseover mouseleave");
    };
  });
  mm.add("(max-width: 991px)", () => {
    // Tablet and under

    // Nav Open

    let duration = 0.3;
    let ease = "power2.out";

    $(".nav_list_wrap").css({ display: "none" });

    let navTl = gsap.timeline({ paused: true });
    navTl.from(".nav_list_bg", {
      yPercent: -101,
      duration: duration * 2,
      ease: ease,
    });
    navTl.from(
      $(".nav_open_top_wrap"),
      {
        opacity: 0,
        duration: duration,
        ease: ease,
        stagger: { amount: 0.3 },
      },
      0
    );
    navTl.from(
      $(".nav_list").find(".nav_link"),
      {
        yPercent: -101,
        duration: duration,
        ease: ease,
        stagger: { amount: 0.3 },
      },
      0
    );

    $(".nav_button.is-open").on("click", function () {
      $(".nav_list_wrap").css({ display: "flex" });
      navTl.play();
    });
    $(".nav_button.is-close").on("click", function () {
      navTl.reverse();
      setTimeout(() => {
        $(".nav_list_wrap").css({ display: "none" });
      }, 600);
    });
    $(".nav_link").on("click", function () {
      navTl.reverse();
      setTimeout(() => {
        $(".nav_list_wrap").css({ display: "none" });
      }, 600);
    });

    return () => {
      $(".nav_button.is-open").add(".nav_button.is-close").off("click");
      $(".nav_list_wrap").css({ display: "flex" });
    };
  });

  //–––––––––––––––––––––––––Scroll Trigger–––––––––––––––––––––––––––––––––––––

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      // Scroll Trigger Events

      //Footer Animation

      $(".footer_wrap").each(function (index) {
        let footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom",
            end: "bottom bottom",
            scrub: 0,
          },
        });
        footerTl.from($(".footer"), { yPercent: -30 });
      });
    },
  });
});

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
