AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _homeSwiper = function () {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  var _outsideUnscrollable = function () {
    var outsideLock = $('.js-lock');
    var closeModal = $('.js-close');
    var body = $('body');

    outsideLock.on('click', function() {
      body.addClass('lock');
    });

    closeModal.on('click', function() {
      body.removeClass('lock');
    });
  }

  var _passwordAsterisk = function () {
    $('.js-password').passwordify();
    $(".js-password").passwordify({
        maxLength: 20
    });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _homeSwiper();
    _outsideUnscrollable();
    _passwordAsterisk();
  };

  return {
    init: init
  };
})();