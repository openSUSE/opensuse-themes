$(document).ready(function() {

if (!global_navigation_data) return;

var html = '';

$.each(global_navigation_data, function(i,menu){
  html += '<ul class="global-navigation-menu" id="menu-' + menu.id + '">';
  $.each(menu.items, function(j,submenu){
    html += '<li><a href="' + submenu.link +'">';
    html += '<img src="' + location.protocol + '//static.opensuse.org/themes/bento/images/' + submenu.image + '.png" alt="" />';
    html += '<div>' + submenu.title + '</div>';
    html += '<div class="desc">' + submenu.desc + '</div>';
    html += '</a></li>';
  });
  html += '</ul>';
});

$('#global-navigation').after(html);

var top = $('#global-navigation').height()-12;
if ($.browser.webkit) top += 1;
var left = $('#item-downloads').offset().left-15;
$('#menu-downloads').offset({left:left,top:top});
left = $('#item-support').offset().left-16;
$('#menu-support').offset({left:left,top:top});
left = $('#item-community').offset().left-16;
$('#menu-community').offset({left:left,top:top});
left = $('#item-development').offset().left-16;
$('#menu-development').offset({left:left,top:top});

$('#item-downloads').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $("ul[id^=menu-]").each(function() { $(this).fadeOut(); } );
  $('#menu-downloads').fadeIn();

  return false;
});
$('#item-support').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $("ul[id^=menu-]").each(function() { $(this).fadeOut(); } );
  $('#menu-support').fadeIn();
  return false;
});
$('#item-community').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $("ul[id^=menu-]").each(function() { $(this).fadeOut(); } );
  $('#menu-community').fadeIn();
  return false;
});
$('#item-development').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $("ul[id^=menu-]").each(function() { $(this).fadeOut(); } );
  $('#menu-development').fadeIn();
  return false;
});

$('.global-navigation-menu').mouseleave(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).fadeOut();
});

});
