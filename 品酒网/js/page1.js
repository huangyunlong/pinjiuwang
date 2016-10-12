var dd=document.querySelectorAll("dd a");
for(var i=0;i<dd.length;i++){
	dd[i].onclick=function(){
	for(var j=0;j<dd.length;j++){
		dd[j].style.cssText="background:#fff;"
		
	}
	this.style.cssText="background:#c40000;color:#fff"
  
 }
}

 
