
$( document ).ready(function() {
    $('#signupForm').hide() ;
    $('#userAcessModal').on('shown.bs.modal', function () {
        $('#trigger_btn').trigger('focus')
      }) ;
      
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


    $('#signUpModalBtn').click(function(){
        $('#signInModalBtn').removeClass('activeModalBtn') ; 
        $('#loginForm').hide() ; 
        $('#signUpModalBtn').addClass('activeModalBtn') ;  
        $('#signupForm').show() ; 
    });

    $('#signInModalBtn').click(function(){
        $('#signUpModalBtn').removeClass('activeModalBtn') ; 
        $('#signupForm').hide() ; 
        $('#signInModalBtn').addClass('activeModalBtn') ;  
        $('#loginForm').show() ; 
    });

    // Icons Color change when value entered 
    $('#signInUsernameInput').keyup(function(){
        if ($('#signInUsernameInput').val().length != 0 ){
            $('.logIn-user-container').css("color","rgba(238, 236, 236, 0.87)") ; 
        } else if ( $('#signInUsernameInput').val().length == 0 ){
           $('.logIn-user-container').css("color","#525e76") ; 
        }
    }) ; 

    $('#signInPasswordInput').keyup(function(){
        if ($('#signInPasswordInput').val().length != 0 ){
            $('.logIn-pass-container').css("color","rgba(238, 236, 236, 0.87)") ; 
        } else if ( $('#signInPasswordInput').val().length == 0 ){
           $('.logIn-pass-container').css("color","#525e76") ; 
        }
    }) ; 

    $('#signUpUsernameInput').keyup(function(){
        if ($('#signUpUsernameInput').val().length != 0 ){
            $('.signUp-user-container').css("color","rgba(238, 236, 236, 0.87)") ; 
        } else if ( $('#signUpUsernameInput').val().length == 0 ){
           $('.signUp-user-container').css("color","#525e76") ; 
        }
    }) ; 
    $('#signUpPasswordInput').keyup(function(){
        if ($('#signUpPasswordInput').val().length != 0 ){
            $('.signUp-password-container').css("color","rgba(238, 236, 236, 0.87)") ; 
        } else if ( $('#signUpPasswordInput').val().length == 0 ){
           $('.signUp-password-container').css("color","#525e76") ; 
        }
    }) ; 

    $('#signUpConfirmInput').keyup(function(){
        if ($('#signUpConfirmInput').val().length != 0 ){
            $('.signUp-confirm-container').css("color","rgba(238, 236, 236, 0.87)") ; 
        } else if ( $('#signUpConfirmInput').val().length == 0 ){
           $('.signUp-confirm-container').css("color","#525e76") ; 
        }
    }) ; 

    $('#signUpEmailInput').keyup(function(){
        if ($('#signUpEmailInput').val().length != 0 ){
            $('.signUp-email-container').css("color","rgba(238, 236, 236, 0.87)") ; 
        } else if ( $('#signUpEmailInput').val().length == 0 ){
           $('.signUp-email-container').css("color","#525e76") ; 
        }
    }) ; 
   
  });