// toggle
function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);
// toggle

// backtop
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}
// backtop
// loading
// const loading = document.getElementById("loading");

// window.addEventListener("load", () => {
//   loading.classList.add('loading-none');
// });

// or

const loading = document.getElementById("loading");

const loadingDuration = 5000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);
// loading
