/*--------------------------轮播图--------------------------*/
$.get("../server/hy_lbt.json",function(data){
    var html = "",
    	html2 = "";
    $.each(data,function(i,o){
    	html += '<a href="'+o.imgHref+'"><img src="'+o.imgSrc+'"></a>';
        html2 += '<li>'+(i+1)+'</li>';
    });
    $("#pic").html(html);
    $("#dot").html(html2);
    
    lbt(data);
});

function lbt(data){	
	$("#pic>a:eq(0)").fadeIn(600);
	$("#dot>li:eq(0)").addClass("on");
	var current = 0; 
	var len = data.length;
	
	$("#dot>li").mouseenter(function(){
		current = $(this).index(); 
		changeItem();	
	});
	
	function changeItem(){
		$("#pic>a").eq(current).fadeIn(600).siblings().hide();
		$("#dot").show();
		$("#dot>li").removeClass("on").eq(current).addClass("on");
	}
	
	var termId;
	function autoPlay(){
		termId = setInterval(function(){
			current++;
			current%=data.length;
			changeItem();
		},4000);
	}
	
	$("#pic").parent().mouseenter(function(){
		clearInterval(termId);
	});	
	
	$("#pic").parent().mouseleave(function(){
		autoPlay();
	});
	
	autoPlay();
}



/*--------------------------醉爱经典--------------------------*/
function getJson(j){	
	$.get('../server/hy_f'+j+'.json',function(data){
	    $('<dl id="f'+j+'" class="f">').html(
			'<dt class="title"><img src="'+data[0].title+'"/></dt>'
			+'<dd>'
			+'</dd>'				
		).appendTo($("#hy_cont"));
		
		var html = "",
	    len = data[0].cont.length;
	    for(var i=0;i<len;i++){
	    	html += '<a href="'+data[0].cont[i].imgHref+'"><img src="'+data[0].cont[i].imgSrc+'"/><span class="price">'+data[0].cont[i].price+'</span></a>'
	    }   
		$('#f'+j+'>dd').html(html);
		$('#f'+j+'>dd>a:last').addClass("margin0");
	});
}
getJson(1);
getJson(2);
getJson(3);
getJson(4);
getJson(5);



/*--------------------------提交需求---------------------------*/
function checkName(e){
	var e = window.event||e;
	var v = $("#name").val();
	if(v.length>=2){ 
		return true;		
	}else{
		alert("姓名不能少于2个字!")
		return false;
	}
}

function checkTel(e){
	var e = window.event||e;
	var v = $("#tel").val();
	if(/^[1]\d{10}$/.test(v)){ 
		return true;	
	}else{
		alert("请输入正确的手机号!")
		return false;
	}
}

$("#submit").click(function(e){
	if(checkName(e)&&checkTel(e)){
		alert("您已成功提交需求");
	};
})

