const pages = document.querySelectorAll(".page-one, .page-two, .page-three");
let current = 0;

setInterval(() => {
  pages[current].classList.remove("active");
  current = (current + 1) % pages.length;
  pages[current].classList.add("active");
}, 3000); // 4 seconds


