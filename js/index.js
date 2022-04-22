$(function(){
  /* static inheritence */
  // load the following static sections on each page
  $(function(){
      $("#header-placeholder").load("/templates/header.html");
      $("#sidebar-placeholder").load("/templates/sidebar.html");
      $("#footer-placeholder").load("/templates/footer.html");
    });

  /* contact form */
  // handle contact form submission
  $(".contact-btn").click(function(){
    if ( !$("#contact-form")[0].checkValidity() )
      return;
    // create a mailto email and populate the fields
    window.location = 'mailto:' + $("#contact-selector").val() + '?subject=' + $("#contact-subject").val() + '&body=' + $("#contact-message").val();
  });

  /* branch search */
  // handle branch-search form
  $("#branch-search-btn").click(function(){
    // hide the form's result and error boxes
    $("#branch-search-result").addClass("invisible d-none");
    $("#branch-search-error").addClass("invisible d-none");

    $.get("https://phoenix.camra.org.uk/api/v1/branch-finder", {postcode: $("#branch-search").val().replace(/\s/g, "") }).done(function(data){
      $("#static-branch-name").val(data['name']);
      $("#static-branch-contact").val(data['contact'] ? data['contact']['name'] : "unknown");
      $("#static-branch-email").val(data["contact"] ? data["contact"]["email"] : "unknown");
      // show the result box
      $("#branch-search-result").removeClass("invisible d-none");
      $("#branch-search-result").addClass("visible d-block");
    }).fail(function(error){
      // show the error box
      $("#branch-search-error").removeClass("invisible d-none");
      $("#branch-search-error").addClass("visible d-block");
    });
  });
  // allow user to click enter to also submit the form
  $("input#branch-search").on("keypress",function(e) {
    if(e.which == 13)
        $("#branch-search-btn").trigger("click");
  });
});
