$( document ).ready(function() {
    $('#discover').click(function(){
        $('#trending').removeClass('active') ;
        $('#following').removeClass('active') ;
        $('#discover').addClass('active') ; 
    });
    $('#trending').click(function(){
        $('#discover').removeClass('active') ;
        $('#followers').removeClass('active') ;
        $('#trending').addClass('active') ; 
    });
    $('#followers').click(function(){
        $('#trending').removeClass('active') ;
        $('#discover').removeClass('active') ;
        $('#followers').addClass('active') ; 
    });
  });