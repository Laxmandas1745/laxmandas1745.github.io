const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse= $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })

    AOS.init();

    jQuery(function($) {
  
        $('#bookmark-this').click(function(e) {
          var bookmarkURL = window.location.href;
          var bookmarkTitle = document.title;
      
          if ('addToHomescreen' in window && addToHomescreen.isCompatible) {
            // Mobile browsers
            addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
          } else if (window.sidebar && window.sidebar.addPanel) {
            // Firefox <=22
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
          } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
            // Firefox 23+ and Opera <=14
            $(this).attr({
              href: bookmarkURL,
              title: bookmarkTitle,
              rel: 'sidebar'
            }).off(e);
            return true;
          } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorites
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
          } else {
            // Other browsers (mainly WebKit & Blink - Safari, Chrome, Opera 15+)
            alert('Press ' + (/Mac/i.test(navigator.platform) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
          }
      
          return false;
        });
        
      });
});