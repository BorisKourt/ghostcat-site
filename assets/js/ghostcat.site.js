$(function(){
  mixpanel.track('Landed');

  $('.tr-twitter').click(function(e){
    mixpanel.track('Twitter');
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
  
});
