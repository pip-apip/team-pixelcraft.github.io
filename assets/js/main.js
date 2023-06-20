// (function($) {	
//   // Form
// 	var contactForm = function() {
// 		if ($('#contactForm').length > 0 ) {
// 			$( "#contactForm" ).validate( {
// 				rules: {
// 					name: "required",
// 					subject: "required",
// 					email: {
// 						required: true,
// 						email: true
// 					},
// 					message: {
// 						required: true,
// 						minlength: 5
// 					}
// 				},
// 				messages: {
// 					name: "Please enter your name",
// 					subject: "Please enter your subject",
// 					email: "Please enter a valid email address",
// 					message: "Please enter a message"
// 				},
// 				/* submit via ajax */
				
// 				submitHandler: function(form) {		
// 					var $submit = $('.submitting'),
// 						waitText = 'Submitting...';

// 					$.ajax({   	
// 				      type: "POST",
// 				      url: message_form(),
// 				      data: $(form).serialize(),

// 				      beforeSend: function() { 
// 				      	$submit.css('display', 'block').text(waitText);
// 				      },
// 				      success: function(msg) {
// 		               if (msg == 'OK') {
// 		               	$('#form-message-warning').hide();
// 				            setTimeout(function(){
// 		               		$('#contactForm').fadeIn();
// 		               	}, 1000);
// 				            setTimeout(function(){
// 				               $('#form-message-success').fadeIn();   
// 		               	}, 1400);

// 		               	setTimeout(function(){
// 				               $('#form-message-success').fadeOut();   
// 		               	}, 8000);

// 		               	setTimeout(function(){
// 				               $submit.css('display', 'none').text(waitText);  
// 		               	}, 1400);

// 		               	setTimeout(function(){
// 		               		$( '#contactForm' ).each(function(){
// 											    this.reset();
// 											});
// 		               	}, 1400);
			               
// 			            } else {
// 			               $('#form-message-warning').html(msg);
// 				            $('#form-message-warning').fadeIn();
// 				            $submit.css('display', 'none');
// 			            }
// 				      },
// 				      error: function() {
// 				      	$('#form-message-warning').html("Something went wrong. Please try again.");
// 				         $('#form-message-warning').fadeIn();
// 				         $submit.css('display', 'none');
// 				      }
// 			      });    		
// 		  		} // end submitHandler

// 			});
// 		}
// 	};
// 	contactForm();
// })(jQuery);

function message_form(){
	var nama = document.getElementsByName("name")[0].value
	var email = document.getElementsByName("email")[0].value
	var subject = document.getElementsByName("subject")[0].value
	var message_chat = document.getElementsByName("message")[0].value
	
	var data_text = "https://wa.me/6289502234885?text="+"Nama:"+nama+",Email:"+email+",Perihal:"+subject+",isi:"+message_chat;	
	var data_text2 = "https://wa.me/6289502234885?text="
	try {
		window.location.href(data_text2);
	} catch (error) {
		console.log(error);
	}
}
