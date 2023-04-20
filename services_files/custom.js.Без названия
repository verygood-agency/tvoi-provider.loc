$( function() {
	/*var availableCities = [
	  "Краснодар",
	  "Москва",
	  "Ростов-на-Дону",
	];
	$("#cityinput").autocomplete({
	    source: function(request, response){
	        $.ajax({
	            type: 'POST',
	            dataType: 'json',
	            url : '/actions/cityfill.php',
	            data:{
	                maxRows: 12, // показать первые 12 результатов
	                nameStartsWith: request.term // поисковая фраза
	            },
	            success: function(data){
					response( data );
	            }
	        });
	    },
	    minLength: 1
	});*/
	//alert(window.location.hash);
  if (window.location.hash == '#cityconfirm') {
    $('#modal-demo-cityconfirm').modal('show');
    //return false;
  }
  if (window.location.hash == '#showcallform') {
    $('#modal-demo-05').modal('show');
    return false;
  }
  if (window.location.hash == '#showconnectform') {
    $('#modal-prvdr-name').html('Подключиться к ' + $('.call-modal-050').data('operator-name'));
    $('#modal-demo-050').modal('show')
    return false;
  }
  
  $('.call-teaser').click(function () {
    $('#modal-teaser').modal('show')
    return false;
  });
  
  /*$('.call-tm').click(function () {*/
  	$('.call-tm').click(function () {
  	$.ajax({
		type: 'POST',
		url: "/actions/checkAddress.php",
		dataType: 'json',
		data: "street="+$('#streetinput').val()+"&home="+$('#homeinput').val(),
		success: function (data) {
			console.log(data);
			$('.modal-prov-list').html(data['prov-list']);
			$('.modal-input-addr').html(data['input-addr']);
			$('.modal-ttl-text').html(data['ttl-text']);
			$('.tarif-link').attr("href", data['tarif-link']);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status);
			console.log(thrownError);
		}
	});		
		
    $('#modal-demo-07').modal('show');
    return false;
  });
	
	$('.modal').on('hide.nth.modal', function(){
		/*location.reload();
		return false;*/
		//console.log($(this).data('noclearinp'));
		if ($(this).data('noclearinp') != 'Y') {
			$('#streetinput3').val('');
			$('#homeinput3').val('');
			$('#connect-mes').hide();
			$('#homebutton3').attr('disabled', 'disabled');
			
			$("input[name='f_connect_phone']").val('');
			$("input[name='f_connect_name']").val('');
			$("input[name='f_connect_addr']").val('');
			
	    	$('.connectme__check-form-js').hide();
	    	$('.connectme__check-js a').addClass('active');
	    	
	    	$('.dt-text').html('');
	    	
	    	$('.imbox-hide').hide();
    	}
	});
	
	$(".show-imbox-hide").click(function(){
	    $(this).slideUp();
	    $('.imbox-hide').slideDown();
		return false;
	});
	
	$(".header__phone").click(function(){
		yaCounter50019934.reachGoal('target08');
  		return true;
	});
	
	
	
	$("#modal-teaser .connectme__form-mobile .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumberTest.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='ftphone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					if ($(".connectme__form-mobile input[name='ftphone']").val() == '') {
						$(".connectme__form-mobile input[name='ftphone']").addClass("red");
			        	return false;
					}

					/*grecaptcha.ready(function () { // по готовности скриптов recaptcha
							grecaptcha.execute('6LfU7UAdAAAAAOU0kIAAmnx-BiCK6J07V6w80P5B', {
								action: 'sendform' // этот параметр не имеет значения
							})
								.then(function(token) {*/
					$.post("/actions/formResponse.php",
					  {
					  /*	token: token,
					  	freesp: $("#modal-teaser input[name='freesp']").val(),*/
					    f1phone: $(".connectme__form-mobile input[name='ftphone']").val(),
					    formCode: 'callTeaser',
					    formName: 'Получить самое выгодное предложение',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='fttargetname']").val());
					/*})
				})*/
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='ftphone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});		
		
	});
	
	$("#modal-teaser .connectme__form-desctop .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='ftphone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					if ($(".connectme__form-desctop input[name='ftphone']").val() == '') {
						$(".connectme__form-desctop input[name='ftphone']").addClass("red");
			        	return false;
					}

				/*	grecaptcha.ready(function () { // по готовности скриптов recaptcha
							grecaptcha.execute('6LfU7UAdAAAAAOU0kIAAmnx-BiCK6J07V6w80P5B', {
								action: 'sendform' // этот параметр не имеет значения
							})
								.then(function(token) {*/
					$.post("/actions/formResponse.php",
					  {
						/*freesp: $("#modal-teaser input[name='freesp']").val(),*/
						f1phone: $(".connectme__form-desctop input[name='ftphone']").val(),
					    formCode: 'callTeaser',
					    formName: 'Получить самое выгодное предложение',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='fttargetname']").val());
							/*	})
					})*/
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='ftphone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
		
	});
	
	
	$("#modal-demo-05 .connectme__form-mobile .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='f1phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-mobile input[name='f1name']").val() == '')||($(".connectme__form-mobile input[name='f1name']").val() == 'Ваше имя')) {
						$(".connectme__form-mobile input[name='f1name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-mobile input[name='f1phone']").val() == '')||($(".connectme__form-mobile input[name='f1phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-mobile input[name='f1name']").removeClass("red");
						$(".connectme__form-mobile input[name='f1phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f1name: $(".connectme__form-mobile input[name='f1name']").val(),
					    f1phone: $(".connectme__form-mobile input[name='f1phone']").val(),
					    formCode: 'callOrder',
					    formName: 'Заказать звонок',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f1targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='f1name']").removeClass("red");
					$(".connectme__form-mobile input[name='f1phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
				
	});
	
	$("#modal-demo-05 .connectme__form-desctop .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='f1phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-desctop input[name='f1name']").val() == '')||($(".connectme__form-desctop input[name='f1name']").val() == 'Ваше имя')) {
						$(".connectme__form-desctop input[name='f1name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-desctop input[name='f1phone']").val() == '')||($(".connectme__form-desctop input[name='f1phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-desctop input[name='f1name']").removeClass("red");
						$(".connectme__form-desctop input[name='f1phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f1name: $(".connectme__form-desctop input[name='f1name']").val(),
					    f1phone: $(".connectme__form-desctop input[name='f1phone']").val(),
					    formCode: 'callOrder',
					    formName: 'Заказать звонок',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f1targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='f1name']").removeClass("red");
					$(".connectme__form-desctop input[name='f1phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
		
	});
	
	$("#modal-demo-050 .connectme__form-mobile .modal-demo-button").click(function(){
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='f50phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-mobile input[name='f50name']").val() == '')||($(".connectme__form-mobile input[name='f50name']").val() == 'Ваше имя')) {
						$(".connectme__form-mobile input[name='f50name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-mobile input[name='f50phone']").val() == '')||($(".connectme__form-mobile input[name='f50phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-mobile input[name='f50name']").removeClass("red");
						$(".connectme__form-mobile input[name='f50phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f50name: $(".connectme__form-mobile input[name='f50name']").val(),
					    f50phone: $(".connectme__form-mobile input[name='f50phone']").val(),
					    formCode: 'callConnect',
					    formName: 'Подключиться к оператору',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f5targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='f50name']").removeClass("red");
					$(".connectme__form-mobile input[name='f50phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-050 .connectme__form-desctop .modal-demo-button").click(function(){
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='f50phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-desctop input[name='f50name']").val() == '')||($(".connectme__form-desctop input[name='f50name']").val() == 'Ваше имя')) {
						$(".connectme__form-desctop input[name='f50name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-desctop input[name='f50phone']").val() == '')||($(".connectme__form-desctop input[name='f50phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-desctop input[name='f50name']").removeClass("red");
						$(".connectme__form-desctop input[name='f50phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f50name: $(".connectme__form-desctop input[name='f50name']").val(),
					    f50phone: $(".connectme__form-desctop input[name='f50phone']").val(),
					    formCode: 'callConnect',
					    formName: 'Подключиться к оператору',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f5targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='f50name']").removeClass("red");
					$(".connectme__form-desctop input[name='f50phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-051 .connectme__form-mobile .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='f51phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-mobile input[name='f51name']").val() == '')||($(".connectme__form-mobile input[name='f51name']").val() == 'Ваше имя')) {
						$(".connectme__form-mobile input[name='f51name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-mobile input[name='f51phone']").val() == '')||($(".connectme__form-mobile input[name='f51phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-mobile input[name='f51name']").removeClass("red");
						$(".connectme__form-mobile input[name='f51phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f51name: $(".connectme__form-mobile input[name='f51name']").val(),
					    f51phone: $(".connectme__form-mobile input[name='f51phone']").val(),
					    formCode: 'callInternetInFlat',
					    formName: 'Подключить интернет в квартиру',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f051targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='f51name']").removeClass("red");
					$(".connectme__form-mobile input[name='f51phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-051 .connectme__form-desctop .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='f51phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-desctop input[name='f51name']").val() == '')||($(".connectme__form-desctop input[name='f51name']").val() == 'Ваше имя')) {
						$(".connectme__form-desctop input[name='f51name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-desctop input[name='f51phone']").val() == '')||($(".connectme__form-desctop input[name='f51phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-desctop input[name='f51name']").removeClass("red");
						$(".connectme__form-desctop input[name='f51phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f51name: $(".connectme__form-desctop input[name='f51name']").val(),
					    f51phone: $(".connectme__form-desctop input[name='f51phone']").val(),
					    formCode: 'callInternetInFlat',
					    formName: 'Подключить интернет в квартиру',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f051targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='f51name']").removeClass("red");
					$(".connectme__form-desctop input[name='f51phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-052 .connectme__form-mobile .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='f52phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-mobile input[name='f52name']").val() == '')||($(".connectme__form-mobile input[name='f52name']").val() == 'Ваше имя')) {
						$(".connectme__form-mobile input[name='f52name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-mobile input[name='f52phone']").val() == '')||($(".connectme__form-mobile input[name='f52phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-mobile input[name='f52name']").removeClass("red");
						$(".connectme__form-mobile input[name='f52phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f52name: $(".connectme__form-mobile input[name='f52name']").val(),
					    f52phone: $(".connectme__form-mobile input[name='f52phone']").val(),
					    formCode: 'callInternetInHouse',
					    formName: 'Подключить интернет в дом',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f052targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='f52name']").removeClass("red");
					$(".connectme__form-mobile input[name='f52phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-052 .connectme__form-desctop .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='f52phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-desctop input[name='f52name']").val() == '')||($(".connectme__form-desctop input[name='f52name']").val() == 'Ваше имя')) {
						$(".connectme__form-desctop input[name='f52name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-desctop input[name='f52phone']").val() == '')||($(".connectme__form-desctop input[name='f52phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-desctop input[name='f52name']").removeClass("red");
						$(".connectme__form-desctop input[name='f52phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f52name: $(".connectme__form-desctop input[name='f52name']").val(),
					    f52phone: $(".connectme__form-desctop input[name='f52phone']").val(),
					    formCode: 'callInternetInHouse',
					    formName: 'Подключить интернет в дом',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f052targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='f52name']").removeClass("red");
					$(".connectme__form-desctop input[name='f52phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-053 .connectme__form-mobile .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='f53phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-mobile input[name='f53name']").val() == '')||($(".connectme__form-mobile input[name='f53name']").val() == 'Ваше имя')) {
						$(".connectme__form-mobile input[name='f53name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-mobile input[name='f53phone']").val() == '')||($(".connectme__form-mobile input[name='f53phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-mobile input[name='f53name']").removeClass("red");
						$(".connectme__form-mobile input[name='f53phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f53name: $(".connectme__form-mobile input[name='f53name']").val(),
					    f53phone: $(".connectme__form-mobile input[name='f53phone']").val(),
					    formCode: 'callInternetInOffice',
					    formName: 'Подключить интернет в офис',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f053targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='f53name']").removeClass("red");
					$(".connectme__form-mobile input[name='f53phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-053 .connectme__form-desctop .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='f53phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-desctop input[name='f53name']").val() == '')||($(".connectme__form-desctop input[name='f53name']").val() == 'Ваше имя')) {
						$(".connectme__form-desctop input[name='f53name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-desctop input[name='f53phone']").val() == '')||($(".connectme__form-desctop input[name='f53phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-desctop input[name='f53name']").removeClass("red");
						$(".connectme__form-desctop input[name='f53phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f53name: $(".connectme__form-desctop input[name='f53name']").val(),
					    f53phone: $(".connectme__form-desctop input[name='f53phone']").val(),
					    formCode: 'callInternetInOffice',
					    formName: 'Подключить интернет в офис',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f053targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='f53name']").removeClass("red");
					$(".connectme__form-desctop input[name='f53phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-054 .connectme__form-mobile .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-mobile input[name='f54phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-mobile input[name='f54name']").val() == '')||($(".connectme__form-mobile input[name='f54name']").val() == 'Ваше имя')) {
						$(".connectme__form-mobile input[name='f54name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-mobile input[name='f54phone']").val() == '')||($(".connectme__form-mobile input[name='f54phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-mobile input[name='f54name']").removeClass("red");
						$(".connectme__form-mobile input[name='f54phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f54name: $(".connectme__form-mobile input[name='f54name']").val(),
					    f54phone: $(".connectme__form-mobile input[name='f54phone']").val(),
					    formCode: 'callToClient',
					    formName: 'Перезвоните мне',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f54targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-mobile input[name='f54name']").removeClass("red");
					$(".connectme__form-mobile input[name='f54phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$("#modal-demo-054 .connectme__form-desctop .modal-demo-button").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$(".connectme__form-desctop input[name='f54phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($(".connectme__form-desctop input[name='f54name']").val() == '')||($(".connectme__form-desctop input[name='f54name']").val() == 'Ваше имя')) {
						$(".connectme__form-desctop input[name='f54name']").addClass("red");
			        	return false;
					} else if (($(".connectme__form-desctop input[name='f54phone']").val() == '')||($(".connectme__form-desctop input[name='f54phone']").val() == 'Ваш телефон')) {
						$(".connectme__form-desctop input[name='f54name']").removeClass("red");
						$(".connectme__form-desctop input[name='f54phone']").addClass("red");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f54name: $(".connectme__form-desctop input[name='f54name']").val(),
					    f54phone: $(".connectme__form-desctop input[name='f54phone']").val(),
					    formCode: 'callToClient',
					    formName: 'Перезвоните мне',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f54targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$(".connectme__form-desctop input[name='f54name']").removeClass("red");
					$(".connectme__form-desctop input[name='f54phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	/*$(".tarif-connect-button2").click(function(){
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if (($("input[name='f54name']").val() == '')||($("input[name='f54name']").val() == 'Ваше имя')) {
			$("input[name='f54name']").addClass("red");
        	return false;
		} else if (($("input[name='f54phone']").val() == '')||($("input[name='f54phone']").val() == 'Ваш телефон')) {
			$("input[name='f54name']").removeClass("red");
			$("input[name='f54phone']").addClass("red");
        	return false;
		}
		$.post("/actions/formResponse.php",
		  {
		    f54name: $("input[name='f54name']").val(),
		    f54phone: $("input[name='f54phone']").val(),
		  },
  		onAjaxSuccessSR1);
  		return false;
	});*/
	
	$(".tarif-connect-button4").click(function(){
		$.post("/actions/checkConnection.php",
		  {
		    f_connect_city: $("input[name='city']").val(),
			f_connect_street: $("input[name='street']").val(),
			f_connect_home: $("input[name='home']").val(),
			f_provider_id: $("#provider-id").val(),
		  },
  		onAjaxSuccessSR2);
  		return false;
	});
	
	$(".tarif-connect-button5").click(function(){
		$.post("/actions/checkConnection.php",
		  {
		    f_connect_city: $("input[name='city4']").val(),
			f_connect_street: $("input[name='street4']").val(),
			f_connect_home: $("input[name='home4']").val(),
			f_provider_id: $("#provider-id4").val(),
		  },
  		onAjaxSuccessSR3);
  		return false;
	});
	
	function onAjaxSuccessSR3(data)
	{
		console.log(JSON.parse(data));
		if (JSON.parse(data).success == 'Yes') {
			$('#connect-mes2').html('Поздравляем! Ваш дом подключен!');
			$('#connect-mes2').slideDown();
		} else if (JSON.parse(data).otherproviders == 'Yes') {
			var form_city = $('#cityinput').val();
			var form_street = $('#streetinput').val();
			var form_home = $('#homeinput').val();
			$('#connect-mes2').html('К сожалению, Ваш дом не подключен. Посмотрите <a href="/tarif/?city='+form_city+'&street='+form_street+'&home='+form_home+'">другие</a> тарифы по вашему адресу');
			$('#connect-mes2').slideDown();
		} else if (JSON.parse(data).chastniy == 'Yes') {
			var form_city = $('#cityinput').val();
			var form_street = $('#streetinput').val();
			var form_home = $('#homeinput').val();
			$('#connect-mes2').html('У Вас частный дом? Посмотрите <a href="/tarif/?city='+form_city+'&street='+form_street+'&home='+form_home+'">тарифы</a> для частного сектора');
			$('#connect-mes2').slideDown();
		} else {
			var form_city = $('#cityinput').val();
			var form_street = $('#streetinput').val();
			var form_home = $('#homeinput').val();
			$('#connect-mes2').html('К сожалению, Ваш дом не подключен. Посмотрите <a href="/tarif/?city='+form_city+'&street='+form_street+'&home='+form_home+'">другие</a> предложения в вашем городе');
			$('#connect-mes2').slideDown();
		}
	}
	
	function onAjaxSuccessSR2(data)
	{
		console.log(JSON.parse(data));
		if (JSON.parse(data).success == 'Yes') {
			$('#connect-mes').html('Поздравляем! Ваш дом подключен!');
			$('#connect-mes').slideDown();
			$('.connectme__form.hideform').slideDown();
		} else if (JSON.parse(data).otherproviders == 'Yes') {
			var form_city = $('#cityinput3').val();
			var form_street = $('#streetinput3').val();
			var form_home = $('#homeinput3').val();
			$('#connect-mes').html('К сожалению, Ваш дом не подключен. Посмотрите <a href="/tarif/?city='+form_city+'&street='+form_street+'&home='+form_home+'">другие</a> тарифы по вашему адресу');
			$('#connect-mes').slideDown();
			$('.connectme__form.hideform').slideUp();
		} else if (JSON.parse(data).chastniy == 'Yes') {
			var form_city = $('#cityinput3').val();
			var form_street = $('#streetinput3').val();
			var form_home = $('#homeinput3').val();
			$('#connect-mes').html('У Вас частный дом? Посмотрите <a href="/tarif/?city='+form_city+'&street='+form_street+'&home='+form_home+'">тарифы</a> для частного сектора');
			$('#connect-mes').slideDown();
			$('.connectme__form.hideform').slideUp();
		} else {
			var form_city = $('#cityinput3').val();
			var form_street = $('#streetinput3').val();
			var form_home = $('#homeinput3').val();
			$('#connect-mes').html('К сожалению, Ваш дом не подключен. Посмотрите <a href="/tarif/?city='+form_city+'&street='+form_street+'&home='+form_home+'">другие</a> предложения в вашем городе');
			$('#connect-mes').slideDown();
			$('.connectme__form.hideform').slideUp();
		}
	}
	
	$(".tarif-connect-button6m").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$("input[name='f_connect_phone6m']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($("input[name='f_connect_phone6m']").val() == '')) {
						$("input[name='f_connect_phone6m']").addClass("red");
			        	return false;
					} else if (($("input[name='f_connect_name6m']").val() == '')) {
						$("input[name='f_connect_phone6m']").removeClass("red");
						$("input[name='f_connect_name6m']").addClass("red");
			        	return false;
					/*} else if (($("input[name='f_connect_addr6m']").val() == '')) {
						$("input[name='f_connect_name6m']").removeClass("red");
						$("input[name='f_connect_phone6m']").removeClass("red");
						$("input[name='f_connect_addr6m']").addClass("red");
			        	return false;*/
					} else if (!$("input[name='check06m']").prop("checked")) {
						$("input[name='f_connect_name6m']").removeClass("red");
						$("input[name='f_connect_phone6m']").removeClass("red");
						$("input[name='f_connect_addr6m']").removeClass("red");
						$(".field-checkbox__name-text").css("color", "#ff0000");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f_connect_name: $("input[name='f_connect_name6m']").val(),
					    f_connect_phone: $("input[name='f_connect_phone6m']").val(),
						f_connect_addr: $("input[name='f_connect_addr6m']").val(),
						f_connect_comment: $("input[name='f_connect_comment6m']").val(),
						f_tarif_name: 'Тариф не выбран',
						f_tarif_price: 'Тариф не выбран',
						formCode: 'callToConnect',
					    formName: 'Заявка на подбор тарифа',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f3targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$("input[name='f_connect_phone6m']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$(".tarif-connect-button6").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$("input[name='f_connect_phone6']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($("input[name='f_connect_phone6']").val() == '')) {
						$("input[name='f_connect_phone6']").addClass("red");
			        	return false;
					} else if (($("input[name='f_connect_name6']").val() == '')) {
						$("input[name='f_connect_phone6']").removeClass("red");
						$("input[name='f_connect_name6']").addClass("red");
			        	return false;
					/*} else if (($("input[name='f_connect_addr6']").val() == '')) {
						$("input[name='f_connect_name6']").removeClass("red");
						$("input[name='f_connect_phone6']").removeClass("red");
						$("input[name='f_connect_addr6']").addClass("red");
			        	return false;*/
					} else if (!$("input[name='check06']").prop("checked")) {
						$("input[name='f_connect_name6']").removeClass("red");
						$("input[name='f_connect_phone6']").removeClass("red");
						$("input[name='f_connect_addr6']").removeClass("red");
						$(".field-checkbox__name-text").css("color", "#ff0000");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f_connect_name: $("input[name='f_connect_name6']").val(),
					    f_connect_phone: $("input[name='f_connect_phone6']").val(),
						f_connect_addr: $("input[name='f_connect_addr6']").val(),
						f_connect_comment: $("input[name='f_connect_comment6']").val(),
						f_tarif_name: 'Тариф не выбран',
						f_tarif_price: 'Тариф не выбран',
						formCode: 'callToConnect',
					    formName: 'Заявка на подбор тарифа',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f3targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$("input[name='f_connect_phone6']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$(".tarif-connect-button3").click(function(){
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$("input[name='f_connect_phone3']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($("input[name='f_connect_phone3']").val() == '')) {
						$("input[name='f_connect_phone3']").addClass("red");
			        	return false;
					} else if (($("input[name='f_connect_name3']").val() == '')) {
						$("input[name='f_connect_phone3']").removeClass("red");
						$("input[name='f_connect_name3']").addClass("red");
			        	return false;
					/*} else if (($("input[name='f_connect_addr3']").val() == '')) {
						$("input[name='f_connect_name3']").removeClass("red");
						$("input[name='f_connect_phone3']").removeClass("red");
						$("input[name='f_connect_addr3']").addClass("red");
			        	return false;*/
					} else if (!$("input[name='check03']").prop("checked")) {
						$("input[name='f_connect_name3']").removeClass("red");
						$("input[name='f_connect_phone3']").removeClass("red");
						$("input[name='f_connect_addr3']").removeClass("red");
						$(".field-checkbox__name-text").css("color", "#ff0000");
			        	return false;
					}
					$.post("/actions/formResponse.php",
					  {
					    f_connect_name: $("input[name='f_connect_name3']").val(),
					    f_connect_phone: $("input[name='f_connect_phone3']").val(),
						f_connect_addr: $("input[name='f_connect_addr3']").val(),
						f_connect_comment: $("input[name='f_connect_comment3']").val(),
						f_tarif_name: $("#modal-tarif-name").html(),
						f_tarif_price: $("#modal-tarif-price").val(),
						formCode: 'callToConnect',
					    formName: 'Заявка на подключение',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f6targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$("input[name='f_connect_phone3']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
	});
	
	$(".tarif-connect-button2").click(function(){
		
		//проверка валидности телефона
		phoneCheck = true;
		
		$.ajax({
			type: 'POST',
			url: "/actions/checkPhoneNumber.php",
			dataType: 'json',
			data: "phone="+$("input[name='f_connect_phone']").val(),
			success: function (data) {
				if (data['success'] == true) {
					console.log('phoneCheckOk');
					
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if (($("input[name='f_connect_phone']").val() == '')) {
						$("input[name='f_connect_phone']").addClass("red");
			        	return false;
					} else if (($("input[name='f_connect_name']").val() == '')) {
						$("input[name='f_connect_phone']").removeClass("red");
						$("input[name='f_connect_name']").addClass("red");
			        	return false;
					/*} else if (($("input[name='f_connect_addr']").val() == '')) {
						$("input[name='f_connect_name']").removeClass("red");
						$("input[name='f_connect_phone']").removeClass("red");
						$("input[name='f_connect_addr']").addClass("red");
			        	return false;*/
					} else if (!$("input[name='check0']").prop("checked")) {
						$("input[name='f_connect_name']").removeClass("red");
						$("input[name='f_connect_phone']").removeClass("red");
						$("input[name='f_connect_addr']").removeClass("red");
						$(".field-checkbox__name-text").css("color", "#ff0000");
			        	return false;
					}					
					
					$.post("/actions/formResponse.php",
					  {
					    f_connect_name: $("input[name='f_connect_name']").val(),
					    f_connect_phone: $("input[name='f_connect_phone']").val(),
						f_connect_addr: $("input[name='f_connect_addr']").val(),
						f_connect_comment: $("input[name='f_connect_comment']").val(),
						f_tarif_name: $("#modal-tarif-name").html(),
						f_tarif_price: $("#modal-tarif-price").val(),
						formCode: 'callToConnect',
					    formName: 'Заявка на подключение',
					  },
			  		onAjaxSuccessSR1);
			  		yaCounter50019934.reachGoal($("input[name='f6targetname']").val());
			  		return false;
					
				} else {
					console.log('phoneCheckFalse');
					$("input[name='f_connect_phone']").addClass("red");
        			return false;
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
			}
		});
		
		
	});
	
	function onAjaxSuccessSR1(data)
	{
		$('.connectme__form').slideUp();
	    $('.connectme__check').slideUp();
	    $('.connectme__content').slideUp();
	    $('.connectme__cost').slideUp();
	    $('.f1-form-success').slideDown();
	    $('.tarif-form-success').slideDown();
	    //setTimeout('location.reload()', 2000);
		return false;
	}
	
	$(".provider-fltr input").click(function(){
		$("#provider-fltr-frm").submit();
		//window.location.href = "?";
	});
	
	$(".phonemask").inputmask("+7(999)999-99-99",{ showMaskOnHover: false });
	
	$("#cityinput").autocomplete({
	    source: '/actions/cityfill.php',
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    select: function( event, ui ) {$(this).closest('label').removeClass('notapproved');}
	});
	$("#streetinput").autocomplete({
	    source: function( request, response ) {
	        $.ajax( {
	          url: "/actions/streetfill.php",
	          dataType: "json",
	          data: {
	            term: request.term,
	            city: $("#cityinput").val(),
	          },
	          success: function( data ) {
	            response( data );
	          }
	        } );
	    },
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    //select: function( event, ui ) {$(this).closest('label').removeClass('notapproved'); $("#homeinput").removeAttr('disabled'); $("#homebutton").removeAttr('disabled');}
	});
	/*$("#streetinput").change(function(){
		alert('change');
		$(this).closest('label').removeClass('notapproved'); $("#homeinput").removeAttr('disabled'); $("#homebutton").removeAttr('disabled');
	});*/
	$("#streetinput").on('keyup', function () {
	  	$(this).closest('label').removeClass('notapproved'); $("#homeinput").removeAttr('disabled'); $("#homebutton").removeAttr('disabled');
	});
	$("#homeinput").autocomplete({
	    source: function( request, response ) {
	        $.ajax( {
	          url: "/actions/homefill.php",
	          dataType: "json",
	          data: {
	            term: request.term,
	            city: $("#cityinput").val(),
	            street: $("#streetinput").val(),
	          },
	          success: function( data ) {
	            response( data );
	          }
	        } );
	    },
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    select: function( event, ui ) {$(this).closest('label').removeClass('notapproved'); $("#homebutton").removeAttr('disabled');}
	});
	
	$("#cityinput-mobile").autocomplete({
		source: '/actions/cityfill.php',
		minLength: 1,
		focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
		select: function( event, ui ) {$(this).closest('label').removeClass('notapproved');}
	});
	$("#streetinput-mobile").autocomplete({
		source: function( request, response ) {
			$.ajax( {
			  url: "/actions/streetfill.php",
			  dataType: "json",
			  data: {
				term: request.term,
				city: $("#cityinput-mobile").val(),
			  },
			  success: function( data ) {
				response( data );
			  }
			} );
		},
		minLength: 1,
		focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
		select: function( event, ui ) {$(this).closest('label').removeClass('notapproved'); $("#homeinput-mobile").removeAttr('disabled'); $("#homebutton").removeAttr('disabled');}
	});
	$("#streetinput-mobile").change(function(){
		$(this).closest('label').removeClass('notapproved'); $("#homeinput-mobile").removeAttr('disabled'); $("#homebutton").removeAttr('disabled');
	});
	$("#homeinput-mobile").autocomplete({
		source: function( request, response ) {
			$.ajax( {
			  url: "/actions/homefill.php",
			  dataType: "json",
			  data: {
				term: request.term,
				city: $("#cityinput-mobile").val(),
				street: $("#streetinput-mobile").val(),
			  },
			  success: function( data ) {
				response( data );
			  }
			} );
		},
		minLength: 1,
		focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
		select: function( event, ui ) {$(this).closest('label').removeClass('notapproved'); $("#homebutton").removeAttr('disabled');}
	});
	
	$("#cityinput3").autocomplete({
	    source: '/actions/cityfill.php',
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    select: function( event, ui ) {$(this).closest('label').removeClass('notapproved');}
	});
	$("#streetinput3").autocomplete({
	    source: function( request, response ) {
	        $.ajax( {
	          url: "/actions/streetfill.php",
	          dataType: "json",
	          data: {
	            term: request.term,
	            city: $("#cityinput3").val(),
	          },
	          success: function( data ) {
	            response( data );
	          }
	        } );
	    },
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    //select: function( event, ui ) {$(this).closest('label').removeClass('notapproved'); $("#homeinput3").removeAttr('disabled');}
	});
	$("#homeinput3").autocomplete({
	    source: function( request, response ) {
	        $.ajax( {
	          url: "/actions/homefill.php",
	          dataType: "json",
	          data: {
	            term: request.term,
	            city: $("#cityinput3").val(),
	            street: $("#streetinput3").val(),
	          },
	          success: function( data ) {
	            response( data );
	          }
	        } );
	    },
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    select: function( event, ui ) {$(this).closest('label').removeClass('notapproved'); $("#homebutton3").removeAttr('disabled');}
	});
	$("#homeinput3").on('input', function(){
		//alert('1234');
		$(this).closest('label').removeClass('notapproved');
		$(".tarif-connect-button4").removeAttr('disabled');
	});

	$("#cityinput2").autocomplete({
	    source: '/actions/cityfill.php',
	    minLength: 1,
	    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
	    select: function( event, ui ) {console.log(ui.item.value); window.location.href = "https://"+ui.item.value+".tvoi-provider.ru"+window.location.pathname;}
	});
});