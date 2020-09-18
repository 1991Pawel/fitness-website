

const webNavigation = () => {
  // burger menu
  const burgerBtn = document.querySelector(".burger");
  const menu = document.querySelector(".menu__list");
  const menuLink = document.querySelectorAll(".menu__link");

  const showMenu = () => {
    if (window.innerWidth < 1024) {
      menu.classList.toggle("active");
      burgerBtn.classList.toggle("active");
    }
  };

  const classChangeHandler = () => {
    if (window.innerWidth <= 1024) {
      menu.classList.remove("active");
      burgerBtn.classList.remove("active");
    }
  };
  window.addEventListener("resize", classChangeHandler);

  [...menuLink].forEach(link => {
    link.addEventListener("click", showMenu);
  });

  burgerBtn.addEventListener("click", showMenu);

  // change bar color when scroll
  window.addEventListener("scroll", function() {
    menuColorBar = this.document.querySelector(".menu");
    document.querySelector;
    if (this.scrollY > 400 && window.innerWidth < 1024) {
      menuColorBar.classList.add("scroll");
    } else {
      menuColorBar.classList.remove("scroll");
    }
  });
};

webNavigation();


