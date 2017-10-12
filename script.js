$(document).ready(function() {

  $.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes", function(data){
    var citation = data[0].quote;
    var autheur = data[0].author;
    $('#quote').html('"' + citation + '"');
    $('#autheur').html('<small>- ' + autheur + '</small>');
  })

 $("#btn-menu").on('click', function() {
   $(this).siblings('#top-nav').slideToggle("slow");
   $(this).siblings('#top-nav2').slideToggle("slow");
   if($('#btn-menu').html() == "Ouvrir le menu déroulant"){
     $('#btn-menu').html("Fermer le menu déroulant");
   } else {
     $('#btn-menu').html("Ouvrir le menu déroulant");
   }
 });
 $("#design1").on('click', function() {
   $('#main').css("background-image", "url(./images/photo1.jpg)");
   $('#top-nav').css("border-top", "1px solid black");
   $('#top-nav2').css("border-top", "1px solid black");
   $("#navBar").removeClass();
   $("#navBar").addClass('menu-vertical bg-white');
   $("#article1").removeClass();
   $("#article2").removeClass();
   $("#article3").removeClass();
   $("#article1").addClass('article-body-green bg-grey');
   $("#article2").addClass('article-body-green bg-grey');
   $("#article3").addClass('article-body-green bg-grey');
   $("#btn-menu").removeClass();
   $("#btn-menu").addClass('color-black');
   $("#bouton1").removeClass();
   $("#bouton2").removeClass();
   $("#bouton3").removeClass();
   $("#bouton1").addClass('button-green');
   $("#bouton2").addClass('button-green');
   $("#bouton3").addClass('button-green');
 });
 $("#design2").on('click', function() {
   $('#main').css("background-image", "url(./images/photo2.jpg)");
   $('#top-nav').css("border-top", "1px solid white");
   $('#top-nav2').css("border-top", "1px solid white")
   $("#navBar").removeClass();
   $("#navBar").addClass('menu-vertical bg-blue');
   $("#article1").removeClass();
   $("#article2").removeClass();
   $("#article3").removeClass();
   $("#article1").addClass('article-body-blue bg-grey');
   $("#article2").addClass('article-body-blue bg-grey');
   $("#article3").addClass('article-body-blue bg-grey');
   $("#btn-menu").removeClass();
   $("#btn-menu").addClass('color-black');
   $("#bouton1").removeClass();
   $("#bouton2").removeClass();
   $("#bouton3").removeClass();
   $("#bouton1").addClass('button-blue');
   $("#bouton2").addClass('button-blue');
   $("#bouton3").addClass('button-blue');
 });
 $("#design0").on('click', function() {
   $('#main').css("background-image", "url(./images/background.jpg)");
   $('#top-nav').css("border-top", "1px solid white");
   $('#top-nav2').css("border-top", "1px solid white")
   $("#navBar").removeClass();
   $("#navBar").addClass('menu-vertical bg-black');
   $("#article1").removeClass();
   $("#article2").removeClass();
   $("#article3").removeClass();
   $("#article1").addClass('article-body-blue bg-grey');
   $("#article2").addClass('article-body-red bg-grey');
   $("#article3").addClass('article-body-green bg-grey');
   $("#btn-menu").removeClass();
   $("#btn-menu").addClass('color-white');
   $("#bouton1").removeClass();
   $("#bouton2").removeClass();
   $("#bouton3").removeClass();
   $("#bouton1").addClass('button-blue');
   $("#bouton2").addClass('button-red');
   $("#bouton3").addClass('button-green');
 });

 $("#navBar-button").on('click', function() {
    $("#navBar").animate({width: 'toggle'});
    if($('#navBar-button').hasClass('fa fa-chevron-left fa-3x')) {
      $("#navBar-button").removeClass();
      $("#navBar-button").addClass('fa fa-chevron-right fa-3x');
    } else {
      $("#navBar-button").removeClass();
      $("#navBar-button").addClass('fa fa-chevron-left fa-3x');
    }
    });
  $("#navSlide-button-right").on('click', function() {
    var idPhoto = 0;
    var idPhotoNext = 0;
    if($('#photo1').hasClass('noHidden')){
    idPhoto = 1;
    idPhotoNext = 2;
  }
    if($('#photo2').hasClass('noHidden')){
    idPhoto = 2;
    idPhotoNext = 3;
  }
    if($('#photo3').hasClass('noHidden')){
    idPhoto = 3;
    idPhotoNext = 4;
  }
    if($('#photo4').hasClass('noHidden')){
    idPhoto = 4;
    idPhotoNext = 1;
  }
  var nomPhotoNext = '#photo' + idPhotoNext;
  var nomPhoto = '#photo' + idPhoto;
  console.log("test");
  $(nomPhoto).removeClass();
  $(nomPhoto).addClass('hidden');
  $(nomPhotoNext).removeClass();
  $(nomPhotoNext).addClass('noHidden');
  });
  $("#navSlide-button-left").on('click', function() {
    var idPhoto = 0;
    var idPhotoNext = 0;
    if($('#photo1').hasClass('noHidden')){
    idPhoto = 1;
    idPhotoNext = 4;
  }
    if($('#photo2').hasClass('noHidden')){
    idPhoto = 2;
    idPhotoNext = 1;
  }
    if($('#photo3').hasClass('noHidden')){
    idPhoto = 3;
    idPhotoNext = 2;
  }
    if($('#photo4').hasClass('noHidden')){
    idPhoto = 4;
    idPhotoNext = 3;
  }
  var nomPhotoNext = '#photo' + idPhotoNext;
  var nomPhoto = '#photo' + idPhoto;
  console.log("test");
  $(nomPhoto).removeClass();
  $(nomPhoto).addClass('hidden');
  $(nomPhotoNext).removeClass();
  $(nomPhotoNext).addClass('noHidden');
  });
})
