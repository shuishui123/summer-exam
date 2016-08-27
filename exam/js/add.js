var btn = document.querySelectorAll('.add-tags button');


var len = btn.length;
for(var i = 0; i < len; i++) {
   btn[i].addEventListener('click',function() {
      insertEle(this.innerHTML);
    })

}

function insertEle(e) { 
    var oTest = document.querySelector('.switch-tags');
    var newSpan = document.createElement("span");
    var newA = document.createElement("a");
    
    newA.innerHTML =" " + e + " ";
    
    oTest.appendChild(newSpan);
    newSpan.appendChild(newA);
    
    var tagLen = document.querySelectorAll('.switch-tags a').length;
    console.log(tagLen);

    if(tagLen % 4 != 0) {
       var newShu = document.createElement("span");
       newShu.innerHTML =" " + "|" + " ";
       oTest.appendChild(newShu);
    }
    if(tagLen % 4 == 0) {
        var newHr = document.createElement("hr");
        oTest.appendChild(newHr);
    }
    // 点击回首页
    var home = document.querySelector('.home');
    var menu = document.querySelector('.menu');
    var switchTags = document.querySelectorAll('.switch-tags span');
    for(var i = 0; i < switchTags.length; i++) {
        switchTags[i].addEventListener('click', function() {
            home.style.display = "block";
            menu.style.display = "none";
        })
    }
    
}