jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	    $('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
        $('.top-content-1 .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
        $('.top-content-2 .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
    
//      $('.top-content-3 .text').waypoint(function() {
//		$('nav').toggleClass('navbar-no-bg');
//	});
    
//    $('.top-content-4 .text').waypoint(function() {
//        $('nav').toggleClass('navbar-no-bg');
//	});
    $('.top-content-5 .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
	});

    $('#top-navbar').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('#top-navbar-2').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-2').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('#top-navbar-3').on('shown.bs.collapse', function(){
        $('.top-content').backstretch("resize");
    });
    $('#top-navbar-3').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
     $('#top-navbar-4').on('shown.bs.collapse', function(){
        $('.top-content').backstretch("resize");
    });
    $('#top-navbar-4').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
     $('#top-navbar-5').on('shown.bs.collapse', function(){
        $('.top-content').backstretch("resize");
    });
    $('#top-navbar-5').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
     /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/2.png");
    $('.top-content-1').backstretch("assets/img/backgrounds/Peter.jpg");
    $('.top-content-2').backstretch("assets/img/backgrounds/Vaske.png");
    $('.top-content-3').backstretch("assets/img/backgrounds/Flasker.png");
    $('.top-content-4').backstretch("assets/img/backgrounds/Vespa.png");
    $('.top-content-5').backstretch("assets/img/backgrounds/MC.png");
    
    
    /*
        Wow
    */
    new WOW().init();
	
});
