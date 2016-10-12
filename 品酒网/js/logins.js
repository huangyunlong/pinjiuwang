
var zheng = {
    pe:/^([-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~])|([1-9]{1}[0-9]{10})+$/,
    pwd:/^[a-z0-9A-z]{4,}$/
};

var checkpe = function(){
    var $username = $("#username").val();
    if ($username == "") {
        alert("请正确填写登录账号,2-30位");
        $("#username:input").focus();
        return false;
    }
    else if ($username != "") {
        $("#zlab").css({display: "none"});
        if (zheng.pe.test($username)) {
            return true;
        }
        else {
            $("#username:input").focus();
            alert("请正确填写登录账号,2-30位");
            return false;
        }
    }
}

var checkpwd = function(){
    var $pwd = $("#pwd").val();
    if ($pwd == "") {
        alert("请正确填写登录密码");
        $("#pwd:input").focus();
        return false;
    }
    else if ($pwd != "") {
        $("#zlab").css({display: "none"});
        if (zheng.pwd.test($pwd)) {
            return true;
        }
        else {
            $("#pwd:input").focus();
            alert("请正确填写密码，密码是4位以上");
            return false;
        }
    }
}
			var uname = $("#username").val();
			var pd = $("#pwd").val();

			if(getCookie("userName") && getCookie("pwd")){
				uname=getCookie("userName");
				$("#username:input").val(uname);
				pd= getCookie("pwd");
				$("#pwd:input").val(pd)
				$("#remember").bind("click", function () {
	            $("#remember").attr("checked", true);
            });
 
		}


$("#lbtn").click(function(){
		var uname = $("#username").val();
		var pd = $("#pwd").val();
    if(checkpe()&&checkpwd()){
    		ajax({
		method:"post",
		url:"../serve/login.php",
		params:{v:uname,p:pd},
		isAsyc:true,
		success:function(data){
			if(data==1){
				location.href="index.html";
			}
			else if(data==10){
				alert("用户名和密码不匹配，请重新输入");
				location.reload(true);
			}
			else{
				alert("用户名不存在请注册");
			}
		},
		error:function(mes){
			alert(mes);
		},
	});
	
			if($("#remember:input[type='checkbox']").is(':checked')){  //选中
				setCookie({
					name:"userName",
					value:uname,
					expires:new Date("2116/8/19")
				})
				setCookie({
					name:"pwd",
					value:pd,
					expires:new Date("2116/8/19")
				})
			}else{  //没选中
				removeCookie({
					name:"userName",
				});
				removeCookie({
					name:"pwd",
				});
			}
			
			
    	
	
		}
        
    else{
        // alert("注册失败");
    }
});