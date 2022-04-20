$(document).ready(function(){
  /* static inheritence */
  // load the following static sections on each page
  $(function(){
      $("#header-placeholder").load("/templates/header.html");
      $("#sidebar-placeholder").load("/templates/sidebar.html");
      $("#footer-placeholder").load("/templates/footer.html");
    });
  // once loaded, scroll to top of the page
  window.scrollTo(0, 0);

  /* general */
  // handle contact form submission
  $("#contact-btn").click(function(){
    if ( !$("#contact-form")[0].checkValidity() )
      return;
    // create a mailto email and populate the fields
    window.location = 'mailto:' + $("#contact-selector").val() + '?subject=' + $("#contact-subject").val() + '&body=' + $("#contact-message").val();
  });
});
