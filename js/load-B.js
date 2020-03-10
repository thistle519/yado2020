function writeHeader() {
  $.ajax({
    url: "./js/include/header.html",
    cache: false,
    async: false,
    success: function(header) {
      document.write(header);
      console.log("header");
    }
  });
}

function writeWebAd_B() {
  $.ajax({
    url: "./js/include/webAd-B.html",
    cache: false,
    async: false,
    success: function(webAd) {
      document.write(webAd);
      console.log("webAd");
    }
  });
}

function writeFooter() {
  $.ajax({
    url: "./js/include/footer.html",
    cache: false,
    async: false,
    success: function(footer) {
      document.write(footer);
      console.log("footer");
    }
  });
}
