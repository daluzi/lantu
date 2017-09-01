var banr1_1 = document.getElementById("banr1-1"),
	banr1_2 = document.getElementById("banr1-2"),
	banr1_3 = document.getElementById("banr1-3"),
	banr1_0 = document.getElementById("banr1-0");
var banr1_tab = document.getElementsByClassName("banr1-tab")[0];
var banr1_tabli = banr1_tab.getElementsByTagName('li');
var banr = [banr1_0,banr1_1,banr1_2,banr1_3];
var i = 1;
var j = 0;
setInterval(function(){
	banr[i-1].style.display = "none";
	banr[i].style.display = "block";
	i++;
	if (i == 4) {
		i = 1;
		setTimeout(function(){
			banr1_3.style.display = "none";
		},3000);
	}
},3000);
setInterval(function(){
	if((j-1) >= 0){
		banr1_tabli[j-1].removeAttribute("class","on");
		banr1_tabli[j].setAttribute("class","on");
		j++;
		if (j == 3) {
			j = 0;
			setTimeout(function(){
				banr1_tabli[2].removeAttribute("class","on");
			},3000)
		}
	}else{
		banr1_tabli[0].setAttribute("class","on");
		j++;
	}
},3000);

var mUl = document.querySelector("#cmainul");
var mLi = mUl.getElementsByTagName('li');
var tUl = document.querySelector("#ctabul");
var tLi = tUl.getElementsByTagName("li");
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];

var W = mUl.offsetWidth;
var content = document.querySelector(".c-main").offsetWidth;
var I = 4,J = 4;
left.addEventListener("click",function(){
	var index = 4;
	var h,
		lh,
		rrh,
		rh;
	h = mLi[index].className;
	lh = mLi[index-1].className;
	rrh = mLi[index+2].className;
	rh = mLi[index+1].className;

	mLi[index-2].className = lh;
	mLi[index-1].className = h;
	mLi[index].className = rh;
	mLi[index+1].className = rrh; 

	var c;
	c = mLi[8];
	mUl.insertBefore(c,mUl.children[0]);
	Array.prototype.forEach.call(mLi,function(el){
		el.style.transform = "translate("+0+"px,-50%)";
		el.style.transitionDuration = "1s";
	});

	index--;
	if (index == 2) {
		index = 5;
	}

	if(I > 0 && I <= 8){
		var tc = null;
		tc = tLi[I].className;
		tLi[I].className = tLi[I-1].className;
		tLi[I-1].className = tc;
		I--;
	}else{
		tLi[0].className = null;
		tLi[8].className = "on";
		I = 8;
	}
	
	
});
right.addEventListener("click",function(){
	var index = 4;
	var h,
		rh,
		llh,
		lh;
	h = mLi[index].className;
	rh = mLi[index+1].className;
	llh = mLi[index-2].className;
	lh = mLi[index-1].className;

	mLi[index+2].className = rh;
	mLi[index+1].className = h;
	mLi[index].className = lh;
	mLi[index-1].className = llh; 

	var c;
	c = mLi[0];
	mUl.appendChild(c);
	Array.prototype.forEach.call(mLi,function(el){
		el.style.transform = "translate("+0+"px,-50%)";
		el.style.transitionDuration = "1s";
	});

	index++;
	if (index == 6) {
		index = 2;
	}

	if(I >= 0 && I < 8){
		var tc = null;
		tc = tLi[I].className;
		tLi[I].className = tLi[I+1].className;
		tLi[I+1].className = tc;
		I++;
	}else{
		tLi[8].className = null;
		tLi[0].className = "on";
		I = 0;
	}
});
