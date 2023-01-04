$(document).ready(function () {
  const amenityList = {};
  $('input[type="checkbox"]').click(function () {
    $(this).each(function () {
      if (this.checked === true) {
        amenityList[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenityList[$(this).data('id')];
      }
    });

    if (Object.values(amenityList).length > 0) {
      $('.amenities h4').text(Object.values(amenityList).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  console.log(status);
  if (status === 'success') {
    console.log("Connected");
    $('DIV#api_status').addClass('available');
  } else {
    console.log("Not connected");
    $('DIV#api_status').removeClass('available');
  }
});
