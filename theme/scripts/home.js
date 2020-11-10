var home = {
	init: function() {
		home.addEventListener();
		// for footer copyright year
		home.getYear();
	},

	getYear: function() {
		var year = new Date().getFullYear();
		$('.copyright-year').html(year);
	},

	addEventListener: function() {
		$(document).on('click', '#btnEnquire', function() {
			$(this).parents('.flex-box').find('.box.right').addClass("active");
			$(this).parents('.flex-box').find('.blocker-dimmer').addClass("active");
		});

		$(document).on('click', '.blocker-dimmer', function() {
			$(this).parents('.flex-box').find('.box.right').removeClass("active");
			$(this).removeClass("active");
		});

		$(document).on('click', '#btnSubmit', function() {
			var emailVal = $("#email").val().trim();
			if(emailVal === "" || emailVal === null) {
				$(".error").addClass("active").html("Email is required.");
			} else if(!home.validateEmail(emailVal)) {
				$(".error").addClass("active").html("Please enter a valid email.");
			} else {
				$(".error").removeClass("active");
			}
		});
	},

	validateEmail: function(email) {
		var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		return regexEmail.test(email) ? true : false;
	}
};