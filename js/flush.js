
        //图片数组
        var imgNumber = [];
        //20160815添加动画效果
        imgNumber[1] = "zz";
		imgNumber[2] = "monkey";
		imgNumber[3] = "syz";
		
        //定时执行
        window.setTimeout(aniFun, 1000);
        //当前图片序号
        var curNumber = 0;
        var f = "";
        var showOrHide = "";
        //动画效果
        function aniFun() {

            //添加图片闪烁效果
            showOrHideImage();
            window.setTimeout(aniDo, 500);
        }
        //图片闪烁效果
        function showOrHideImage() {
            //循环执行
            window.setTimeout(hideAllImage, 100);
            window.setTimeout(showAllImage, 200);
            //循环执行
            window.setTimeout(hideAllImage, 300);
            window.setTimeout(showAllImage, 400);
        }
        //执行动画
        function aniDo() {
            hideAllImage();
            curNumber = 0;
            //循环执行，
            f = window.setInterval(showImage, 500);
        }
        //隐藏所有图片
        function hideAllImage() {
            //隐藏所有图片
            for (var i = 1; i <= 3; i++) {
                if (typeof (document.getElementById(imgNumber[i])) != "undefined") {
                    document.getElementById(imgNumber[i]).style.display = "none";
                }
            }
        }
        //显示所有图片
        function showAllImage() {
            //显示所有图片
            for (var i = 1; i <= 3; i++) {
                if (typeof (document.getElementById(imgNumber[i])) != "undefined") {
                    document.getElementById(imgNumber[i]).style.display = "block";
                }
            }
        }
        //显示逐个图片
        function showImage() {
            curNumber++;
            //显示逐个图片
            if (curNumber <= 3) {
                if (typeof (document.getElementById(imgNumber[curNumber])) != "undefined") {
                    document.getElementById(imgNumber[curNumber]).style.display = "block";
                }
            }
            else if (curNumber > 6) {
                window.clearInterval(f);
                aniFun();
            }
        } 


