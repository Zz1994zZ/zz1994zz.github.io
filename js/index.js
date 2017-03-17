var roleList=new Array();
var monkey;
var alien;
var canvas;
var sakura;
function Role(){
	var role=new Object();
	role.x=500;
	role.y=320;
	role.state=0;//0静止 1移动 2攻击
	role.direction=3;//     0上
//						 3左边   	1右  
//                          2下
	role.hp=100;
	role.speed=20;
	role.moveState=0;
	role.imgs=new Array();
	role.img=null;
	role.enable=true;
	role.angle=0;//角度
	role.setAngle=function(x,y){
		//console.log("未定义设置角度！~");
	}
	role.refresh=function(){
		//console.log("未定义刷新！")
		};
	role.realMove=function(){
		switch(role.direction){
		   case 3:
			  //role.imgState=roleLeft;
			  role.x =  role.x -  role.speed;
			  break;
		   case 0:
			   //role.imgState=roleUp;
			   role.y =  role.y -  role.speed;
			  break;
		   case 1:
			  //role.imgState=roleRight;
			   role.x =  role.x +  role.speed;
			  break;
		   case 2:
			  //role.imgState=roleDown;
			  role.y =  role.y +  role.speed;
			  break;
		}
	}
	role.canvas=document.createElement('canvas');
	role.canvas.width=100; 
	role.canvas.height=100;
	role.cxt=role.canvas.getContext("2d");
	return role;
}
function Monkey(){
	var monkey=new Role();
	for (i=1;i<=12;i++)
	{
	var img=new Image();
	img.src="img/monkey/"+i+".png";
	img.style.transform ='rotate(100deg)';
	monkey.imgs.push(img);
	}
	monkey.img=monkey.imgs[0];
	monkey.refresh=function(){

		switch(this.state){
			case 0://静止
				this.moveState=0;
				this.img=this.imgs[this.moveState];
				break;
			case 1://运动
				if(this.moveState>=3)
					this.moveState=0;
				this.img=this.imgs[this.moveState];
				this.moveState++;
				this.realMove();
				break;
			case 2://攻击
				if(this.moveState>=8){	
					this.state=0;
				}
				if(this.moveState==5)
					roleList.push(new Banana(this));
				this.img=this.imgs[3+this.moveState];
				this.moveState++;
				break;
		}

			this.cxt.fillStyle="#ffffff";
			this.cxt.clearRect(0,0,100,100);
			this.cxt.drawImage(this.img,20,20);
	}
	monkey.attack=function(){
		if(this.state!=2){
			this.state=2;
			this.moveState=0;
			if(this.angle>0){
				if(this.direction!=3)
					this.cxt.transform(-1,0,0,1,100,0);
				this.direction=3;
			}
			else {
				if(this.direction!=1)
					this.cxt.transform(-1,0,0,1,100,0);
				this.direction=1;
			}
		}
		
	}
	monkey.setAngle=function(x,y){
		this.angle=(y-this.y-50)/(x-this.x-50);
		//console.log("monkey设置角度"+this.angle);
	}
	
	return monkey;
}
function Banana(monkey){
	var banana=new Role();
	for (i=13;i<=18;i++)
	{
	var img=new Image();
	img.src="img/monkey/"+i+".png";
	banana.imgs.push(img);
	}
	banana.realMove=function(){
		var a=this.angle>0 ? 1:-1;
		this.x =  this.x +  this.speed*(-a);
		this.y =  this.y +  this.speed*this.angle*(-a);
		
	}
	banana.refresh=function(){
			
				if(this.moveState>=1){
					this.moveState=0;
				}
				this.img=this.imgs[this.moveState];
				this.moveState++;
				this.realMove();
				this.cxt.fillStyle="#ffffff";
				this.cxt.clearRect(0,0,100,100);
				this.cxt.drawImage(this.img,50-this.img.width/2,50-this.img.height/2);
				
	}
	banana.direction=monkey.direction;
	banana.speed=50;
	banana.y=monkey.y;
	banana.x=monkey.direction==3? monkey.x-50:monkey.x+50;
	banana.angle=monkey.angle;
	if(banana.direction==1)
		banana.cxt.transform(-1,0,0,1,100-1,0);
	//banana.cxt.transform(Math.cos(banana.angle*Math.PI/180),Math.sin(banana.angle*Math.PI/180),-Math.sin(banana.angle*Math.PI/180),Math.cos(banana.angle*Math.PI/180),0,0)
	//banana.cxt.transform(0.70710678118655,0.70710678118655,-0.70710678118655,0.70710678118655,0,0);
	return banana;
}

function show(){
	var h=(screen.availHeight-500)/2;
	var w=(screen.availWidth-800)/2;
	window.open("html/info.html","","height=500, width=800,top="+h+",left="+w+", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}
function startMainThread(){
	window.setInterval(main,200);
}
function main(){
	for (var i = 0; i <roleList.length; i++) {
		roleList[i].refresh();
	}
}

function init(){
	canvas=document.getElementById("myCanvas");
	monkey=new Monkey();
	roleList.push(monkey);
	canvas.onmousemove=function(e){
		var x=e.clientX;
		var y=e.clientY;
		for (var i = 0; i <roleList.length; i++) {
			roleList[i].setAngle(x,y);
		}
		//roleList.push(new Banana());
		monkey.attack();
	}
	sakura=new Image();
	sakura.src="img/sakura.png";
	
}
function draw(){
	var cxt=canvas.getContext("2d");
	cxt.fillStyle="#ffffff";
	cxt.fillRect(0,0,1552,780);
	cxt.drawImage(sakura,0,-250,1500,650);
//	cxt.drawImage(role.img,role.x,role.y);
	for (var i = 0; i <roleList.length; i++) {
		var role=roleList[i];
		if(role.enable)
			drawRole(role,cxt);
	}
	
	cxt.fillStyle="#FF0000";
	cxt.moveTo(0,760);
	cxt.lineTo(1862,650);
	cxt.fill();//填充
	cxt.stroke();//画线
}
function drawRole(player,cxt){
	cxt.drawImage(player.canvas,player.x,player.y);
}
function start(){
	init();
	window.setInterval(draw,200);
	startMainThread();
}
function move(code,role){
		role.state=1;
	    switch(code)
	    {
		   case 37:
			  if(role.direction==1)
				role.cxt.transform(-1,0,0,1,100,0);//TODO无法记录
		      role.direction=3;
			  break;
		   case 38:
		      role.direction=0;
			  break;
		   case 39:
		    if(role.direction==3)
				role.cxt.transform(-1,0,0,1,100,0);
		     role.direction=1;
			  break;
		   case 40:
		      role.direction=2;
			  break;
		} 
}
window.onkeydown=function(event){
   var code = event.keyCode;
   //if(code >=37&&code<= 40){
   //   move(code,monkey);
	if(code ==37 || code== 39){
      move(code,monkey); 	  
   }else if(code ==32){
	  monkey.attack();
   }
 }
function stop(code,role){
	var ct=-1;
	    switch(code)
	    {
		   case 37:
		     ct=3;
			  break;
		   case 38:
		      ct=0;
			  break;
		   case 39:
		     ct=1;
			  break;
		   case 40:
		     ct=2;
			  break;
		} 
		if(role.direction==ct){
			role.state=0;
			role.moveState=0;		
		}
}
window.onload=start;