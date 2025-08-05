  const burger = document.getElementById("burger");
  const navbarContent = document.querySelector(".navbar__content");

  burger.addEventListener("click", () => {
    console.log("hello")
    navbarContent.classList.toggle("show");
  });