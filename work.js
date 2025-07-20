  function loadWebsite() {
    const url = document.getElementsByClassName('input')[0].value;
    ['desktop', 'tablet', 'mobile'].forEach(id => {
      document.getElementById(id).src = url;
    });
  }
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };