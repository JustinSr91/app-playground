$(document).ready(function() {

  $('#star').click(function() {
    if ($('#star').hasClass('sun')) {
      $('#star').removeClass('sun').addClass('moon');
    }
    else {
      $('#star').removeClass('moon').addClass('sun');
    };
    if ($('#sky').hasClass('day')) {
        $('#sky').removeClass('day').addClass('night');
    }
    else {
        $('#sky').removeClass('night').addClass('day');
    };
  });
});
