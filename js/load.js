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
function writeJumbotron(page_title, picture_name) {
  const default_pic_name = "jumbotron_test2.jpg";
  if(page_title==undefined){
    return;
  }
  if (picture_name == undefined) {
    picture_name = default_pic_name;
  }
  $.ajax({
    url: "./js/include/jumbotron.html",
    cache: false,
    async: false,
    success: function(jumbotron) {
      
      var jumbotron = jumbotron.replace("PAGE_TITLE", page_title);
      var jumbotron = jumbotron.replace("PICTURE_NAME", picture_name);

      document.write(jumbotron);
      console.log(jumbotron);
    }
  });
}

function writeWebAd() {
  $.ajax({
    url: "./js/include/webAd.html",
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
