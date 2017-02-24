function changgeImg(type){
	var img=document.getElementById("myimg");
	if(type==0){
		img.src="img/tb2.bmp";
	}else if(type=1){
		img.src="img/tb.bmp";
	}
}
function show(){
	var h=(screen.availHeight-500)/2;
	var w=(screen.availWidth-800)/2;
	window.open("html/info.html","","height=500, width=800,top="+h+",left="+w+", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}
