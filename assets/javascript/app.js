/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
jQuery(document).ready(function ($) {

  // Responsive Preview Tests
  $('.preview-test').click(function (e) {
    e.preventDefault();
    $('.preview-test').removeClass('preview-devices-active');
    $(this).addClass('preview-devices-active');

    var previewmode = $(this).attr('id').replace('-test', '');
    $('#preview-frame').removeClass();
    $('#preview-frame').addClass(previewmode);

  });

  $('.icon-cancel-circled').click(function () {
    $('.social-share').hide();
  });

});