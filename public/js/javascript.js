//========================
//NAVBAR
//========================
$(".navbar").hide();

// fade in .navbar
$(function () {
    $(window).scroll(function () {

             // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 40) {
            $('.navbar')
            .removeClass('animated fadeOutUp')
            .addClass('animated fadeInDown')
            .fadeIn();

        } else {
            $('.navbar')
            .removeClass('animated fadeInDown')
            .addClass('animated fadeOutUp')
            .fadeOut();
        }
      })
    }); //end nav bar

//========================
//SCROLLSPY
//========================
// Cache selectors
var lastId,
    topMenu = $("#defaultNavbar1"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
}); //end scrollspy

//========================
//DOCUMENT READY FUNCTION
//========================
$(document).ready(function(){

//========================
//SKILLS BAR
//========================
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },6000);
  });

//========================
//SMOOTH SCROLL
//========================
$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
}); //end smooth scroll

//========================
//PROGRESS CIRCLE BAR
//========================
var bar = new ProgressBar.Circle('#html', {
  color: '#2B2B2B',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'easeInOut',
  strokeWidth: 6,
  from: {color: '#2B2B2B', a:0},
  to: {color: '#FF93AC', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#javascript', {
  color: '#DF2933',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'easeInOut',
  strokeWidth: 6,
  from: {color: '#DF2933', a:0},
  to: {color: '#2B2B2B', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.9);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#php', {
  color: '#FF93AC',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'easeInOut',
  strokeWidth: 6,
  from: {color: '#FF93AC', a:0},
  to: {color: '#FF93AC', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.7);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#as', {
  color: '#DF2933',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'easeInOut',
  strokeWidth: 6,
  from: {color: '#DF2933', a:0},
  to: {color: '#2B2B2B', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.85);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#net', {
  color: '#FF93AC',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'easeInOut',
  strokeWidth: 6,
  from: {color: '#FF93AC', a:0},
  to: {color: '#FF93AC', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.55);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#c', {
  color: '#2B2B2B',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'easeInOut',
  strokeWidth: 6,
  from: {color: '#2B2B2B', a:0},
  to: {color: '#2B2B2B', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(0.5);  // Number from 0.0 to 1.0

//end progress circle bar

}); //end document ready function
