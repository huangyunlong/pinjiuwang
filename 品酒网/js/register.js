/**
 * Created by Administrator on 2016/9/27.
 */
//手机注册还是邮箱注册的变换
var zhengze = {
    phone:/^[1-9]{1}[0-9]{10}$/,
    email:/^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$/,
    pwd:/^[a-z0-9A-z]{4,}$/
};
var flag=true;
$(".yxr.b_a").click(function(){
    if(flag){
        flag=false;
        $(this).html("使用手机注册");
        // $("#zlab").html("");
        $("#email").css({display:"block"});
        $("#phone").css({display:"none"});

    }
    else{
        flag=true;
        $(this).html("使用邮箱注册");
        // $("#zlab").html("");
        $("#email").css({display:"none"});
        $("#phone").css({display:"block"});
    }

});

//点击注册按钮时触发的事件
//手机的函数
//电话正则


var checkphone =  function(){
    if(flag) {
        var $phone = $("#phone").val();
        if ($phone == "") {
            alert("请输入手机号");
            $("#phone:input").focus();
            return false;
        }
        else if ($phone != "") {
            $("#zlab").css({display: "none"});
            if (zhengze.phone.test($phone)) {
                return true;
            }
            else {
                $("#phone:input").focus();
                alert("请输入正确的手机号");
            }
        }
    }
}

var checkemail =  function(){
    if(flag==false) {
        var $email = $("#email").val();
        if ($email == "") {
            alert("请输入邮箱号");
            $("#email:input").focus();
            return false;
        }
        else if ($email != "") {
            $("#zlab").css({display: "none"});
            if (zhengze.email.test($email)) {
                return true;
            }
            else {
                $("#email:input").focus();
                alert("请输入正确的邮箱号");
            }
        }
    }
}

var checkpwd =  function(){
    if(flag) {
        var $pwd = $("#pwd").val();
        if ($pwd == "") {
            alert("请输入密码");
            $("#pwd:input").focus();
            return false;
        }
        else if ($pwd != "") {
            $("#zlab").css({display: "none"});
            if (zhengze.pwd.test($pwd)) {
                return true;
            }
            else {
                $("#pwd:input").focus();
                alert("请输入正确的密码");
            }
        }
    }
}

var checkpwd2 =  function(){
    if(flag) {
        var $pwd = $("#pwd").val();
        var $pwd2 = $("#pwd2").val();
        if ($pwd2 == "") {
            alert("请重复输入密码");
            $("#pwd2:input").focus();
            return false;
        }
        else if ($pwd ==$pwd2) {
            $("#zlab").css({display: "none"});
                return true;
            }
        else {
            $("#pwd2:input").focus();
            alert("密码不一致，请输入正确的密码");
        }
    }
}

// if($('#phone').keyup(checkphone).val()){
//     console.log($('#phone').keyup(checkphone).val());
//     $("#zlab").css({display:"none"});
// }
// else{
//     $("#zlab").css({display:"block"});
// }
// $('#phone').keyup(checkphone);

//密码的函数
//重复密码的函数
$("#lbtn").click(function(){
    if((checkphone()||checkemail())&&checkpwd()&&checkpwd2()){
        var v = $("#phone").val();
        var p =  $("#pwd").val();
        ajax({
            method:"post",
            url:"../serve/index.php",
            params:{uvalue:v,pwd:p},
            success:function(data){
                if(data==1){
                    alert("注册成功");
                }
                else{
                    alert("用户名已存在请重新输入");
                }
            }
        });
    }
    else{
    }
});



