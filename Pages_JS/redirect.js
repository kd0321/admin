// intercept the login form submit and redirect to dashboard.html (dev only)
  (function(){
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', function(e){
      e.preventDefault(); // prevent real submission
      // Optional: read values for local debug logging
      const email = (document.getElementById('email') || {}).value || '';
      const pw = (document.getElementById('password') || {}).value || '';
      console.log('DEV bypass: email=', email);

      // Adjust the target path if your dashboard is in a subfolder:
      //  - same folder as this file:  'dashboard.html'
      //  - in a subfolder called "dashboard":  'dashboard/dashboard.html'
      //  - one level up:  '../dashboard.html'
      //
      // Change the path below to the correct relative/absolute location:
      window.location.href = 'Navigation/dashboard.html';
    });
  })();

