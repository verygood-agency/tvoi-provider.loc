'use strict';

(function() {
    var adaptiveBanner = document.querySelector('.provaider__photo[data-banner-mobile]');

    var _setMobileBanner = function () {

        if (adaptiveBanner) {
            adaptiveBanner.style.backgroundImage = adaptiveBanner.getAttribute('data-banner-mobile');
        }
    }

    
    if (window.matchMedia('(max-width: 767px)').matches) {
        _setMobileBanner();
    }
})();
