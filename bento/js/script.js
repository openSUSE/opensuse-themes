$(document).ready(function() {
  
  // == Login Form UI Actions ================================================
  
  var formStatus = false; // true == form is open; false == forme is closed
  
  // variables to specify form dimensions
  var x1 = 0;
  var x2 = 0;
  var y1 = 0;
  var y2 = 0;
  
  $('#login-form').insertAfter('#footer'); // move login form to end of document
  
  var positionIndicator = '<span class="position-br" style="display: block; width: 1px; height: 1px; position: absolute; bottom: 0; right: 0;"></span>';   // Snipplet to get bottom-right position
  $('#login-form > :last-child').after(positionIndicator); // place snipplet after last element in form-container
  
  $('#login-trigger').click(function() { // display login form
    var offsetSubheader = $('#subheader').offset(); // get position of #subheader
    var posX = parseInt(offsetSubheader.left) + $('#subheader').width() - $('#login-form').width(); // calculate position for login-form
    $('#login-form').css('left', posX).slideDown('fast', function() { // slide down and set position in callback
       rbPos = $('.position-br').offset();
       x1 = posX; // left
       x2 = rbPos.left; // right
       y1 = offsetSubheader.top; // top
       y2 = rbPos.top; // bottom
    });
    formStatus = true;
    return false;
  });
  
  $('#login-form input.inline-text').each(function() { // hide overlaying <label> elements if there input-elements are NOT empty.
    if ($(this).val()) { // check if value is set
      $(this).prev('label').addClass('focus').hide();
    };
  });
  
  $('#login-form input').focus(function() { // hide label if input-field get focus
    $(this).prev('label').addClass('focus').hide();
  });

  $('#login-form input').blur(function() { // show label if imput-field is empty and hase no focus
    if ($(this).val() == false) { // check if value is empty
      $('#login-form .focus').removeClass('focus').show();
    };
  });
  
  $('#close-login').click(function() { // close login-form onClick
    closeLoginForm();
    return false; // disable action onClick
  });
  
	// TODO: this can be replaced with a .mouseleave() event
  $(document).click(function(event) { // events to perform on mouse-click somewhere on document

    if (formStatus == true) { // check if form is open

      // save mouse-click position
      xClick = event.pageX;
      yClick = event.pageY;
      
      // x1/y1--------------x2/y1
      // |                      |
      // |                      |
      // |    Login - Form      |
      // |                      |
      // |                      |
      // |                      |
      // x1/y2--------------x2/y2
      
      var x0 = 0;
      var y0 = 0;
      
      // Check if Click was inside or outside of form
      if (xClick < x1 || xClick > x2) {
        x0 = 1;
      };
      if (yClick < y1 || yClick > y2) {
        y0 = 1;
      };
      
      // If 1 (true) clode form
      if (x0 == 1 || y0 == 1) {
        formStatus = closeLoginForm();
      };
    };
    
  });

  function closeLoginForm () {
    $('#login-form').slideUp().removeClass('login-show');    
    return false;
  }
  
  // $('#login-form input[type="submit"]').click(function() { // events on submit-button click
  //   return false; // temp disabled
  // });
  // == /Login Form UI Actions ================================================
  

});
