/*
*
*  create by Cevenquan   2017-01-04
*
*/


//<div id="tip"><span></span></div>
function tip(val,time){
	if(time==null){
		time = 1000;
	}
	$("#tip").find("span").html(val);
	$("#tip").fadeIn('fast');
	setTimeout('$("#tip").fadeOut("fast")',time)
}