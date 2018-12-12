var app = new Vue({
  el: '#app',
  data: {
    wordsList:[],
	response:{},
	page:0,
	totalPage:0,
  },
  methods: {
      getList() {
      let that = this;
      axios.get('https://api.github.com/repositories/83021079/issues?page='+that.page, {
        
      })
      .then(function (response) {
        console.log(response);
        that.wordsList = response.data;
		that.response=response;
      })
      .catch(function (error) {
        console.log(error);
        that.$message({
              message: '网络错误！',
              type: 'error'
          });
      });
     },
	 handleCurrentChange(){
		 this.getList();
	 }
  },
   mounted: function () {
	  this.getList();
    }
})