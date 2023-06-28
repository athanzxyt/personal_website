window.addEventListener('load', function() {
    // Hide the preloader after a minimum of 3 seconds
    setTimeout(function() {
      document.getElementById('preloader').classList.add('disappear');
    }, 2000);
  });
  