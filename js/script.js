jQuery(function($) {
	
/*	$('.sf-menu li:has("ul")').mouseenter({a:'hello', b:'world'},function(event) {
	
		$('.sf-menu li ul').stop().fadeIn(300);
		
	});*/
	
	
	/*$('.sf-menu li:has("ul")').mouseover({a:'hello', b:'world'},function(event) {
	
		$('.sf-menu li ul').stop().fadeIn(300);
		
	});*/
	
	
	/*$('.sf-menu li:has("ul")').mouseleave({a:'hello', b:'world'},function(event) {
	
		$('.sf-menu li ul').stop().fadeOut(300);
		
	});*/
	
	/*$('.sf-menu li:has("ul")').mouseout({a:'hello', b:'world'},function(event) {
	
		$('.sf-menu li ul').stop().fadeOut(300);
		
	});*/
	
	
	/*$('.sf-menu li:has("ul")').hover(
					function() {
						$('.sf-menu li ul').stop().fadeIn(300);
					},
					function() {
						$('.sf-menu li ul').stop().fadeOut(300);
					}
					
					);*/
	
	
/*	$('.sf-menu li ul li').dbclick({},function(event) {
		event.preventDefault();
		
		$('header h2').append('Click');
		
		//$('.sf-menu li ul').fadeOut(300);
		
		$(this).parent().fadeOut(300);
		
	});*/				
	
	/*$('header h2').mousemove({},function(event) {
		
		$('.grid_7').text(event.pageX + " | " + event.pageY);
	});*/		
	
	/*$('input[name=name]').keypress(function(event) {
		
		
		alert(event.which);
		var email = $('input[name=email]');
		email.val($(this).val());
		
	});	*/
	
	
	/*$('input[name=name]').focus({},function() {
		
		$(this).val('Введите текст');
		
	});	
	$('input[name=name]').blur({},function() {
		
		alert('Закончили?');
		
	});*/
	
	/*$('input[name=name]').select(function() {
		alert('Выбран элемент');
	})	*/
	
	/*$('.btn').click(function(e) {
		//e.preventDefault();
		
	});*/
	
	$('form').submit({},function(e) {
		e.preventDefault();
		
		alert($('input[name=name]').val());
		
	});
	
	$('input[name=name]').change({},function() {
		
		var email = $('input[name=email]');
		email.val($(this).val());
		
	});
	
});
