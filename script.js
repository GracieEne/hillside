  // ============LANGUAGE DROPDOWN ===========
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

  // ==========NAVBAR/TOPBAR SCROLL BEHAVIOUR==========
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

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.menu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mainMenu.classList.toggle('show');
});

// Close menu when clicking anywhere outside
document.addEventListener('click', (e) => {
    if (!mainMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mainMenu.classList.remove('show');
    }
});

// Close menu when clicking a menu item
document.querySelectorAll('.menu li').forEach(item => {
    item.addEventListener('click', () => {
        mainMenu.classList.remove('show');
    });
});









