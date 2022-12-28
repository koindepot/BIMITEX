$(function(){
    var $registerForm = $("#registration");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                inputName:{
                    required: true
                }
            },
            messages:{
                inputName:{
                    required: 'Username is required!'
                }
            }
        })
    }
})