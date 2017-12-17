
$( document ).ready(function() {
    
    $(".box1").hide();
    
    $(".bajs").hide();

    $(".fotobox").hide();

    $( "#cool" ).click(function() {
        $( ".box1" ).toggle();
      });


    $( "#bajsknapp" ).click(function() {
        $( ".bajs" ).toggle(600)
    });


    $("#bildknapp").click(function() {
        $(".fotobox").toggle();
        
    });



    

    
    

        

        
    
    
     






});