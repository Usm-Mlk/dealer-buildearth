var basicScrollTop = function () {
  // The button
  var btnTop = document.querySelector('#toggle');
  if (!btnTop) return;
  // Reveal the button
  const btnReveal = function () {
    if (window.scrollY >= 0) {
      btnTop.classList.add('is-visible');
    } else {
      btnTop.classList.remove('is-visible');
    }
  }

  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
  }
  // Listeners
  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);
    
};
basicScrollTop();





