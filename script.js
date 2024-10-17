// Check if the page is reloaded
if (performance.navigation.type === 1) {
  window.location.href = 'index.html';
}

// Function to create stars
function createStars() {
  for (let i = 0; i < 50; i++) {
      let star = document.createElement('div');
      star.className = 'motivational-stars';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(star);
  }
}
// Add scroll event listener
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        // Redirect to index.html when scrolling up
        window.location.href = 'index.html';
    }
    lastScrollTop = scrollTop;
});
window.onload = function() {
  createStars();
};
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};