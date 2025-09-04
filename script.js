  const toggle = document.querySelector('.dropdown-toggle');
  const menu = document.querySelector('.dropdown-menu');

  toggle.addEventListener('click', event => {
    menu.classList.toggle('show');
  });

  document.addEventListener('click', event => {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('show');
    }
  });

  const navbar = document.querySelector(".navbar");
  const topbar = document.querySelector(".topbar");

  window.addEventListener("scroll", event => {
    if (window.scrollY > 120) {
        // hide navbar
        navbar.style.transform = "translateY(-100%)";

        // move topbar to the top
        topbar.style.top = "0";
    } else {
        // show navbar
        navbar.style.transform = "translateY(0)";

        // return topbar under navbar
        topbar.style.top = "3.5rem";
    }
});

