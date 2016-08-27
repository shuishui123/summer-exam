;(function() {
    var home = document.querySelector('.home');
    var menu = document.querySelector('.menu');
    var homeDown = document.querySelector('.down');
    var menuUp = document.querySelector('.up');
    var switchTags = document.querySelectorAll('.switch-tags span');
    var num = switchTags.length;

    homeDown.addEventListener('click',function() {
        home.style.display = "none";
        menu.style.display = "block";
    })
    menuUp.addEventListener('click',function() {
        home.style.display = "block";
        menu.style.display = "none";
    })
    for(var i = 0; i < num; i++) {
        switchTags[i].addEventListener('click', function() {
            home.style.display = "block";
            menu.style.display = "none";
        })
    }    
}());
