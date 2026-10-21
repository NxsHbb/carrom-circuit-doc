// Highlights the sidebar link for the section currently in view.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.sidebar nav a[href^="#"]'));
  if (!links.length) return;

  var sections = links
    .map(function (link) {
      return document.getElementById(link.getAttribute('href').slice(1));
    })
    .filter(Boolean);

  function sync() {
    var marker = window.scrollY + 120;
    var current = 0;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= marker) current = i;
    }
    links.forEach(function (link, i) {
      link.classList.toggle('active', i === current);
    });
  }

  window.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
})();
