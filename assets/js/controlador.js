var numSlide = 54;
var htmljuego = $("#juegofv").html();
var intentosJuego = 0;
var arraytruefalse = [false,false,false];
$(document).ready(function () {
    iniciarJuegofv();
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
       effect: 'slideleft',
       defaultTab: 1
    });

    $("[data-toggle='toggle']").click(function() {
        var selector = $(this).data("target");
        $(selector).toggleClass('in');
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content:'<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems/numSlide) * 100).toFixed( 2 );
        $("#percent_curso").percircle({percent: porcent ,animate: "true"});
    })

    $('#icon_actividades').off('click').on('click', function(){
        if($(".divcontenido").is(':visible')){
            $(".divcontenido").animate({ width: 'hide' }); 
            $(".menu-actividades").show(1000); 
            setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        }else{
            $(".menu-actividades").hide();
            setTimeout(function() { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });

    $('.link_actividad').off('click').on('click', function(){
        $(".menu-actividades").hide();
        setTimeout(function() { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at= $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
            break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 8);
                $('#smartwizard2').smartWizard("goToStep", 8);
            break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 14);
                $('#smartwizard2').smartWizard("goToStep", 14);
            break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 19);
                $('#smartwizard2').smartWizard("goToStep", 19);
            break;
            case "c5":
                 $('#smartwizard').smartWizard("goToStep", 25);
                 $('#smartwizard2').smartWizard("goToStep", 25);
            break;
            case "c6":
                $('#smartwizard').smartWizard("goToStep", 29);
                $('#smartwizard2').smartWizard("goToStep", 29);
            break;
          default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
        }
        $(".controls-slide").show();
        $(".divcontenido").css("height","1000px");
    });

    $('#icon_salir').off('click').on('click', function(e){
        window.open('', '_self', '');
        window.close();
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $(".btn-falla").on("click", function(argument) {
        $(".fallas").hide()
        $(".falla1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn-falla2").on("click", function(argument) {
        $(".fallas").hide()
        $(".falla2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".b_1").on("click", function(argument) {
        $(".fallas").hide()
        $(".tipo-1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".b_2").on("click", function(argument) {
        $(".fallas").hide()
        $(".tipo-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".b_3").on("click", function(argument) {
        $(".fallas").hide()
        $(".tipo-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".b_4").on("click", function(argument) {
        $(".fallas").hide()
        $(".tipo-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".b_5").on("click", function(argument) {
        $(".fallas").hide()
        $(".tipo-5").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".orden").on("click", function(argument) {
        $(".cardss").hide()
        $(".cardss1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".hoja").on("click", function(argument) {
        $(".cardss").hide()
        $(".cardss2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".mantenimiento").on("click", function(argument) {
        $(".cardss").hide()
        $(".cardss3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $("#btn_factores").on("click", function(argument) {
        $(".divhidden").hide()
        $(".divhidden1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $("#btn_metodos").on("click", function(argument) {
        $(".divhidden").hide()
        $(".divhidden2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".bt1").on("click", function(argument) {
        $(".text").hide()
        $(".text1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".bt2").on("click", function(argument) {
        $(".text").hide()
        $(".text2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".bt3").on("click", function(argument) {
        $(".text").hide()
        $(".text3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".bt4").on("click", function(argument) {
        $(".text").hide()
        $(".text4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn_page1").on("click", function(argument) {
        $(".pages").hide()
        $(".page2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_page2").on("click", function(argument) {
        $(".pages").hide()
        $(".page3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_page3").on("click", function(argument) {
        $(".pages").hide()
        $(".page4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_page4").on("click", function(argument) {
        $(".pages").hide()
        $(".page5").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn-volver").on("click", function(argument) {
        $(".pages").hide()
        $(".page1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn_20-1").on("click", function(argument) {
        // $(".text20").hide()
        $(".text20-1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_20-2").on("click", function(argument) {
        // $(".text20").hide()
        $(".text20-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_20-3").on("click", function(argument) {
        // $(".text20").hide()
        $(".text20-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".corriente1").on("click", function(argument) {
        $(".page11").hide()
        $(".page11-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".corriente2").on("click", function(argument) {
        $(".page11").hide()
        $(".page11-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".corriente3").on("click", function(argument) {
        $(".page11").hide()
        $(".page11-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".corriente4").on("click", function(argument) {
        $(".div15").hide()
        $(".div15-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".corriente5").on("click", function(argument) {
        $(".div15").hide()
        $(".div15-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn_ley1").on("click", function(argument) {
        $(".ley").hide()
        $(".ley1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_ley2").on("click", function(argument) {
        $(".ley").hide()
        $(".ley2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_ley3").on("click", function(argument) {
        $(".ley").hide()
        $(".ley3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_ley4").on("click", function(argument) {
        $(".ley").hide()
        $(".ley4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".circuito1").on("click", function(argument) {
        $(".page22").hide()
        $(".page22-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".circuito2").on("click", function(argument) {
        $(".page22").hide()
        $(".page22-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".circuito3").on("click", function(argument) {
        $(".page22").hide()
        $(".page22-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
     $(".btn_res1").on("click", function(argument) {
        $(".respuestas").hide()
        $(".respuesta2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
     $(".btn_res2").on("click", function(argument) {
        $(".respuestas").hide()
        $(".respuesta5").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".solucion1").on("click", function(argument) {
        $(".respuestas").hide()
        $(".respuesta3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".solucion2").on("click", function(argument) {
        $(".respuestas").hide()
        $(".respuesta4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_res3").on("click", function(argument) {
        $(".respuestas2").hide()
        $(".respuestas3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_res4").on("click", function(argument) {
        $(".respuestas2").hide()
        $(".respuestas5").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".solucion3").on("click", function(argument) {
        $(".respuestas2").hide()
        $(".respuestas3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".solucion4").on("click", function(argument) {
        $(".respuestas2").hide()
        $(".respuestas4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn_res5").on("click", function(argument) {
        $(".resp").hide()
        $(".resp2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_res6").on("click", function(argument) {
        $(".resp").hide()
        $(".resp3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn_res7").on("click", function(argument) {
        $(".resp").hide()
        $(".resp4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn26-1").on("click", function(argument) {
        $(".pages26").hide()
        $(".page26-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn26-2").on("click", function(argument) {
        $(".pages26").hide()
        $(".page26-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn26-3").on("click", function(argument) {
        $(".pages26").hide()
        $(".page26-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".volver26").on("click", function(argument) {
        $(".pages26").hide()
        $(".page26-1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn1_27").on("click", function(argument) {
        $(".text27").hide()
        $(".text27-1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn2_27").on("click", function(argument) {
        $(".text27").hide()
        $(".text27-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn3_27").on("click", function(argument) {
        $(".text27").hide()
        $(".text27-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn4_27").on("click", function(argument) {
        $(".text27").hide()
        $(".text27-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".img28-1").on("click", function(argument) {
        $(".div28").hide()
        $(".div28-1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".img28-2").on("click", function(argument) {
        $(".div28").hide()
        $(".div28-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".img28-3").on("click", function(argument) {
        $(".div28").hide()
        $(".div28-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".img28-4").on("click", function(argument) {
        $(".div28").hide()
        $(".div28-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".img28-5").on("click", function(argument) {
        $(".div28").hide()
        $(".div28-5").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".img28-6").on("click", function(argument) {
        $(".div28").hide()
        $(".div28-6").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn34-1").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-1").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })

    $(".btn34-2").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-2").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-3").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-3").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-4").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-4").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-5").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-5").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-6").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-6").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-7").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-7").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-8").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-8").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })
    $(".btn34-9").on("click", function(argument) {
        $(".div34").hide()
        $(".div34-9").show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    })


    

    

    

    


     

    



    

    var words = ['Inteligencia',
                 'Diseño',
                 'Selección',
                 'Implantación',
                 'Revisión',
                 'Decisión',
                 'Resolución',
                 'Mantenimiento',
                 'Funcionamiento',
                 'Equipo',
                 'Proceso'
                 ];             


    var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');

    $("#tryAgainPuzzle").click(function(){
        gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');        
    });

    $("#solvePuzzle").click(function () { wordfindgame.solve(gamePuzzle, words) });

    
    canvas_multimetro();
    canvas_electricidad();  
    canvas_tension();  
    canvas_procedimientos();  

    

    $('#zoom_01').elevateZoom({zoomWindowPosition: 10});
    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
        }
    })

    

    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });


    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 4:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 8:
                 pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 14:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 19:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                 break;
            case 25:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                 break;
            case 29:
               pause_audio();
               $(".divcontenido").animate({ width: 'hide' }); 
               $(".menu-actividades").show(1000); 
               setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
               $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });
    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {
            default:
            // code block
        }
    });

    function iniciarJuegofv() {
    
        $(".actividadtruefalse label").checkbox({
          checked: "assets/img/cb2-1.png",
          check: "assets/img/cb2-0.png",
          onChange: function(i) {
                switch (i[0].name) {
                  case "r1":
                    if (i[0].value==="0") {
                        arraytruefalse[0]=true;
                    } else {
                        arraytruefalse[0]=false;
                    }
                    break;
                  case "r2":
                    if (i[0].value==="1") {
                        arraytruefalse[1]=true;
                    } else {
                        arraytruefalse[1]=false;
                    }
                    break;
                  case "r3":
                    if (i[0].value==="0") {
                        arraytruefalse[2]=true;
                    } else {
                        arraytruefalse[2]=false;
                    }
                    break;
                  default:
                    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                    break;
                }
          },
          onLoad: function(i) {
            // do something
          }
        });
    }


    $('#validarjuego3').off('click').on('click', function(){
        if (intentosJuego > 1) {
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
                'warning'
            ) 
        } else {
            console.log(arraytruefalse);
            if (arraytruefalse.indexOf(false) != -1) {
                Swal.fire(
                    '¡Respuesta Invalida!',
                    'Selecciona unicamente lo correcto',
                    'error'
                )  
                intentosJuego++;
            }else{
                Swal.fire(
                    '¡Has acertado!',
                    'Continua con la Siguiente actividad',
                    'success'
                )    
            }
        }  
    });


    function canvas_procedimientos() {
        var canvas = new fabric.Canvas('plano-procedimientos');
        var imgElement = 'assets/img/conexion.gif';
        

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=30;
            oImg.top=0;
            oImg.scaleToHeight(160);
            oImg.scaleToWidth(160);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                $("#modal_multimetro1").modal("show");   

            });
            oImg.on('mousemove', function() {
              
            });
        });
        

        
    }

    function canvas_multimetro() {
        var canvas = new fabric.Canvas('multimetro');
        var imgElement = 'assets/img/multimetro-clavijas-1.png';
        var imgElement2 = 'assets/img/multimetro-clavijas-2.png'; 
        var imgElement3 = 'assets/img/multimetro-clavijas-3.png';
        var imgElement4 = 'assets/img/multimetro-clavijas-4.png';
        var imgElement5 = 'assets/img/multimetro-clavijas-5.png';
        var imgElement6 = 'assets/img/multimetro-clavijas-6.png';
        var imgElement7 = 'assets/img/multimetro-clavijas-7.png';
        var imgElement8 = 'assets/img/multimetro-clavijas-8.png';
        var imgElement9 = 'assets/img/multimetro-clavijas-9.png';
        var imgElement10 = 'assets/img/multimetro-clavijas-10.png';
        var imgElement11 = 'assets/img/multimetro-clavijas-11.png';
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=21;
            oImg.top=113;
            oImg.scaleToHeight(110);
            oImg.scaleToWidth(110);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                // $("#modal_multimetro1").modal("show");   

            });
            oImg.on('mousemove', function() {
              $("#modal_multimetro1").modal("show");
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=12;
            oImg2.top=238;
            oImg2.scaleToHeight(105);
            oImg2.scaleToWidth(105);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                
                            
            });
            oImg2.on('mousemove', function() {
              $("#modal_multimetro2").modal("show");
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=125;
            oImg3.top=86;
            oImg3.scaleToHeight(107);
            oImg3.scaleToWidth(107);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_multimetro3").modal("show");            
            });
            oImg3.on('mousemove', function() {
              $("#modal_multimetro3").modal("show");      
            });
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=158;
            oImg4.top=240;
            oImg4.scaleToHeight(90);
            oImg4.scaleToWidth(90);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                console.log('selected a circle');  
                   
            });
            oImg4.on('mousemove', function() {
              $("#modal_multimetro4").modal("show");         
            });
        });
        fabric.Image.fromURL(imgElement5, function(oImg5) {
            oImg5.left=34;
            oImg5.top=202;
            oImg5.scaleToHeight(110);
            oImg5.scaleToWidth(110);
            oImg5.selectable = false;
            canvas.add(oImg5);

            oImg5.on('mouseup', function() {
                console.log('selected a circle');  
                            
            });
            oImg5.on('mousemove', function() {
              $("#modal_multimetro5").modal("show");
            });
        });
        fabric.Image.fromURL(imgElement6, function(oImg6) {
            oImg6.left=148;
            oImg6.top=123;
            oImg6.scaleToHeight(110);
            oImg6.scaleToWidth(110);
            oImg6.selectable = false;
            canvas.add(oImg6);

            oImg6.on('mouseup', function() {
                console.log('selected a circle');  
                       
            });
            oImg6.on('mousemove', function() {
              $("#modal_multimetro6").modal("show");     
            });
        });
        fabric.Image.fromURL(imgElement7, function(oImg7) {
            oImg7.left=146;
            oImg7.top=198;
            oImg7.scaleToHeight(110);
            oImg7.scaleToWidth(110);
            oImg7.selectable = false;
            canvas.add(oImg7);

            oImg7.on('mouseup', function() {
                console.log('selected a circle');  
                      
            });
            oImg7.on('mousemove', function() {
              $("#modal_multimetro7").modal("show");      
            });
        });
        fabric.Image.fromURL(imgElement8, function(oImg8) {
            oImg8.left=148;
            oImg8.top=181;
            oImg8.scaleToHeight(110);
            oImg8.scaleToWidth(110);
            oImg8.selectable = false;
            canvas.add(oImg8);

            oImg8.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_multimetro8").modal("show");            
            });
            oImg8.on('mousemove', function() {
              $("#modal_multimetro8").modal("show");
            });
        });
        fabric.Image.fromURL(imgElement9, function(oImg9) {
            oImg9.left=76;
            oImg9.top=75;
            oImg9.scaleToHeight(110);
            oImg9.scaleToWidth(110);
            oImg9.selectable = false;
            canvas.add(oImg9);

            oImg9.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_multimetro9").modal("show");            
            });
            oImg9.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement10, function(oImg10) {
            oImg10.left=113;
            oImg10.top=218;
            oImg10.scaleToHeight(110);
            oImg10.scaleToWidth(110);
            oImg10.selectable = false;
            canvas.add(oImg10);

            oImg10.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_multimetro10").modal("show");            
            });
            oImg10.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement11, function(oImg11) {
            oImg11.left=96;
            oImg11.top=229;
            oImg11.scaleToHeight(110);
            oImg11.scaleToWidth(110);
            oImg11.selectable = false;
            canvas.add(oImg11);

            oImg11.on('mouseup', function() {
                console.log('selected a circle');  
                     
            });
            oImg11.on('mousemove', function() {
              $("#modal_multimetro11").modal("show"); 
            });
        });
        

        
    }
     function canvas_electricidad() {
        var canvas = new fabric.Canvas('electricidad');
        var imgElement = 'assets/img/modales_cargas_electricas.png';
        var imgElement2 = 'assets/img/modales_cargas_electricas.png'; 
        var imgElement3 = 'assets/img/plus-info.gif'; 
        var imgElement4 = 'assets/img/plus-info.gif'; 
        var imgElement5 = 'assets/img/btn_carga-electrica1.png'; 
        var imgElement6 = 'assets/img/btn_carga-electrica2.png'; 

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=21;
            oImg.top=0;
            oImg.scaleToHeight(30);
            oImg.scaleToWidth(30);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                $("#modal_multimetro1").modal("show");   

            });
            oImg.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=640;
            oImg2.top=10;
            oImg2.scaleToHeight(30);
            oImg2.scaleToWidth(30);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_multimetro2").modal("show");
                            
            });
            oImg2.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=640;
            oImg3.top=10;
            oImg3.scaleToHeight(30);
            oImg3.scaleToWidth(30);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_electrico2").modal("show");
                            
            });
            oImg3.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=21;
            oImg4.top=0;
            oImg4.scaleToHeight(30);
            oImg4.scaleToWidth(30);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                console.log('selected a circle'); 
                $("#modal_electrico1").modal("show");   

            });
            oImg4.on('mousemove', function() {
              
            });
        });

        fabric.Image.fromURL(imgElement5, function(oImg5) {
            oImg5.left=0;
            oImg5.top=170;
            oImg5.scaleToHeight(200);
            oImg5.scaleToWidth(200);
            oImg5.selectable = false;
            canvas.add(oImg5);

            oImg5.on('mouseup', function() {
                console.log('selected a circle'); 
                $("#modal_electrico1").modal("show");   

            });
            oImg5.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement6, function(oImg6) {
            oImg6.left=430;
            oImg6.top=10;
            oImg6.scaleToHeight(200);
            oImg6.scaleToWidth(200);
            oImg6.selectable = false;
            canvas.add(oImg6);

            oImg6.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_electrico2").modal("show");
                            
            });
            oImg6.on('mousemove', function() {
              
            });
        });

        
    }

    function canvas_tension() {
        var canvas = new fabric.Canvas('c_tension');
        var imgElement = 'assets/img/tension1.png';
        var imgElement2 = 'assets/img/tension2.png'; 
        var imgElement3 = 'assets/img/tension3.png'; 

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=60;
            oImg.top=50;
            oImg.scaleToHeight(200);
            oImg.scaleToWidth(200);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                $("#modal_multimetro1").modal("show");   

            });
            oImg.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=320;
            oImg2.top=130;
            oImg2.scaleToHeight(200);
            oImg2.scaleToWidth(200);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_multimetro2").modal("show");
                            
            });
            oImg2.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=90;
            oImg3.top=220;
            oImg3.scaleToHeight(200);
            oImg3.scaleToWidth(200);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_electrico2").modal("show");
                            
            });
            oImg3.on('mousemove', function() {
              
            });
        });
    }

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        switch(stepIndex) {
            case 2:
                $('#dialog1' ).hide();
                $('#dialog2' ).hide();
                $('#dialog3' ).hide();
/*                $("#dialog1").fadeIn()
                    .css({top:1000,position:'initial'})
                    .animate({top:275}, 800, function() {
                        //callback
                });*/
                setTimeout(function(){ 
                    $( '#dialog1' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialog2' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialog3' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                
            break;
            case 3:
                $('#dialog4' ).hide();
                $('#dialog5' ).hide();
                $('#dialog6' ).hide();
                setTimeout(function(){ 
                    $( '#dialog4' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialog5' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialog6' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
            break;
            case 11:
                $('#divrowbombillo').hide();
                setTimeout(function(){ 
                    $( '#divrowbombillo' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 ); 
                }, 1000);
                  
            break;
            case 13:
                $('#dialogac21' ).hide();
                $('#dialogac22' ).hide();
                $('#dialogac23' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac21' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac22' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac23' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 14:
                $('#dialogac24' ).hide();
                $('#dialogac25' ).hide();
                $('#dialogac26' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac24' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac25' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac26' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 21:
                $('#dialogac31' ).hide();
                $('#dialogac32' ).hide();
                $('#dialogac33' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac31' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac32' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac33' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 22:
                $('#dialogac34' ).hide();
                $('#dialogac35' ).hide();
                $('#dialogac36' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac34' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac35' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac36' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            default:
            // code block
        }
    });

    $('#quiz').quiz({
      //resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      nextButtonText: 'Suguiente',
      counterFormat: 'Pregunta %current de %total',
      resultsFormat: 'Acertaste %score de %total !',
      restartButtonText: 'Reintentar',
      questions: [
        {
          'q': ' ¿Cuáles son los tipos de fuentes de luz que existen?',
          'options': [
            'Primarias y secundarias.',
            'Primeras, secundarias y terciarias',
            'Descarga y halógena.',
            'Ninguna'
          ],
          'correctIndex': 0,
          'correctResponse': 'Buen trabajo, continua.',
          'incorrectResponse': 'No es la respuesta'
        },
        {
          'q': '<br> ¿Es un ejemplo de luz primaria?',
          'options': [
            'La luna',
            'El sol',
            'Un espejo',
            'Una luciérnaga.'
          ],
          'correctIndex': 1,
          'correctResponse': 'Respuesta Correcta.',
          'incorrectResponse': 'Sigue Intentanto'
        },
        {
          'q': '<br> La luna es un ejemplo de luz secundaria.',
          'options': [
            'Verdadero',
            'Falso'
            
          ],
          'correctIndex': 0,
          'correctResponse': 'Excelente!.',
          'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
        },
      ]
    });

    var wheel = $("#wheel").flipster({
        style: 'wheel',
        spacing: 0,
        start: 0,
        onItemSwitch: function(currentItem, previousItem) {
          console.log('hover a circle'+previousItem);
          $('.wheeldiv p').html($(currentItem).attr("data-flip-title"));
        }
    });

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
    });

    // tabs

    var tabLinks = document.querySelectorAll(".tablinks1");
    var tabContent = document.querySelectorAll(".tabcontent1");

    var tabLinks2 = document.querySelectorAll(".tablinks2");
    var tabContent2 = document.querySelectorAll(".tabcontent2");


    tabLinks.forEach(function(el) {
       el.addEventListener("click", openTabs);
    });
    tabLinks2.forEach(function(el) {
       el.addEventListener("click", openTabs2);
    });


    function openTabs(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    function openTabs2(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent2.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks2.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    $('.carousel').carousel({
      interval: false,
      ride: false
    })
});

$('#nextstep').click(function () {
console.log("siguiente");

$('#cardBack_3').attr("data-numeroTarjeta", 5);


});


$('#nextstep2').click(function () {
    console.log("siguiente");
    
    $('#cardBack_3').attr("data-numeroTarjeta", 5);
    
    
    });

function cambiar() {

    $('#cardBack_3').attr("data-numeroTarjeta", );
    
}

$('.card_animada').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
});


$('.card_animada2').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');
});