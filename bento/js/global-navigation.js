$(document).ready(function() {

$.get('./global-navigation.html', function(data) {

$('#global-navigation').after(data).remove();

var top = $('#global-navigation').height()-12;
if ($.browser.webkit) top += 1;
var left = $('#item-downloads').offset().left-15;
$('#menu-downloads').offset({left:left,top:top});
var left = $('#item-support').offset().left-16;
$('#menu-support').offset({left:left,top:top});
var left = $('#item-community').offset().left-16;
$('#menu-community').offset({left:left,top:top});
var left = $('#item-development').offset().left-16;
$('#menu-development').offset({left:left,top:top});

$('#item-downloads').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $('#menu-downloads').fadeIn();
  $('#menu-support').fadeOut();
  $('#menu-community').fadeOut();
  $('#menu-development').fadeOut();
});
$('#item-support').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $('#menu-downloads').fadeOut();
  $('#menu-support').fadeIn();
  $('#menu-community').fadeOut();
  $('#menu-development').fadeOut();
});
$('#item-community').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $('#menu-downloads').fadeOut();
  $('#menu-support').fadeOut();
  $('#menu-community').fadeIn();
  $('#menu-development').fadeOut();
});
$('#item-development').click(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).addClass('selected');
  $('#menu-downloads').fadeOut();
  $('#menu-support').fadeOut();
  $('#menu-community').fadeOut();
  $('#menu-development').fadeIn();
});

$('.global-navigation-menu').mouseleave(function(){
  $('#global-navigation li.selected').removeClass('selected');
  $(this).fadeOut();
});

});

});
