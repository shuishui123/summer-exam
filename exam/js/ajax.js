// 新闻
;(function () {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET","/news?num=4",false);
    xmlhttp.send();
    callback(JSON.parse(xmlhttp.responseText));

    function callback(res) {
        console.log(res);
        var picBlock = document.querySelector('.sli-grey p');
        var picImg = document.querySelector('.pic-block');

        var newsImg = document.querySelectorAll('.news-block img');
        var newsTitle = document.querySelectorAll('.news-title');
        var newsDes = document.querySelectorAll('.news-des');
        var newsSub = document.querySelectorAll('.news-sub');
        var newsFol = document.querySelectorAll('.news-fol');
        var num = res.length;

        picBlock.innerHTML = res[0].title;
        picImg.innerHTML = res[0].type;
        picImg.style.backgroundColor = res[0].typeColor;

        for(var i = 0;i < num; i++) {
            newsImg[i].src = res[i].imgURL;
            newsTitle[i].innerHTML = res[i].title;
            newsDes[i].innerHTML = res[i].description;
            newsSub[i].innerHTML = res[i].type;
            newsSub[i].style.backgroundColor = res[i].typeColor;
            newsFol[i].innerHTML = res[i].post + "跟帖";
        }
    }
}());

// 轮播
;(function () {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET","/sliders" ,false);
    xmlhttp.send();
    callback(JSON.parse(xmlhttp.responseText));

    // 添加图片
    function callback(res) {
        console.log(res);
        // var silderBlock = document.querySelectorAll('.block img');
        // var num = res.length;
        // for(var i = 0; i < num; i++) {
        //     var
        //     silderBlock[i].src = res[i].imgURL;
        // }
        var sliderCon = document.querySelector('.slider');
        var sliderList = document.querySelector('#slider_list');
        var num = res.length;
        var liNum = 0
        for(var i = 0; i < num; i++) {
            var newDiv = document.createElement("div");
            newDiv.className = "block";
            var newLi = document.createElement("li");
            liNum++;
            newLi.innerHTML = liNum;
            sliderCon.appendChild(newDiv);
            sliderList.appendChild(newLi);
            var newImg = document.createElement("img");
            newImg.src = res[i].imgURL;
            newDiv.appendChild(newImg);
        }
    }

    // 轮播
    function sli(img, li) {
      var flag = 0;
      var pic = $(img);
      var sign = $(li);
      var num = pic.length;
      var width = pic[0].offsetWidth;
      for(var i = 0; i < num; i++) {
          pic[i].style.left = i * 640 / 64 + "rem";
            
      }
      sign[0].style.backgroundColor = '#515151';
      // 轮播函数
      var turn = function(value) {
        if(value != null) {
            flag = value - 2;
          }
        if(flag < num - 1) {
            flag++; 
          }
          else {
            flag = 0;
           
          }
          for(var j = 0; j < num; j++) {
            pic[j].style.left = (j - flag) * width + "px";
          }
          for(var i = 0; i < num; i ++) {
            sign[i].style.backgroundColor = '#9c9c9d';
          }
          sign[flag].style.backgroundColor = '#515151';
      }

      time = setInterval(turn,2000);

      // 控制当前页数
      for(var t = 0; t < num; t++) {
        sign[t].addEventListener('mouseover', function() {
          turn(this.innerHTML);
          clearInterval(time);
        })
        sign[t].addEventListener('mouseout', function() {
          time = setInterval(turn,2000);
        })

      }

      function $(id) {
        return document.querySelectorAll(id);
      }
    }


    // 调用
    sli(".block", "#slider_list li");
}());

// 标签
;(function () {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET",'/tags',false);
    xmlhttp.send();
    callback(JSON.parse(xmlhttp.responseText));

    function callback(res) {
        console.log(res);
        // 已添加的标签
        var oTest = document.querySelector('.switch-tags');
        var addedNum = res.added.length;
        for(var i = 0; i < addedNum; i++) {
            var newSpan = document.createElement("span");
            var newA = document.createElement("a");
            
            newA.innerHTML = res.added[i].name;
            
            oTest.appendChild(newSpan);
            newSpan.appendChild(newA); 
            var tagLen = document.querySelectorAll('.switch-tags a').length;
            console.log(tagLen);

            if(tagLen % 4 != 0) {
               var newShu = document.createElement("span");
               newShu.innerHTML ="|";
               oTest.appendChild(newShu);
            }
            if(tagLen % 4 == 0) {
                var newHr = document.createElement("hr");
                oTest.appendChild(newHr);
            }
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


        // 可选标签
        var addTags = document.querySelector(".add-tags");
        var avaliableNum = res.avaliable.length;
        for(var i = 0; i < avaliableNum; i++) {
            var newBtn = document.createElement("button");
            newBtn.innerHTML = res.avaliable[i].name;
            addTags.appendChild(newBtn);
        }
        // var added = document.querySelectorAll('.switch-tags a');
        // var avaliable = document.querySelectorAll('.add-tags button');
        // var addedNum = res.added.length;
        // var avaliableNum = res.avaliable.length;
        // // added[0].innerHTML = res.added[0].name;

        // for(var i = 0; i < addedNum; i++) {

        //     added[i].innerHTML = res.added[i].name;
        // }
        // for(var i = 0; i < avaliableNum; i++) {
        //     avaliable[i].innerHTML = res.avaliable[i].name;
        // }
    }
}());