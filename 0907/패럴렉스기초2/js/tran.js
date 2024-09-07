$(function(){
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
		$("#sValue").text(sct); 

        var h1 = sct * 0.001 + 0.5;
        if(h1 >  0.5){
            $('#area1').css('transform','scale('+h1+')');
        }
        if(h1 > 0.1){
            $('#area2').css('transform','perspective(1000px) rotateY('+sct+'deg)');
        }
        // X =  상하 , Y = 좌우  Z = 가만히 선풍기처럼 돔
        var h3 = 2 - sct * 0.0009;

        $('#area3').css('transform','scale('+h3+') rotate('+sct+'deg)');
        
 
        var h4 = sct * 0.0009;
        if(h4 <=1){
            $('#area4').css('opacity',h4);
        }


    });


});