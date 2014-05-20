mandrilApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).ready(function() {
          setTimeout(function(){
            $('.galery-slider').slick();
          }, 500);
        });

        angular.element($window).bind("scroll", function() {

            var destMandril = - $('.sectionOne').height()-100,
              destEventos = - $('.sectionOne').height()-$('.sectionTwo').height()-100,
              destTalleres = - $('.sectionOne').height()-$('.sectionTwo').height()-$('.sectionThree').height()-100,
              destGaleria = - $('.sectionOne').height()-$('.sectionTwo').height()-$('.sectionThree').height()-$('.sectionFour').height()-100,
              destContacto = - $('.sectionOne').height()-$('.sectionTwo').height()-$('.sectionThree').height()-$('.sectionFour').height()-$('.sectionFive').height()-100;

            //Btn1
            if($(window).scrollTop() >= -destMandril-100){
              $('.btnGral a').removeClass('Act').css({'color': '#faee89'});
              $('.hd nav').css({'background-position': '-118px 0'});
              $(".btn1").addClass('Act');
              $('title').text("Teatro Mandril - Mandriles");
            }; 
            
            //Btn2
            if($(window).scrollTop() >= -destEventos-100){
              $('.btnGral a').removeClass('Act').css({'color': '#fff'});
              $('.hd nav').css({'background-position': '-236px 0'});
              $(".btn2").addClass('Act');
              $('title').text("Teatro Mandril - Eventos");
            };
            
            //Btn3
            if($(window).scrollTop() >= -destTalleres-100){
              $('.btnGral a').removeClass('Act').css({'color': '#828282'});
              $('.hd nav').css({'background-position': '-354px 0'});
              $(".btn3").addClass('Act');
              $('title').text("Teatro Mandril - Talleres");
            };
            
            //Btn4
            if($(window).scrollTop() >= -destGaleria-100){
              $('.btnGral a').removeClass('Act').css({'color': '#ee4a5d'});
              $('.hd nav').css({'background-position': '-472px 0'});
              $(".btn4").addClass('Act');
              $('title').text("Teatro Mandril - Galeria");
            };
            
            //Btn5
            if($(window).scrollTop() >= -destContacto-100){
              $('.btnGral a').removeClass('Act').css({'color': '#fff494'});
              $('.hd nav').css({'background-position': '-236px 0'});
              $(".btn5").addClass('Act');
              $('title').text("Teatro Mandril - Contacto");
            };
            
            if($(window).scrollTop() <= -destMandril-100){
              $('.btnGral a').removeClass('Act').css({'color': '#828282'});
              $('.hd nav').css({'background-position': '0 0'});
              $('title').text("Teatro Mandril - Centro Cultural");
            };

            scope.$apply();
        });
    };
});