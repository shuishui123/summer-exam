// 传入参数包裹图片div的class和页数list的li
function sli(img, li) {
  var flag = 0;
  var pic = $(img);
  var sign = $(li);
  var num = pic.length;
  var width = pic[0].offsetWidth;
  pic[0].style.left = 0 + "rem";
  pic[1].style.left = 640 / 64 + "rem";
  pic[2].style.left = 1280 / 64 + "rem";
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