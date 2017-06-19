Array.prototype.indexOf = function(val) {
for (var i = 0; i < this.length; i++) {
if (this[i] == val) return i;
}
return -1;
};
Array.prototype.remove = function(val) {
var index = this.indexOf(val);
if (index > -1) {
this.splice(index, 1);
}
};
var roleList=new Array();
var monkey;
var alien;
var canvas;
var zzsakura;
var anum=14;
function Role(){
	var role=new Object();
	role.x=500;
	role.y=320;
	role.state=0;//0静止 1移动 2攻击 3死亡
	role.hp=100;
	role.speed=5;
	role.moveState=0;
	role.imgs=new Array();
	role.img=null;
	role.enable=true;
	role.targetX=role.x;
	role.targetY=role.y;
	role.actionNum=0;
	role.dx=0;
	role.dy=0;
	role.direction=3;
	role.refresh=function(){
		//console.log("未定义刷新！")
		};
	role.realMove=function(){
		 this.x =  this.x +  this.dx;
		 this.y =  this.y +  this.dy;
	}
	role.setAngle=function(x,y){
		var a=y-this.y;
		var b=x-this.x;
		var angle=Math.atan(a/b);
		this.dx=this.speed*Math.cos(angle)*(b>0? 1:-1);
		this.dy=Math.abs(this.speed*Math.sin(angle))*(a>0? 1:-1);
	}
	role.moveTo=function(x,y){
		this.state=1;
		this.targetX=x;
		this.targetY=y;
		var a=x-this.x;
		var b=y-this.y;
		var lengh=Math.sqrt(a*a+b*b);
		this.actionNum=lengh/this.speed;
		this.setAngle(x,y);
	}
	role.canvas=document.createElement('canvas');
	role.canvas.width=100; 
	role.canvas.height=100;
	role.cxt=role.canvas.getContext("2d");
	return role;
}
function alien(){
	var alien=new Role();
	alien.x=600;
	alien.y=100;	
	//alien.state=1;
	alien.canvas.width=110; 
	alien.canvas.height=110;
	alien.direction=1;
	for (i=1;i<=4;i++)
	{
	var img=new Image();
	img.src="img/alien/"+i+".png";
	img.style.transform ='rotate(100deg)';
	alien.imgs.push(img);
	}
	alien.img=alien.imgs[0];
	alien.refresh=function(){

		switch(this.state){
			case 0://静止
				//this.moveState=0;
				//this.img=this.imgs[this.moveState];
				if(this.moveState>3*anum)
					this.moveState=0;
				if(this.moveState%anum==0)
				this.img=this.imgs[this.moveState/anum];
				this.moveState++;
				//继续移动
				if((this.actionNum<=0)&&(Math.floor(Math.random()*1000)>=90))
					this.moveTo(Math.floor(Math.random()*1200),Math.floor(Math.random()*300));
				//调整方向
				if((this.dx>0)&&(this.direction==1)){
					this.cxt.transform(-1,0,0,1,100,0);
					this.direction=3;
				}else if((this.dx<0)&&(this.direction=3)){
					this.cxt.transform(-1,0,0,1,100,0);
					this.direction=1;
				}
				break;
			case 1://运动
				if(this.actionNum>0){
					if(this.moveState>=3*anum)
						this.moveState=0;
					if(this.moveState%anum==0)
					this.img=this.imgs[this.moveState/anum];
					this.moveState++;
					this.realMove();
					this.actionNum--;
				}else{
					this.x=this.targetX;
					this.y=this.targetY;
					this.state=0;
				}
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
			this.cxt.clearRect(0,0,110,110);
			this.cxt.drawImage(this.img,-5,0);
	}
	alien.attack=function(){
		
	}
	return alien;
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
				if(this.actionNum>0){
					if(this.moveState>=3*anum)
						this.moveState=0;
					if(this.moveState%anum==0)
					this.img=this.imgs[this.moveState/anum];
					this.moveState++;
					this.realMove();
					this.actionNum--;
				}else{
					this.x=this.targetX;
					this.y=this.targetY;
					this.state=0;
				}
					
				break;
			case 2://攻击
				if(this.moveState>=8*anum){	
					this.state=0;
				}
				if(this.moveState==5*anum)
					roleList.push(new Banana(this));
				if(this.moveState%anum==0)
				this.img=this.imgs[3+this.moveState/anum];
				this.moveState++;
				break;
		}

			this.cxt.fillStyle="#ffffff";
			this.cxt.clearRect(0,0,100,100);
			this.cxt.drawImage(this.img,20,20);
	}
	monkey.realMove=function(){
		 this.x =  this.x +  this.dx;
	}
	monkey.attack=function(){
		
		if(this.state!=2){
			this.state=2;
			this.moveState=0;
			if(this.dx>0&&this.direction==3){
					this.cxt.transform(-1,0,0,1,100,0);
					this.direction=1;
			}
			else if(this.dx<0&&this.direction==1){
					this.cxt.transform(-1,0,0,1,100,0);
					this.direction=3;
			}
		}
		
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
	banana.state=1;
	banana.speed=anum;
	banana.y=monkey.y;
	banana.x=monkey.dx<0? monkey.x-50:monkey.x+50;
	banana.dx=monkey.dx;
	banana.dy=monkey.dy;	
	
	if(monkey.dx>0)
		banana.cxt.transform(-1,0,0,1,100-1,0);
	//banana.cxt.transform(Math.cos(banana.angle*Math.PI/180),Math.sin(banana.angle*Math.PI/180),-Math.sin(banana.angle*Math.PI/180),Math.cos(banana.angle*Math.PI/180),0,0)
	//banana.cxt.transform(0.70710678118655,0.70710678118655,-0.70710678118655,0.70710678118655,0,0);
	banana.refresh=function(){
			
			switch(this.state){
			case 0://静止
				this.moveState=0;
				this.img=this.imgs[this.moveState];
				break;
			case 1://运动
				this.moveState=0;
				this.img=this.imgs[this.moveState];
				this.realMove();
				if(isTouch(this,alien)){
					this.state=3;
					alien.state=3;
					show();
				}
				break;
			case 3://死亡
				if(this.moveState/anum>=5){
					roleList.remove(this);
				}
				if(this.moveState%anum==0)
					this.img=this.imgs[this.moveState/anum];
				this.moveState++;
				break;
			}
				this.cxt.fillStyle="#ffffff";
				this.cxt.clearRect(0,0,100,100);
				this.cxt.drawImage(this.img,50-this.img.width/2,50-this.img.height/2);
				
	}
	return banana;
}
function isTouch(a,b){
	var m=a.x-b.x;
	var n=a.y-b.y;
	
	if(m*m+n*n<=1600){
		return true;
	}else{
		return false;
	}
}

