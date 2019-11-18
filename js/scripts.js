//Facebook popup window
function openWindow(url,height,width) {
  window.open(url,"_blank","height="+height+",width="+width);
  return false;
}
function share(type) {
  var url = escape(window.location.href);
  var site = 'HoustonChronicle.com';
  var title = escape(document.title);
  if ( type == 'facebook' ) {
    openWindow('http://www.facebook.com/sharer.php?u=' + url,400,750);
  }
  return false;
}
//Twitter popup window
function openWindow(url, width, height) {
  window.open(url,"_blank","height="+height+",width="+width);
  return false;
}
$(".twitter").on("click", function(e) {
  e.preventDefault();
  openWindow($(this).attr("href"),650,400);
});
// Close colapsed menu on click away
$(document).on('click',function(){
  $('.collapse').collapse('hide');
});
$('#bond li').click(function() {
  $('#watershedFilter').show();
});
