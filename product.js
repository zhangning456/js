var tu = document.getElementById("tu");
var jinghanliang = document.getElementById("jinghanliang");

function hanliang(that){
	var ml = document.getElementById("ml");
	for(var i=0;i<2;i++){
		that.parentNode.children[i].style.background="none";
		that.parentNode.children[i].style.border="none";
	}
	that.style.background="url(img/duigou.png) no-repeat right bottom";
	that.style.border="1px #fe0d4a solid";
	ml.innerHTML=' "'+that.value+'"';
}
window.onload=function(){
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var slider = document.getElementById("slider");
	var Bimg = document.getElementById("Bimg");
	var bimg = document.getElementById("bimg");
	var chanpin = document.getElementsByClassName('chanpin');
	img1.onmouseover = function () {
		slider.style.display = 'block';
		img2.style.display = 'block';
	}
	img1.onmouseout = function () {
		slider.style.display = 'none';
		img2.style.display = 'none';
	}
	var st;
	window.onscroll=function(){
        st=document.documentElement.scrollTop || document.body.srollTop;
    }

	img1.onmousemove = function (ev) {
			var ev = ev || window.event;

			var oL = ev.clientX - chanpin[0].offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - chanpin[0].offsetTop - slider.offsetHeight / 2+st;

			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';

			var scale = img2.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL + 'px'
			Bimg.style.top = -scale * oT + 'px'
		}
	var simg = document.getElementsByClassName('simg');
	simg[0].onmouseover = function () {
		simg[1].style.background='white';
		simg[0].style.background ='#fe6c00';
		bimg.src='img/pp0.jpeg';
		Bimg.src='img/pp0.jpeg';
	}
	simg[1].onmouseover = function () {
		simg[0].style.background='white';
		simg[1].style.background ='#fe6c00';
		bimg.src='img/pp1.jpeg';
		Bimg.src='img/pp1.jpeg';
	}
	var buynum=document.getElementById("buynum");
	var num=document.getElementsByClassName('num');
	num[0].onclick=function(){
		if(buynum.value!=1){
			buynum.value--;
			num[1].style.cursor="pointer";
		}
		if(buynum.value==1){
			num[0].style.cursor="not-allowed";
		}

	}
	num[1].onclick=function(){
		if(buynum.value!=5){
			buynum.value++;
			num[0].style.cursor="pointer";
		}
		if(buynum.value==5){
			num[1].style.cursor="not-allowed";
		}
	}
	var tankuang=document.getElementById("guanbi");
	var tankuang=document.getElementById("tankuang");
	var but=document.getElementsByClassName("but");
	but[1].children[1].onclick=function(){
		tankuang.style.display="block";
	}
	but[0].children[0].onclick=function(){
		tankuang.style.display="none";
	}
	but[0].children[1].onclick=function(){
		tankuang.style.display="none";
	}
	guanbi.onclick=function(){
		tankuang.style.display="none";
	}


	var celan=document.getElementsByClassName('celan');

	celan[0].style.right="78px";
	
	
}
	