
function gbblink(){
	var gb=document.getElementById("gb");
	x=gb.style.left;
	y=gb.style.top;
	if(	gb.style.visibility=="visible")
	gb.style.visibility="hidden";
	else
	gb.style.visibility="visible";
}
window.onload=function() {
	setInterval("gbblink()",500);
	setTimeout("start()",2000);
}

function start(){
	
	s=setInterval("showInfo()",20);
}
var s;
var num=0;
var infos=new String(
	"#姓名：周壮"+"##"+
	"性别：男"+"##"+
	"年龄：21"+"##"+
	"爱好：看电视、上网、有趣的人和事"+"##"+
"   ﹎ ┈ ┈ .o┈ ﹎  ﹎.. ○"+"#"+
"﹎┈﹎ ●&emsp;○ .﹎ ﹎o▂▃▅▆"+"#"+
"┈ ┈ /█\\/▓\\ ﹎ ┈ ﹎﹎ ┈ ﹎"+"#"+
"▅▆▇█████▇▆▅▃▂┈﹎"+"#"+"█&emsp;&emsp;█&emsp;&emsp;█"+"#"+
"███████████████████████████████"+"#"+
"█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;████&emsp;&emsp;&emsp;█&emsp;██████&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█"+"#"+
"█&emsp;█████&emsp;██&emsp;&emsp;██&emsp;&emsp;██&emsp;██&emsp;█&emsp;█████&emsp;█"+"#"+
"█&emsp;█&emsp;&emsp;&emsp;█&emsp;█████&emsp;&emsp;█&emsp;████&emsp;█&emsp;█&emsp;&emsp;&emsp;█&emsp;█"+"#"+
"█&emsp;█&emsp;&emsp;&emsp;█&emsp;█&emsp;███&emsp;&emsp;██&emsp;&emsp;&emsp;&emsp;██&emsp;█&emsp;&emsp;&emsp;█&emsp;█"+"#"+
"█&emsp;█&emsp;&emsp;&emsp;█&emsp;█&emsp;&emsp;█████&emsp;&emsp;█████&emsp;█&emsp;&emsp;&emsp;█&emsp;█"+"#"+
"█&emsp;█████&emsp;████&emsp;&emsp;█&emsp;█&emsp;█&emsp;&emsp;&emsp;█&emsp;█████&emsp;█"+"#"+
"█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;█&emsp;█&emsp;█&emsp;█&emsp;█&emsp;█&emsp;█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█"+"#"+
"███████████&emsp;&emsp;█████&emsp;█&emsp;&emsp;█████████"+"#"+
"█&emsp;&emsp;███&emsp;&emsp;&emsp;█&emsp;█&emsp;██&emsp;██&emsp;██&emsp;███&emsp;&emsp;████"+"#"+
"███&emsp;&emsp;█&emsp;█&emsp;&emsp;&emsp;██&emsp;██&emsp;&emsp;█&emsp;&emsp;&emsp;██&emsp;&emsp;█&emsp;&emsp;██"+"#"+
"█&emsp;&emsp;████&emsp;███&emsp;██&emsp;&emsp;███&emsp;██&emsp;&emsp;&emsp;██████"+"#"+
"███&emsp;█&emsp;&emsp;█&emsp;&emsp;&emsp;██&emsp;&emsp;██&emsp;███████&emsp;█████"+"#"+
"███&emsp;&emsp;█&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;&emsp;█&emsp;&emsp;█&emsp;&emsp;&emsp;&emsp;█&emsp;&emsp;████&emsp;█"+"#"+
"███&emsp;█&emsp;&emsp;█&emsp;██████&emsp;&emsp;&emsp;█&emsp;&emsp;██&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;█"+"#"+
"███&emsp;█&emsp;█&emsp;&emsp;██&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;█&emsp;█&emsp;&emsp;█&emsp;&emsp;█&emsp;███"+"#"+
"█&emsp;&emsp;&emsp;█&emsp;&emsp;█████&emsp;███&emsp;&emsp;&emsp;&emsp;██&emsp;&emsp;&emsp;&emsp;█&emsp;█&emsp;█"+"#"+
"█&emsp;&emsp;█&emsp;&emsp;█&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;&emsp;█████&emsp;██████&emsp;███"+"#"+
"█&emsp;&emsp;██&emsp;███&emsp;███&emsp;██&emsp;█&emsp;█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█"+"#"+
"█&emsp;&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;&emsp;██&emsp;&emsp;██&emsp;█&emsp;&emsp;&emsp;██&emsp;█████&emsp;█"+"#"+
"█&emsp;██&emsp;&emsp;███&emsp;&emsp;█&emsp;████&emsp;██&emsp;&emsp;██&emsp;&emsp;█████"+"#"+
"█&emsp;█&emsp;█&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;██&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;█"+"#"+
"█████████&emsp;█&emsp;███&emsp;&emsp;&emsp;███&emsp;███&emsp;&emsp;████"+"#"+
"█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;██&emsp;&emsp;&emsp;█&emsp;█&emsp;█&emsp;&emsp;█&emsp;█&emsp;&emsp;&emsp;███"+"#"+
"█&emsp;█████&emsp;█&emsp;█&emsp;█&emsp;███&emsp;&emsp;&emsp;&emsp;&emsp;███&emsp;&emsp;█&emsp;&emsp;█"+"#"+
"█&emsp;█&emsp;&emsp;&emsp;█&emsp;██&emsp;&emsp;█&emsp;&emsp;&emsp;█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;██&emsp;&emsp;█"+"#"+
"█&emsp;█&emsp;&emsp;&emsp;█&emsp;██&emsp;&emsp;█&emsp;████&emsp;█&emsp;&emsp;██&emsp;█&emsp;█&emsp;██"+"#"+
"█&emsp;█&emsp;&emsp;&emsp;█&emsp;██&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;█████&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;██"+"#"+
"█&emsp;█████&emsp;█&emsp;█&emsp;&emsp;██&emsp;█&emsp;████&emsp;████&emsp;█&emsp;█"+"#"+
"█&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;█&emsp;██&emsp;&emsp;&emsp;█████&emsp;█&emsp;&emsp;&emsp;██&emsp;███"+"#"+
"███████████████████████████████"




//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@@@@&&&&@@@@@@&&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@&&&&&&&&&$&@@@@@&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@&&&&&|:::';$@&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@@$%$!''''';%&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@@@@@&&$$%|%%|;';%&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@&&&&&&&&!';!!;;::|&&$$$$$&&&&&@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@&&&&$$$$&&&&%!%&%;:!$$$$%$$&&&&@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@&&$%%%$$&$;`'|$$|':|$$$$$$&&&@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@&&&$%|%$$&$!::;:''';%$$$$$&&&&@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@&$%||%$$&%;'''''`:|$$$$$$&&&&&@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@&$|!||$$&%:''``'|&&&$$$%$$&&&&&&@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@&%|!!!|%$$;''`:%&&&&$$$%%$$&&&&&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@&&%|!!!!|%$!''';%&&&$$$$$$$&&&&&&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@&$$|!!!!||||;``':!$$$$$$$&&&&&&&&&&&@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&$%||||||%%|:`````'!%%$$$&&&&&&&&&@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&$%%%%%||%%|:````'``''':;|$&&&&&&&@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@&&$%$$$$%%||%%|::::::;;;;;!||%$&&&&&@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&$$$$$$%|||%%!''':::::;!!|||%$$&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&$$$$$$$$%|||%%|:':;!!||%||%%$$$&&&&&@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&&$$&&$$&$$%$$&%:'''''':!|%$$$&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&%:'''';!|%%$$&&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&$!:;|$&$$%$$&&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$$&&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&@@&&@&&&&&@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&@@&&@@@&@@@@@@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@&@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@&&@@@@&&&&@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&@&&&&&@@&&&&&@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@&@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@&"+"#"+
//"@@@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@&"	
);
var str="";
function showInfo(){
	var info=document.getElementById("info");
	if(num>=infos.length)
	{
		window.clearInterval(s);
		return;
	}
	var c=infos.charAt(num);
	num++;
	if(c=="#"){
		str+="<br/>";
		br();		
	}
	else
		str+=c;
	moveRight();
	info.innerHTML=str;
}
var leftnum=0;//left变化次数
var topnum=0;//top变化次数
function moveRight(){
	leftnum++;
	var gb=document.getElementById("gb");
	gb.style.left=7+16*(leftnum-1)+"px";
}
function br(){
	leftnum=0;
	topnum++;
	var gb=document.getElementById("gb");
	gb.style.top=18+18+75+18*topnum+"px";
}
