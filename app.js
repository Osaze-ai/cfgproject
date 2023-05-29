$(document).ready(function() {
  // Wait for the page to finish loading
  
  // Toggle Dark Mode
  $(document).on('click', '.toggle-dark-mode', function() {
    // When the dark mode toggle is clicked
    
    $('body').toggleClass('dark-mode');
    // Toggle the appearance of dark mode on the page
  });
});