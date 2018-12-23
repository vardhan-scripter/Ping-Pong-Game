var a=220;
		var c=40;
		var b=5;
		var d=0;
		var e=0;
		var f=40;
		var g=400;
		var h=5;
		var count=0;
		var best=0;
				function start() {
				var canvas=document.getElementById('canvas');
			var can=canvas.getContext("2d");
			setInterval(function() {
				fun();
				fun1();
			},20);
			
				function fun1() {
				a=a+b;
				g=g-h;
				if (a==20&&(Math.abs(d-g)<=0||Math.abs(g-d)<=0||Math.abs(d-g+40)<=40||Math.abs(g-d+40)<=40)||a==880&&(Math.abs(e-g)<=0||Math.abs(g-e)<=0||Math.abs(e-g+40)<=40||Math.abs(g-e+40)<=40)) {
					b=-b;
					count=count+100;
					document.getElementById('result1').innerHTML=count;
					if(count>best)
					{
						document.getElementById('result').innerHTML=count;
					}
					
				}
				else if(g==0||g==500)
				{
					h=-h;
				}
				
				else
					{
					if (a==890) {
					a=450;
					g=250;
					b=b;
					if (count>best) {
						best=count;
					document.getElementById('result').innerHTML=count;
					document.getElementById('result1').innerHTML="0";
				}
				else
				{
					document.getElementById('result').innerHTML=best;
					document.getElementById('result1').innerHTML="0";
				}
					count=0;
					
				}
				if (a==0) {
					a=450;
					g=250;
					b=b;
					if (count>best) {
						best=count;
					document.getElementById('result').innerHTML=count;
				}
				else
				{
					document.getElementById('result').innerHTML=best;
				}
					count=0;
					
				}
				if (g==490) {
					h=-h;
					
				}
				if (g==0) {
					h=-h;
					
				}
			}
				
			}
		}
		function stop() {
			// body...
		}
		function fun() {
			var canvas=document.getElementById('canvas');
			var can=canvas.getContext("2d");
			can.fillStyle = "black";
			can.fillRect(0,0,900,500);
			can.fillStyle = "red";
			can.fillRect(1,d,15,80);
			can.fillStyle = "red";
			can.fillRect(885,e,15,80);
			can.beginPath();
			can.arc(a,g,5,0,2*Math.PI);
			can.fillStyle="yellow";
			can.fill();
			can.fillStyle = "red";
			can.fillRect(450,0,1,500);
		}
			function funned() {
			if(d>=0&&d<=400)
				{
				d=d+c;
				fun();
			}
			}
			function funned1() {
			if(d>40)
				{
				d=d-c;
				fun();
			}
			}
			function funned2() {
			if(e>=0&&e<=400)
				{
				e=e+f;
				fun();
			}
			}
			function funned3() {
			if(e>40)
				{
				e=e-f;
				fun();
			}
			}
	$(document).ready(function(){
		$("#stop").hide();
		$("#h3").hide();
    $(document).keydown(function(e){
   if (e.keyCode == 38) { 
     funned1();
     funned3();
   }else  if (e.keyCode == 40) { 
			funned();
			funned2();
    }
   });
    $("#start").click(function() {
    $("#start").hide();
    document.getElementById('canvas').style.cssText = 'position: absolute;top: 15%;left: 15%;border: 2px solid seagreen;';
    $("#stop").show();
});
    $("#stop").click(function() {
    	$("#canvas").hide();
    	$("#h3").show();
    	$("#stop").hide();
    $("#start").show();

});
});

			