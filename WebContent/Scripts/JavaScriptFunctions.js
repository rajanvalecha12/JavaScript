/**
 * 
 */
function normalFunction(){
	alert("I am a normal fuction");

}

function withArgumentFunction(name){
alert("welcome to javascript functions "+name);
}
function returnFunction(name){
	return "welcome to javascript functions "+name;
}
function takeFunctionAsArg(func){
	var rcvd=func;
	alert(rcvd);
}

function returningFunctions(){
	return{
		addClass:function(){
			alert("add class called");
			},
		removeClass:function(){
			alert("remove class called")
		}
	};
}