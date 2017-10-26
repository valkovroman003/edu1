( function( $ ) {
$("#slides").slidesjs({
        width: 940,
        height: 528
      });
	  /*
$('.cart').bind("click",function(e){
	$('#popi').attr({"src":$(this).attr("src")});
	$('#myModal').modal()
});
*/
$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
$('.poping').bind("click",function(e){
	$('#popup').modal()
});


      var wall = new Freewall(".pictures");
wall.reset({
					selector: '.item',
					animate: true,
					cellW: 155,
					cellH: 155,
					delay: 50,
					gutterX : 0,
					gutterY : 0,
					onResize: function() {
						wall.fitWidth();
					}
				});
wall.fitWidth();
$(window).resize(function(){
	alert(1);});
} )( jQuery );