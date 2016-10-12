
$.get("../json/boerduo.json",function(data){
	var html ="";
	$.each(data, function(i,o) {
	
    if(i===0) {
           html += "<div class=\"showcontent active\">"
           $.each(o.ulist, function (i, o) {
               html += "<dl>"
							+"<dt>"
								+"<a href=\"javascript:;\"><img src=\""+o.imgSrc+"\"></a>"
							+"</dt>"
								+"<dd>"
									+"<b class=\"xj\">"+o.xj+"</b>"
									+"<span class=\"jj\">"+o.jj+"</span>"
								+"</dd>"
								+"<dd class=\"ms\">"
									+"<a href=\"javascript:;\" title=\"法国原拼进口红酒AOC 1789波尔抗静电防静电\">"+o.desc+"</a>"
								+"</dd>"
								+"<dd class=\"sa\">"
									+"<span>"
									+"销量:"
									+"<em>"+o.count+"</em>"
								+"</span>"
									+"<span>"
									+"评价:"
									+"<i>"+o.comment+"</i>"
								+"</span>"
									+"<a href=\"javascript:;\" title=\"加入购物车\"></a>"
								+"</dd>"
							+"</dl>"
           });
           html+= "</div>"
       }
       else{
           html += "<div class=\"showcontent\">";
           $.each(o.ulist, function (i,o) {
               html += "<dl>"
							+"<dt>"
								+"<a href=\"javascript:;\"><img src=\""+o.imgSrc+"\"></a>"
							+"</dt>"
								+"<dd>"
									+"<b class=\"xj\">"+o.xj+"</b>"
									+"<span class=\"jj\">"+o.jj+"</span>"
								+"</dd>"
								+"<dd class=\"ms\">"
									+"<a href=\"javascript:;\" title=\"法国原拼进口红酒AOC 1789波尔抗静电防静电\">"+o.desc+"</a>"
								+"</dd>"
								+"<dd class=\"sa\">"
									+"<span>"
									+"销量:"
									+"<em>"+o.count+"</em>"
								+"</span>"
									+"<span>"
									+"评价:"
									+"<i>"+o.comment+"</i>"
								+"</span>"
									+"<a href=\"javascript:;\" title=\"加入购物车\"></a>"
								+"</dd>"
							+"</dl>"
           });
           html += "</div>"
       }
   });
	$("#box").html(html);
});
var flag=true;
$("#ul1 li:not(:first)").click( function(){
	var $index = $(this).index();
	
	if(flag){
		flag=false;
		$("#box>.showcontent").removeClass("active").eq($index-1).addClass("active");
		$(".menu ul li").removeClass().eq($index).addClass("on");
	}
	else{
		flag=true;
		$("#box>.showcontent").removeClass("active").eq($index-2).addClass("active");
		$(".menu ul li").eq($index-2).css({
			"background-position":"right -382px"
		});
	}


});

//$("#ul1 li").eq(1).click( function(){
//	$(this).css({
//		background-position: right -382px;
//	});
//});
