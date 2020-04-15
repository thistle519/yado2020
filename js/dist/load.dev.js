"use strict";

var header = "<div class=\"fixed-top\">\n  <nav class=\"navbar navbar-expand-md\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <a href=\"index.html\"><img src=\"img/logo_demo_w_hiq.png\" alt=\"\" class=\"logo\"></a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\"><a href=\"shinkan.html\" class=\"nav-link\">\u65B0\u6B53\u60C5\u5831</a></li>\n        <li class=\"nav-item\"><a href=\"apply.html\" class=\"nav-link\">\u7533\u3057\u8FBC\u307F</a></li>\n        <li class=\"nav-item\"><a href=\"info.html\" class=\"nav-link\">\u304A\u77E5\u3089\u305B</a></li>\n        <!-- <li class=\"nav-item active\"><a href=\"#\" class=\"nav-link\">\u6A21\u64EC\u5E97\u691C\u7D22\u30FB\u4E00\u89A7</a></li>\n          <li class=\"nav-item\"><a href=\"map.html\" class=\"nav-link\">\u30DE\u30C3\u30D7</a></li>\n          <li class=\"nav-item\"><a href=\"timetable.html\" class=\"nav-link\">\u30BF\u30A4\u30E0\u30C6\u30FC\u30D6\u30EB</a></li>\n          <li class=\"nav-item\"><a href=\"event.html\" class=\"nav-link\">\u4F01\u753B</a></li>\n          <li class=\"nav-item\"><a href=\"info.html\" class=\"nav-link\">\u304A\u77E5\u3089\u305B</a></li> -->\n      </ul>\n    </div>\n  </nav>\n</div>";
var jumbotron = " <!-- Jumbotron -->\n <section>\n    <div class=\"jumbotron my_jumbotron jumbotron-fluid\" style=\"background-image: url(./img/".concat(picture_name, ");\">\n      <div class=\"container\">\n        <p class=\"my_page-title text-center\">").concat(page_title, "</p>\n      </div>\n    </div>\n  </section>\n  <!-- Jumbotron -->");
var footer = "<section class=\"footer\">\n  <div class=\"row justify-content-center\" id=\"footer-row\">\n    <div class=\"col-md-6 footer-left\">\n      <div class=\"footer-img\">\n        <a href=\"index.html\">\n          <img src=\"img/logo_demo_w_hiq.png\" alt=\"\u3084\u3069\u796D\u30ED\u30B4\" class=\"logo\">\n        </a>\n      </div>\n      <hr class=\"light\">\n      <div class=\"\">\n        <p><a href=\"https://twitter.com/yadokari_sai\"><i class=\"fab fa-twitter fa-lg\"></i>\u3084\u3069\u304B\u308A\u796D\u516C\u5F0FTwitter</a></p>\n      </div>\n      <div class=\"\">\n        <p><i class=\"fa fa-envelope\"></i>yadosai.tkb@gmail.com</p>\n      </div>\n    </div>\n    <div class=\"col-md-3 footer-center\">\n      <hr class=\"light\">\n      <p><a class=text-decoration-none href=\"index.html\">\u30C8\u30C3\u30D7</a></p>\n      <hr class=\"light\">\n      <p><a href=\"about.html\">\u3084\u3069\u304B\u308A\u796D\u3068\u306F</a></p>\n      <p><a href=\"support.html\">\u3054\u652F\u63F4\u306E\u304A\u9858\u3044</a></p>\n      <p><a href=\"shinkan.html\">\u65B0\u6B53\u60C5\u5831</a></p>\n      <p><a href=\"apply.html\">\u7533\u3057\u8FBC\u307F</a></p>\n      <p><a href=\"link.html\">\u30EA\u30F3\u30AF</a></p>\n      <p><a href=\"news.html\">\u30CB\u30E5\u30FC\u30B9</a></p>\n\n\n    </div>\n    <div class=\"col-md-3 footer-right\">\n      <hr class=\"light\">\n      <p>\u304A\u796D\u308A\u60C5\u5831</p>\n      <hr class=\"light\">\n      <p><a href=\"access.html\">\u30A2\u30AF\u30BB\u30B9</a></p>\n      <p class=\"no-active\">\u30DE\u30C3\u30D7</p>\n      <p class=\"no-active\">\u30BF\u30A4\u30E0\u30C6\u30FC\u30D6\u30EB</p>\n      <p class=\"no-active\">\u6A21\u64EC\u5E97</p>\n      <p><a href=\"event.html\">\u4F01\u753B</a></p>\n      <p class=\"no-active\">\u6D74\u8863\u30B3\u30F3\u30C6\u30B9\u30C8</p>\n      <p class=\"no-active\">\u5FA1\u8F3F</p>\n      <p class=\"no-active\"><a href=\"info.html\">\u304A\u77E5\u3089\u305B</a></p>\n    </div>\n    <div class=\"col-12 copyright\">\n      <h5>&copy;2020\u5E74\u5EA6\u5BBF\u820E\u796D\u5B9F\u884C\u59D4\u54E1\u4F1A</h5>\n      <p><small>\u5F53\u30B5\u30A4\u30C8\u3067\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u30ED\u30B0\u306E\u53CE\u96C6\u30FB\u89E3\u6790\u306BGoogle \u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u3066\u304A\u308A\u307E\u3059\u3002<br>\n          Google \u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9\u3067\u306FCookie\u3092\u4F7F\u7528\u3057\u3001\u500B\u4EBA\u3092\u7279\u5B9A\u3059\u308B\u60C5\u5831\u3092\u542B\u307E\u305A\u306B\u30ED\u30B0\u3092\u53CE\u96C6\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u307E\u305F\u3001\u53CE\u96C6\u3055\u308C\u308B\u30ED\u30B0\u306FGoogle\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u57FA\u3065\u3044\u3066\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002\n        </small></p>\n    </div>\n  </div>\n</section>";
var webAd = "<section class=\"web-ad\">\n\n  <div class=\"sponsors row justify-content-center\">\n    <div class=\"sponsor-logo  my-shadow\">\n      <a href=\"support.html\"><img src=\"img/offer.svg\" alt=\"\u5E83\u544A\u52DF\u96C6\" class=\"web-ad-content \"></a>\n    </div>\n    <div class=\"sponsor-logo my-shadow\">\n      <a href=\"https://mentoru.jp/info/tsukuba.html\" target=\"_blank\"><img src=\"img/\u3081\u3093\u3068\u308B\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3.svg\" alt=\"\u3081\u3093\u3068\u308B\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\"\n          class=\"web-ad-content\"></a>\n    </div>\n    <div class=\"sponsor-logo\">\n      <img src=\"img/\u5C0F\u5C71\u5546\u4F1A.svg\" alt=\"\u5C0F\u5C71\u5546\u4F1A\" class=\"web-ad-content\">\n    </div>\n    <div class=\"sponsor-logo\">\n      <img src=\"img/\u6E05\u516D\u5C4B.svg\" alt=\"\u6E05\u516D\u5C4B\" class=\"web-ad-content\">\n    </div>\n    <div class=\"sponsor-logo\">\n      <img src=\"img/\u5B66\u5712\u4E2D\u592E\u81EA\u52D5\u8ECA\u5B66\u6821.svg\" alt=\"\u5B66\u5712\u4E2D\u592E\u81EA\u52D5\u8ECA\u5B66\u6821\" class=\"web-ad-content\">\n    </div>\n    <div class=\"sponsor-logo\">\n      <img src=\"img/\u30DB\u30C6\u30EB\u30EB\u30FC\u30C8\u3064\u304F\u3070.svg\" alt=\"\u30DB\u30C6\u30EB\u30EB\u30FC\u30C8\u3064\u304F\u3070\" class=\"web-ad-content\">\n    </div>\n  </div>\n</section>";

function writeHeader() {
  document.write(header);
  console.log("header");
}

function writeJumbotron(page_title, picture_name) {
  var default_pic_name = "jumbotron_test2.jpg";

  if (page_title == undefined) {
    return;
  }

  if (picture_name == undefined) {
    picture_name = default_pic_name;
  }

  document.write(jumbotron);
  console.log("jumbotron");
}

function writeWebAd() {
  document.write(webAd);
  console.log("webAd");
}

function writeFooter() {
  console.log("footer");
}