$(function () {
  var MEDIA_UP_MD = window.matchMedia('(min-width: 768px)');
  var MEDIA_UP_XL = window.matchMedia('(min-width: 1180px)');

  //$('#modal-demo-01').modal('show');
  //console.log(window.location.hostname);
  if (window.location.hostname == 'tvoi-provider.ru') {
    $('#modal-demo-01').modal('show');
  }


  /********  INPUTLABEL FIELD START *******/
  $('.inputlabel__field').focus(function (event) {
    $(this).parents('.fields-group__item').addClass('focus')
  });
  $('.inputlabel__field').focusout(function (event) {
    $(this).parents('.fields-group__item').removeClass('focus')
  });
  /********  INPUTLABEL FIELD END *******/


  /********  MODAL'S START *******/

  $('.setcity-js').click(function () {
    $('#modal-demo-01').modal('show');

    /*$("#cityinput2").autocomplete({
    source: '/actions/cityfill.php',
    minLength: 1,
    focus: function( event, ui ) {$(this).closest('label').addClass('notapproved');},
    select: function( event, ui ) {$(this).closest('label').removeClass('notapproved');}
});*/

    /*$("#cityinput2").click(function(){
      alert('test');
    });*/
    return false;
  });
  
  $('.setcity-js-close').click(function () {
  	//alert('123');
  	$('#modal-demo-cityconfirm').modal('hide');
    $('#modal-demo-01').modal('show');
    return false;
  });

  $('.imbox__footer button').click(function () {
    $('.header').removeClass('header--sticky');
    $('body').removeClass('sticky');
    //alert($(this).data('tarifid'));
    var html_data = $.ajax({
      url: "/actions/get_tarif_data.php",
      type: "POST",
      data: "tarifid=" + $(this).data('tarifid'),
      async: false
    }).responseText;

    if (html_data != '') {
      $('#tarif-data').html(html_data);
    }

    var html_data = $.ajax({
      url: "/actions/get_tarif_data.php",
      type: "POST",
      data: "getaction=Y&tarifid=" + $(this).data('tarifid'),
      async: false
    }).responseText;

    if (html_data != '') {
      $('#tarif-data-action').html(html_data);
    }

    $('#provider-id').val($(this).data('provid'));

    $('#modal-demo-02').modal('show')
    return false;
  });

  $('.showfilter-js').click(function () {
    $('#modal-demo-04').modal('show')
    return false;
  });

  $('.call-order').click(function () {
  	if ($(this).data('targname')) {
  		$("input[name='f1targetname']").val($(this).data('targname'));
  	}
    $('#modal-demo-05').modal('show')
    return false;
  });

  $('.call-modal-050').click(function () {
    $('#modal-prvdr-name').html('Подключиться к ' + $(this).data('operator-name'));
    $('#modal-demo-050').modal('show')
    return false;
  });

  $('.call-modal-051').click(function () {
    $('#modal-demo-051').modal('show')
    return false;
  });

  $('.call-modal-052').click(function () {
    $('#modal-demo-052').modal('show')
    return false;
  });

  $('.call-modal-053').click(function () {
    $('#modal-demo-053').modal('show')
    return false;
  });

  $('.call-modal-054').click(function () {
    $('#modal-demo-054').modal('show')
    return false;
  });

  $('.call-event-detail').click(function () {
    $('.dt-name').html($(this).data('name'));
    $('.dt-text').html($(this).data('text'));
    $('.header').removeClass('header--sticky');
      $('body').removeClass('sticky');
    $('#modal-demo-06').modal('show')
    return false;
  });

  /********  MODAL'S END *********/


  /********  check connectme START *********/
  $('.connectme__check-js a').click(function (event) {
    $('.connectme__check-form-js').toggle();
    $(this).toggleClass('active');
    return false;
  });
  /********  check connectme END *********/

  /********  check connectme START *********/
  $('.tarif-connect-button').click(function (event) {
    $('.connectme__form').slideUp();
    $('.connectme__check').slideUp();
    $('.connectme__content').slideUp();
    $('.connectme__cost').slideUp();
    $('.tarif-form-success').slideDown();
    return false;
  });
  /********  check connectme END *********/


  /******** HEADER NEED SCROLL START *********/
    //Show social blocks in header for intertal page
  let headerOffset = $('.header').offset().top;
  let gotTop = headerOffset;

  $(window).scroll(function (event) {

    if ($(window).scrollTop() > gotTop) {
      $('.header').addClass('header--sticky');
      $('body').addClass('sticky');
    }
    else {
      $('.header').removeClass('header--sticky');
      $('body').removeClass('sticky');
    }
  });
  /******** HEADER NEED SCROLL END *********/


  /******** TOGGLE PROVAIDER FILTER  START *********/
  $('#toggle-provaider-filter').click(function (event) {
    $('.provaider__filter-js').slideToggle(400);
    return false;
  });
  /******** TOGGLE PROVAIDER FILTER END *********/




  $('.inputlabel__field').focusout(function () {
    if ($(this).val() !== '') {
      $(this).addClass('not_empty');
    }
    else {
      $(this).removeClass('not_empty');
    }
  });

  $('.hamburger').click(function (event) {
    $('.header').toggleClass('active');
    $('.mobilemenu').toggleClass('show');
    $(this).toggleClass('is-active');
  });


  if (document.getElementById('allprovaider')) {
    var slider = document.getElementById('allprovaider');
    var slides = slider.children;

    var createWrappers = function (elements) {
      var slideWrapper = document.createElement('div');
      slideWrapper.classList.add('allprovaider__slide-wrapper');

      for (var i = elements.length - 1; i >= 0; i--) {
        slideWrapper.appendChild(elements[i]);
      }

      return slideWrapper;
    };

    var sliderOptions = {};

    if (MEDIA_UP_MD.matches) {
      sliderOptions.items = 1;

      if (slides.length > 1) {
        sliderOptions.center = false;
      }

      if (slides.length === 2) {
        slider.appendChild(createWrappers(slides));
      } else if (slides.length > 2) {
        sliderOptions.items = 3;
      }
    }
  }

  if (MEDIA_UP_XL.matches) {
    sliderOptions.items = 1;

    if (slides.length > 1) {
      sliderOptions.center = false;

      if (slides.length < 6) {
        slider.appendChild(createWrappers(slides));
      }
    }

    if (slides.length > 5) {
      sliderOptions.items = 6;
    }
  }

  $("#allprovaider").owlCarousel({
    nav: true,
    loop: false,
    center: true,
    navText: ['<span class="icon-rule-left"></span>', '<span class="icon-rule-right"></span>'],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: sliderOptions,
      1200: sliderOptions
    }
  });
});
