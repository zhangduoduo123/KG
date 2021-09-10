//const contextPath = 'http://127.0.0.1:8088/graphvis/';
const contextPath = 'http://140.143.198.91:8088/graphvis/';
const knowlegeServer = 'http://shuyantech.com/api/';

/**用户登录配置验证**/
var config = {
    tableName: 'graphvis-jwt',  // 存储表名

    // 获取缓存的token
    getToken: function () {
        var cacheData = layui.data(config.tableName);
        if (cacheData) {
            return cacheData.token;
        }
    },
    // 清除token
    removeToken: function () {
        layui.data(config.tableName, {
            key: 'token',
            remove: true
        });
    },
    // 缓存token
    putToken: function (token) {
        layui.data(config.tableName, {
            key: 'token',
            value: token
        });
    },
    // 当前登录的用户
    getUser: function () {
        var cacheData = layui.data(config.tableName);
        if (cacheData) {
            return cacheData.login_user;
        }
    },
    // 缓存user
    putUser: function (user) {
        layui.data(config.tableName, {
            key: 'login_user',
            value: user
        });
    }
};

/**检查是否有登录用户**/
function checkIsLogin(){
	var currentUser = config.getUser();
	if(currentUser==null || typeof(currentUser) == undefined){
		layer.alert('~您还没有登录~',{
			title:'提示',
			icon:5,
		  	closeBtn: 0,
		  	btns:null,
		  	anim: 2,
		  	shadeClose: true
		},function(){
		  //window.location.href='index.html';
          toLogin();
		});

	}else{
		//layer.msg('登录成功', { icon: 1});
	}
};

/**去登录，弹出登录框**/
function toLogin(){
    layer.open({
      type: 2,
      //title: '登录',
      title: false,
      shadeClose: true,
      shade: 0.8,
      area: ['80%', '80%'],
      content: 'vip/login.html',
    }); 
};

/**用户登录成功**/
function loginSuccess(loginuser){
    layer.closeAll();
    if(loginuser){
        var role = loginuser.role;
        if(role == 1){
           window.location.href = 'index.html';
        }
    }
};

