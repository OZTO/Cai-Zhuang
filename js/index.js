function lunbo1(){
		
	var lunbo1=document.getElementById("lunbo1");
	var mytupianLis=document.getElementById("lunbo1").getElementsByTagName("li");
	
	var timer=0;
	var nowimg=0;
	timer=window.setInterval(function(){
		if (nowimg < mytupianLis.length - 1) { 
			nowimg++; 
		} else {
			nowimg = 0;
		}
		//换图
		huantu();
	},1000);
	

	function huantu(){
		for (var i = 0; i < mytupianLis.length; i++) {
			mytupianLis[i].className = "";
		}
		//某一个显示
		mytupianLis[nowimg].className = "cur";
	}
	
}



function lunbo2(){
		
	var lunbo1=document.getElementById("lunbo2");
	var mytupianLis=document.getElementById("lunbo2").getElementsByTagName("li");
	
	var timer=0;
	var nowimg=0;
	timer=window.setInterval(function(){
		if (nowimg < mytupianLis.length - 1) { 
			nowimg++; 
		} else {
			nowimg = 0;
		}
		//换图
		huantu();
	},1000);
	

	function huantu(){
		for (var i = 0; i < mytupianLis.length; i++) {
			mytupianLis[i].className = "";
		}
		//某一个显示
		mytupianLis[nowimg].className = "caicur";
	}
	
}




function lunbo3(){
		
	var lunbo1=document.getElementById("lunbo3");
	var mytupianLis=document.getElementById("lunbo3").getElementsByTagName("li");
	
	var timer=0;
	var nowimg=0;
	timer=window.setInterval(function(){
		if (nowimg < mytupianLis.length - 1) { 
			nowimg++; 
		} else {
			nowimg = 0;
		}
		//换图
		huantu();
	},1000);
	

	function huantu(){
		for (var i = 0; i < mytupianLis.length; i++) {
			mytupianLis[i].className = "";
		}
		//某一个显示
		mytupianLis[nowimg].className = "lunbocur";
	}
	
}
