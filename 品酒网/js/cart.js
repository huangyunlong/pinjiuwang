$(".bgg>.w9>a:eq(2)").click(function() {
    $("#clogin").slideDown("fast");
})
$("#closeLogin").click(function () {
    $("#clogin").slideUp("fast");
})
$("#closeLogin").prev().click(function () {
    if ($("#loginc>table>tbody>tr:eq(0)>td:eq(1)>input").val().length<2){
        alert("用户名不能少于2位");
    }else if($("#loginc>table>tbody>tr:eq(1)>td:eq(1)>input").val().length<5){
        alert("密码不能少于5位");
    }else {
        alert("您输入的用户名或密码有误，请重新输入!");
    }
});
$("#zhif>tbody>tr:eq(1)>td>div").click(function () {
    $("#zhif>tbody>tr:eq(1)>td>div:not(:last)").attr("class","zfu left");
    $(this).attr("class","zfu zon left");
})