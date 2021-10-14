(function(d) {
  var config = {
    kitId: 'sqb4wxw',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

$(function(){
  var btn = $('#work-type [data-filter]'),
  list = $('#works [data-category]'),
  wta = $('.wtc');

  btn.on('click', function(e) {
    e.preventDefault();
    var $tag = $(this).attr('data-filter');
    if ($tag == 'all'){
      list.hide().promise().done(function() {
        list.show();
      });
    } else {
      list.hide().promise().done(function() {
        list.filter('[data-category *= "' + $tag + '"]').show();
      });
    }
  });
  wta.on('click', function(e) {
    wta.css('opacity', '1');
    $(this).css('opacity', '.2');
  });
});

$(function() {
  $('a[href^="#"]').on("click", function() {
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$('#burger').on('click',function(){
  $('nav').fadeToggle();
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});

$('.link').on('click',function(){
  if(window.matchMedia("(max-width:599px)").matches){
    $('nav').fadeToggle();
    var burger = $('#burger');
    if(burger.hasClass('active')){
      burger.removeClass('active');
    } else {
      burger.addClass('active');
    }
  }
});

$(function(){
	var loader = $('.loader-wrap');
	$(window).on('load',function(){
		loader.fadeOut();
	});
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});
