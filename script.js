// =========================================
// ISAAC CRUZ PORTFOLIO
// =========================================

// =========================================
// CLOSE MOBILE NAVBAR AFTER CLICK
// =========================================

const navLinks = document.querySelectorAll("#mainNavbar .nav-link");
const navbarCollapse = document.getElementById("mainNavbar");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse =
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

      bsCollapse.hide();
    }
  });
});

// =========================================
// NAVBAR SHADOW ON SCROLL
// =========================================

const navbar = document.querySelector(".custom-navbar");

function updateNavbar() {
  if (window.scrollY > 30) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();

// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
}

// =========================================
// CUSTOM VIDEO PREVIEWS
// =========================================

const videoWrappers = document.querySelectorAll(".video-wrapper");

videoWrappers.forEach(function (wrapper) {
  const video = wrapper.querySelector("video");
  const playButton = wrapper.querySelector(".video-play");

  video.addEventListener("loadedmetadata", function () {
    if (video.duration > 1) {
      video.currentTime = 0.5;
    }
  });

  playButton.addEventListener("click", function () {
    videoWrappers.forEach(function (otherWrapper) {
      const otherVideo = otherWrapper.querySelector("video");

      if (otherVideo !== video) {
        otherVideo.pause();
        otherVideo.controls = false;
        otherWrapper.classList.remove("is-playing");
      }
    });

    wrapper.classList.add("is-playing");

    video.controls = true;

    video.play();
  });

  video.addEventListener("ended", function () {
    wrapper.classList.remove("is-playing");

    video.controls = false;

    video.currentTime = 0.5;
  });
});

// =========================================
// AUTOMATIC COPYRIGHT YEAR
// =========================================

const copyright = document.getElementById("copyright");

if (copyright) {
  const currentYear = new Date().getFullYear();

  copyright.textContent = "© " + currentYear + " Isaac Cruz";
}