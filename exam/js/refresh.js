;(function() {
  var screenh = document.documentElement.clientHeight||document.body.clientHeight;
  window.addEventListener('scroll', function() {
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop >= screenh){
      location.reload();
    }
    return scrollTop;
  })

}());
  