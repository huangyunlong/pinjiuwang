/**
 * Created by Administrator on 2016/10/6.
 */
/*---------------注册验证--------------*/
/*-----------正则验证-------------*/
var $regExpManger = {
    $mobile: /^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
    $company:/^[\(\)\（\）\u4E00-\u9FA5]+$/
}
/*-------验证联系人--------*/
var $checkxiName = function(){
    var $xiname = $("#xiname").val();
    if($xiname == ""){
        alert("联系人不能为空");
        return false;
    }else{
        return true;
    }
}
/*-------验证手机号--------*/
var $checkMobile = function(){
    var $mobileTxt = $("#mobile").val();
    if($mobileTxt == ""){
        alert("请填写正确的手机号码");
        return false;
    }else{
        if($regExpManger.$mobile.test($mobileTxt)){
            return true;
        }else{
            alert("请填写正确的手机格式");
            return false;
        }
    }
}
/*-------验证单位--------*/
var $checkCompany = function(){
    var $company = $("#company").val();
    if($company == ""){
        alert("请填写单位名称");
        return false;
    }else{
        if($regExpManger.$company.test($company)){
            return true;
        }else{
            alert("请填写单位名称");
            return false;
        }
    }
}
/*----------------按钮追踪------------------------*/
$(".tijiao").click(function(){
    if($checkxiName() && $checkMobile() && $checkCompany()){
        location.href = "success.html";
    }
})