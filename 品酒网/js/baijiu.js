$.get("js/baijiu.json",function(data){
	
	var html="";
	$.each(data, function(i,o) {
		
        html+="<dl>"
        + "<dt>"
            + "<a href=\"#\">"
        + "<img width=\"120\" height=\"180\" src=\""+o.imgSrc+"\" class=\"thm\">"
        + " </a>"
        + " </dt>"
        + " <dd>"
        + " <b class=\"xj\">"+o.price1+"</b>"
        + "<span class=\"yj\">"+o.price2+"</span>"
        + "</dd>"
        + "<dd class=\"ms\">"
        + "<a href=\"#\" class=\"c3\">"+o.name+"</a></a>"
        + "<p class=\"gray\"></p>"
        + "</dd>"
        + "<dd class=\"sa\">"
        + "<span>销售: <em>0</em> </span>"
        + "<span><a href=\"#\">评论:</a><b>0</b></span>"
        + " <a href=\"#\" class=\"lcar\"></a>"
        + "</dd>"
        + "</dl>"
   });
    $(".w10").html(html);
        $(".w10 dl").hover(function () {
                $(this).css({
                        border:"1px solid red"

                })
        },function () {
                $(".w10 dl").css({
                        border:"1px solid #f6f6f6"
                })
        })
})