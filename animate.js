    var box = document.getElementById('box');
    var slider = document.getElementById('slider');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var oNavlist = document.getElementById('nav').children;
    var index = 1; //打开页面生效的图片的下标为1
    var timer;
    var isMoving = false;
    var select=document.getElementById('select');
    var jine=document.getElementById("jine");
    function chongzhi(that){
      console.log(that.value);
      jine.innerHTML="￥"+that.value;
    }

    box.onmouseover = function (){
      animate(left, {
        opacity: 0.6
      })
      animate(right, {
        opacity: 0.6
      })
      clearInterval(timer); //图片停止滚动
    }
    box.onmouseout = function () {
      animate(left, {
        opacity: 0
      })
      animate(right, {
        opacity: 0
      })
      timer = setInterval(next, 2000); //图片开始接着滚动
    }
    right.onclick = next;
    left.onclick = prev;

    function next() {
      if (isMoving) {
        return;
      }
      isMoving = true;
      index++;
      navmove();
      animate(slider, {
        left: -808 * index
      }, function () {
        if (index == 7) {
          slider.style.left = '-808px';
          index = 1;
        }
        isMoving = false;
      });
    }

    function prev() {
      if (isMoving) {
        return;
      }
      isMoving = true;
      index--;
      navmove();
      animate(slider, {
        left: -808 * index
      }, function () {
        if (index == 0) {
          slider.style.left = '-4848px';
          index = 6;
        }
        isMoving = false;
      });
    }
    //按钮点击切换事件
    for (var i = 0; i < oNavlist.length; i++) {
      oNavlist[i].index = i;
      oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(slider, {
          left: -808 * index
        });
      }

    }
    //图片切换时按钮样式跟着切换
    function navmove() {
      for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
      }
      if (index > 6) {
        oNavlist[0].className = "active";
      } else if (index <= 0) {
        oNavlist[5].className = "active";
      } else {
        oNavlist[index - 1].className = "active";
      }
    }
    //页面打开时自动滚动切换
    timer = setInterval(next, 3000);


    
    window.onload=function(){
      var cover=document.getElementsByClassName("out")[0];
      window.onscroll=function(){
        var st=document.documentElement.scrollTop || document.body.srollTop;
        if(st>180){
          cover.style.position='fixed'
        }else{
          cover.style.position='static'
        }
        }
    }

     var ul = document.getElementById("ul");
        console.log(ul.getBoundingClientRect())
        console.log(ul.offsetHeight)
        console.log(ul.offsetTop)
        function show() {
            var top = ul.offsetTop - 1;
            ul.style.top = top + "px"; 
            if (-1 * ul.offsetTop >=(ul.offsetHeight *13/ 24) ){
                ul.style.top = 0;
            }
        }
        var t = setInterval(show, 20);
        var li = document.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].onmouseout = function () {
                t = setInterval(show, 20);
            };
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }
function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }

  var xuan = document.getElementsByClassName('guding')[0].children[0].children;
  var ewei = document.getElementsByClassName("ewei")[0];
  for(var erwei = 0; erwei<4; erwei++){
       (function (erwei){
           xuan[erwei].onmouseover = function (){
          buffer(xuan[erwei],{right:-20});
          if(erwei==2){
            ewei.src = 'img/erwei.png';
            ewei.style.marginTop="0px";
          }
        }
        xuan[erwei].onmouseout = function (){
          buffer(xuan[erwei],{right:-95});
          if(erwei==2){
            ewei.src = 'img/serwei.png';
            ewei.style.marginTop="45px";
          }
        }
      }(erwei))
    }


    function buffer(obj,json,fn){
      clearInterval(obj.timer);
      obj.timer=setInterval(function (){
        var flag = true;
        for(var i in json){
          if(i === 'opacity'){
            var target = parseInt(parseFloat(json[i])*100);
            var loc = parseInt(parseFloat(getStyle(obj,i))*100)||100;
          }else if(i ==='scrollTop'){
            loc = Math.ceil(obj.scrollTop);
            target = parseInt(json[i]);

          }else{
            var target = json[i];
            var loc = parseInt(getStyle(obj,i))||0;
          }
          var speed = (target-loc)*0.2;
          speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

          if(i === 'opacity'){
            obj.style.opacity = (loc+speed)/100;
            obj.style.filter="alpha(opacity:"+(loc+speed)+")";
          }else{
            obj.style[i] =loc+speed+'px';
          }
          if(loc!==target){
            flag = false;
          }
        }
        if(flag){
          clearInterval(obj.timer);
          if(fn){
            fn();
          }
        }
      },20);
    }