function show(){
	var h=(screen.availHeight-500)/2;
	var w=(screen.availWidth-800)/2;
	window.open("html/info.html","","height=500, width=800,top="+h+",left="+w+", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}

function main(){
	for (var i = 0; i <roleList.length; i++) {
		roleList[i].refresh();
	}
	draw();
}

function init(){
	canvas=document.getElementById("myCanvas");
	monkey=new Monkey();
	alien=new alien();
	roleList.push(monkey);
	roleList.push(alien);

	zzsakura=new Image();
	zzsakura.src="img/sakura.png";
	
		
	/*canvas.onmousemove=function(e){
		var x=e.clientX-100;
		var y=e.clientY-70;
		//for (var i = 0; i <roleList.length; i++) {
		//	roleList[i].moveTo(x,y);
		//}
		//roleList.push(new Banana());
		//monkey.attack();
		//alien.moveTo(x,y);
		monkey.setAngle(x,y);
	}*/
	canvas.onmousedown=function(e){
		var x=e.clientX-100;
		var y=e.clientY-70;
		monkey.setAngle(x,y);
		monkey.attack();
	}
}
function draw(){
	var cxt=canvas.getContext("2d");
	cxt.fillStyle="#ffffff";
	cxt.fillRect(0,0,1552,780);
	cxt.drawImage(zzsakura,0,-250,1500,650);
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
	window.setInterval(main,16);
}
//显示名片
function show(){
	var h=(screen.availHeight-500)/2;
	var w=(screen.availWidth-800)/2;
	window.open("html/info.html","","height=500, width=800,top="+h+",left="+w+", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}
window.onkeydown=function(event){
   var code = event.keyCode;
   switch(code){
	case 37:
			if(monkey.direction==1){
					monkey.cxt.transform(-1,0,0,1,100,0);
					monkey.direction=3;
			}
			monkey.moveTo(0,monkey.y);
		break;
	case 39:
			if(monkey.direction==3){
					monkey.cxt.transform(-1,0,0,1,100,0);
					monkey.direction=1;
			}
		monkey.moveTo(1200,monkey.y);
		break;
	case 32:
		monkey.attack();
		break;
		
   }
 }

window.onload=start;