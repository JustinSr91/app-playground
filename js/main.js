$(document).ready(function() {
// Toggle between Sun and Moon on click
  $('#star').click(function() {
    if ($('#star').hasClass('sun')) {
      $('#star').removeClass('sun').addClass('moon');
    }
    else {
      $('#star').removeClass('moon').addClass('sun');
    };
    // Toggle body background color on click
    if ($('#sky').hasClass('day')) {
        $('#sky').removeClass('day').addClass('night');
    }
    else {
        $('#sky').removeClass('night').addClass('day');
    };
    // Toggle Moon Spots on click
    if ($('#spot1').hasClass('visible')) {
        $('#spot1').removeClass('visible');
    }
    else {
      $('#spot1').addClass('visible');
    };
    if ($('#spot2').hasClass('visible')) {
        $('#spot2').removeClass('visible');
    }
    else {
      $('#spot2').addClass('visible');
    };
    if ($('#spot3').hasClass('visible')) {
        $('#spot3').removeClass('visible');
    }
    else {
      $('#spot3').addClass('visible');
    };
  });
});
