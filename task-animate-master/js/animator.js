$("document").ready(function() {
var squares =["rect4168","rect4170" ,"rect4172" ,"path4463", "rect4204" , "path4448", "rect4194" ,"rect4192" , "path4459","rect4212" ,"rect4214" ,"rect4174" ,"rect4176" ,"rect4178" ,"rect4180" ,"rect4182" ,"rect4184", "path4455" ,"rect4210" ,"rect4190" ,"rect4208", "path4465" ,"rect4200" ,"rect4198", "path4461" ,"rect4206", "path4457" ,"rect4186" ,"rect4188","g4416", "rect4300", "g4422", "rect4327", "g4431","g4435", "g4443", "frame"];

///////animating the frame
var path = document.querySelector('#rect5971');
var length = 1700;
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
path.getBoundingClientRect();
path.style.transitionDelay="5s";
path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out 2.2s';
path.style.strokeDashoffset = '0';

///////animatu
	var delaySquares = 50;
	for(var i=0; i<squares.length; i++)
{
	var val = document.getElementById(squares[i]);
	$(val).velocity({opacity: 0},{delay: delaySquares*(i+1)}).velocity({opacity: 1});
}
/////////////////////
});//closed the document.ready