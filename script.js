$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    var letter = $(".letter");
    var letterHeight = letter.outerHeight();
    var letterTop = letter.offset().top;
    var viewportCenter = $(window).height() / 2;
    var moveY = viewportCenter - letterTop - (letterHeight / 2);

    envelope.addClass("open").removeClass("close");

    setTimeout(function () {
      envelope.css("overflow", "visible");
      letter.css("z-index", "4");
      letter.css("transform", "translateY(" + moveY + "px)");
    }, 50);
  }

  function close() {
    var letter = $(".letter");
    letter.css("transform", "translateY(0px)");
    letter.css("z-index", "1");

    setTimeout(function () {
      envelope.addClass("close").removeClass("open");
      envelope.css("overflow", "hidden");
    }, 400);
  }
});
