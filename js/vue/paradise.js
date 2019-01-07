	/**************************************时间格式化处理************************************/
	function dateFtt(fmt,date)   
	{ //author: meizz   
	  var o = {   
		"M+" : date.getMonth()+1,                 //月份   
		"d+" : date.getDate(),                    //日   
		"h+" : date.getHours(),                   //小时   
		"m+" : date.getMinutes(),                 //分   
		"s+" : date.getSeconds(),                 //秒   
		"q+" : Math.floor((date.getMonth()+3)/3), //季度   
		"S"  : date.getMilliseconds()             //毫秒   
	  };   
	  if(/(y+)/.test(fmt))   
		fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
	  for(var k in o)   
		if(new RegExp("("+ k +")").test(fmt))   
	  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	  return fmt;   
	} 
		
	function printLog(title, info) {
	window.console && console.log(title, info);
	}

    // 初始化七牛上传
    function uploadInit() {
        // this 即 editor 对象
        var editor = this;
        // 触发选择文件的按钮的id
        var btnId = editor.customUploadBtnId;
        // 触发选择文件的按钮的父容器的id
        var containerId = editor.customUploadContainerId;

		var upToken=getUpToken();
        // 创建上传对象
        var uploader = Qiniu.uploader({
            runtimes: 'html5,flash,html4',    //上传模式,依次退化
            browse_button: btnId,       //上传选择的点选按钮，**必需**
            //uptoken_url: '/uptoken',
                //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
             //uptoken : 'CR-p7NcV5mTi1mIh40IS0qSl5R4-444J8kmaOC62:ZLo1N-4v0JVPUtwvT9C-Id0r2Xg=:eyJzY29wZSI6Inp6aW1nIiwiZGVhZGxpbmUiOjE1MDEyNzMyMDd9',
			 uptoken : upToken,
			 
                //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
            // unique_names: true,
                // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
            // save_key: true,
                // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
            domain: 'http://qiniu.withzz.cn/',
                //bucket 域名，下载资源时用到，**必需**
            container: containerId,           //上传区域DOM ID，默认是browser_button的父元素，
            max_file_size: '100mb',           //最大文件体积限制
            flash_swf_url: '../js/plupload/Moxie.swf',  //引入flash,相对路径
            filters: {
                    mime_types: [
                      //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
                      { title: "图片文件", extensions: "jpg,gif,png,bmp" }
                    ]
            },
            max_retries: 3,                   //上传失败最大重试次数
            dragdrop: true,                   //开启可拖曳上传
            drop_element: 'editor-container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
            chunk_size: '4mb',                //分块上传时，每片的体积
            auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
            init: {
                'FilesAdded': function(up, files) {
                    plupload.each(files, function(file) {
                        // 文件添加进队列后,处理相关的事情
                        printLog('on FilesAdded');
                    });
                },
                'BeforeUpload': function(up, file) {
                    // 每个文件上传前,处理相关的事情
                    printLog('on BeforeUpload');
                },
                'UploadProgress': function(up, file) {
                    // 显示进度条
                    editor.showUploadProgress(file.percent);
                },
                'FileUploaded': function(up, file, info) {
                    // 每个文件上传成功后,处理相关的事情
                    // 其中 info 是文件上传成功后，服务端返回的json，形式如
                    // {
                    //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                    //    "key": "gogopher.jpg"
                    //  }
                    printLog(info);
                    // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
                    
                    var domain = up.getOption('domain');
                    var res = $.parseJSON(info);
                    var sourceLink = domain + res.key; //获取上传成功后的文件的Url

                    printLog(sourceLink);

                    // 插入图片到editor
                    editor.command(null, 'insertHtml', '<img src="' + sourceLink + '" style="max-width:100%;"/>')
                },
                'Error': function(up, err, errTip) {
                    //上传出错时,处理相关的事情
                    printLog('on Error');
                },
                'UploadComplete': function() {
                    //队列文件处理完毕后,处理相关的事情
                    printLog('on UploadComplete');

                    // 隐藏进度条
                    editor.hideUploadProgress();
                }
                // Key 函数如果有需要自行配置，无特殊需要请注释
                //,
                // 'Key': function(up, file) {
                //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                //     // 该配置必须要在 unique_names: false , save_key: false 时才生效
                //     var key = "";
                //     // do something with key here
                //     return key
                // }
            }
        });
        // domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
        // uploader 为一个plupload对象，继承了所有plupload的方法，参考http://plupload.com/docs
    }
var app = new Vue({
  el: '#app',
  data: {
    wordsList:[],
	response:{},
	linkMap:{},
	dialogFormVisible: false,
	editor:''
  },
  methods: {
	  showInput(){
		this.dialogFormVisible = true;
		if(this.editor) return;
		this.editor = new wangEditor('div1');
		this.editor.config.customUpload = true;  // 设置自定义上传的开关
		this.editor.config.customUploadInit = uploadInit;  // 配置自定义上传初始化事件，uploadInit方法在上面定义了
		this.editor.create();
	  },
      getList(key) {
      let that = this;
	  let url = this.linkMap[key]? this.linkMap[key]:'https://api.github.com/repositories/83021079/issues';
      axios.get(url, {
        
      })
      .then(function (response) {
        console.log(response);
        that.wordsList = response.data;
		that.response=response;
		let array = that.response.headers.link.split(' ');
		that.linkMap={};
		for(let i = 0;i < array.length/2; i++){
			let url = array[i*2].replace(/(<|>;)/g,"");;
			let key = array[i*2+1].replace(/(rel="|"|,)/g,"");
			that.linkMap[key]=url;
		}
      })
      .catch(function (error) {
        console.log(error);
        that.$message({
              message: '网络错误！',
              type: 'error'
          });
      });
     },
	 publish(){
		 // 获取编辑器区域完整html代码
			var html = this.editor.$txt.html();
			// 获取编辑器纯文本内容
			//var text = this.editor.$txt.text();
			// 获取格式化后的纯文本
			//var formatText = this.editor.$txt.formatText();
			console.log(html);
			let posturl = 'https://api.github.com/repositories/83021079/issues';
			//额  这是个小号。。各位大佬别乱玩谢谢。。
			let token = 'Basic Zm9yRGl2aWRlQ2FyZHM6NjU5M2FjYTk0YzY2M2U5YzEyODljYmU4OTI1MTIxYzEzZDZlYzcwNQ==';
			axios(
				  {
						method: 'post',
						url: posturl,
						headers: {
							'Authorization': token
						},
						data: {
							title: dateFtt("yyyy-MM-dd hh:mm:ss",new Date()),
							body: html
						}
				  })
				  .then(function (response) {
					console.log(response);
					alert("发布成功！");
					location.reload();
				  })
				  .catch(function (error) {
					console.log(error);
					alert("发布失败！");
				  });
			this.dialogFormVisible = false;
			this.getList();
	 }
  },
   mounted: function () {
	  this.getList();
    }
});
		