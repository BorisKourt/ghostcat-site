$(function(){
  
  window.setTimeout(function() {
      mixpanel.track('Landed');
  }, 2000);

  $('.tr-twitter').click(function(e){
    mixpanel.track('Twitter');
  });  

  $('.tr-demo').click(function(e){
    mixpanel.track('Demo');
  }); 

  $('.cp_embed_iframe').click(function(e){
    mixpanel.track('cford');
  });  
  $('.tr-cat').click(function(e){
    mixpanel.track('catalan');
  });    
 
  $('.sellfy').click(function(e){
    mixpanel.track('Clicked Buy');
  });

  $('.tr-repo').click(function(e){
    mixpanel.track('Support');
  });

  $('.tr-ghostkick').click(function(e){
    mixpanel.track('Ghost Kickstarter');
  });

  $('.tr_tryghost').click(function(e){
    mixpanel.track('Try Ghost');
  });

  var target = $("#support").offset().top;

  var interval = setInterval(function(){
    if ($(window).scrollTop() >= target) {
      mixpanel.track("Scrolled to Support");
      clearInterval(interval);
    }
  },250);

});
