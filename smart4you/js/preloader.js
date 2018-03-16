$(function(){

	bajar();


	function bajar(){
		var bajando = new TimelineMax({onStart: function(){temblar1()}});
		bajando
			.to($("#preloader4U"),0.60,{y: '25px', opacity: 1, display: 'block'}) // Rebote
			.to($("#preloader4U"),0.15,{y: '-15px'})
			.to($("#preloader4U"),0.15,{y: '10px'})
			.to($("#preloader4U"),0.05,{y: '-5px'})
			.to($("#preloader4U"),0.05,{y: '0px'});

	}

	function temblar1(){
		var temblando = new TimelineMax({onComplete: function(){temblar2()}});
		temblando
			.to($("#preloader4U"),0.22,{skewX: '-12.44deg', skewY:'-12.44deg'}) // Vibracion
			.to($("#preloader4U"),0.11,{skewX: '6.28deg', skewY:'6.28deg'})
			.to($("#preloader4U"),0.11,{skewX: '-3,15deg', skewY:'-3.15deg'})
			.to($("#preloader4U"),0.11,{skewX: '1,5deg', skewY: '1.5deg'})
			.to($("#preloader4U"),0.11,{skewX: '-0.8deg', skewY: '-0.8deg'})
			.to($("#preloader4U"),0.11,{skewX: '0.4233deg', skewY: '0.4233deg'})
			.to($("#preloader4U"),0.11,{skewX: '-0.1994deg', skewY: '-0.1994'}); // Mi fecha de nacimiento	
	}
	
	function temblar2(){
		var temblando2 = new TimelineMax({onComplete: function(){temblar1()}});
		temblando2
			.to($("#preloader4U"),0.22,{skewX: '12.44deg', skewY:'12.44deg'}) 
			.to($("#preloader4U"),0.11,{skewX: '-6.28deg', skewY:'-6.28deg'})
			.to($("#preloader4U"),0.11,{skewX: '3,15deg', skewY:'3.15deg'})
			.to($("#preloader4U"),0.11,{skewX: '-1,5deg', skewY: '-1.5deg'})
			.to($("#preloader4U"),0.11,{skewX: '0.8deg', skewY: '0.8deg'})
			.to($("#preloader4U"),0.11,{skewX: '-0.4233deg', skewY: '-0.4233deg'})
			.to($("#preloader4U"),0.11,{skewX: '0.1994deg', skewY: '0.1994'});
	}
	


	
});



