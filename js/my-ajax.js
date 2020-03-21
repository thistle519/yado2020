function returnTargetBooth(boothData, target) {
  var booth_num = target.substr(5, 2); //numには模擬店番号かステージ番号が入る。1メインステージ2ミニステージ3パフォーマンス会場4平共前ステージ
  booth_num=Number(booth_num)
  console.log(booth_num+2);
  const amount_booth = Object.keys(boothData).length;
  const pic_name = "NoImage.jpg";
  var boothArray = [];
  for (var i = 0; i < amount_booth; i++) {
    console.log("DEBUG1:", boothData["shop" + String(i + 1)]["area"]);

    if (booth_num == 28) {
      if (
        Number(boothData["shop" + String(i + 1)]["area"]) >= booth_num &&
        Number(boothData["shop" + String(i + 1)]["area"]) <= booth_num + 1
      ) {
        boothArray.push(boothData["shop" + String(i + 1)]);
        console.log("DEBUG2.1:pushed",Number(boothData["shop" + String(i + 1)]["area"]));
      }
    } else {
      if (
        Number(boothData["shop" + String(i + 1)]["area"]) >= booth_num &&
        Number(boothData["shop" + String(i + 1)]["area"]) <= booth_num + 2
      ) {
        boothArray.push(boothData["shop" + String(i + 1)]);
        console.log("DEBUG2.1:pushed",Number(boothData["shop" + String(i + 1)]["area"]));
      }
    }
  }
  CONTENT_HEAD = '<div class="container-fluid">' + '<div class="row ">';
  CONTENT_BOTTOM =
    '  <div class="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
    '    <a class="js-modal-close" href="">閉じる</a>' +
    "   </div>" +
    "  </div>" +
    "</div>";

  content = "";
  for (var i = 0; i < boothArray.length; i++) {
    content +=
      '<div class="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">' +
      "<p>" +
      '<span class="text-center">' +
      '<img src="img/booth_pic/' +
      pic_name +
      '" class="modal-img">' +
      "</span>" +
      '<span class="modal_title">' +
      boothArray[i]["name"] +
      "</span><br>" +
      '<span class="mini">' +
      boothArray[i]["owner"] +
      "<br>" +
      "ブース番号:" +
      boothArray[i]["area"] +
      "<br>" +
      "</span>" +
      "<span>" +
      boothArray[i]["message"] +
      "  </span>" +
      "</p>" +
      "<hr>" +
      " </div>";
  }
  console.log("DEBUG3:", content);
  return CONTENT_HEAD + content + CONTENT_BOTTOM;
}
function outputStage(data, stageName) {
  switch (stageName) {
    case "stageHirakyo":
      break;
    case "stageMini":
      break;
    case "stageMain":
      break;
    case "stageMikoshi":
      break;
    default:
      console.log("ERROR: stage");
  }
}

$(function(e) {
  $("#imageFullScreen").smartZoom({ containerClass: "zoomableContainer" });
  $("img[usemap]").rwdImageMaps();

  var json_Booth = $.getJSON("js/include/booth.json");
  var json_Stage = $.getJSON("js/include/stage.json");

  $.when(json_Booth, json_Stage)
    .done(function(boothData, stageData) {
      $(".js-modal-open").each(function() {
        $(this).on("click", function() {
          var modal = document.getElementById("modal01");
          $(modal).fadeIn();
          return false; //書かないとリンク要素として処理される
        });

        $(this).on("click", function() {
          var target = $(this).data("target");
          if (String(target).match(/stage/)) {
            content = outputStage(stageData[0], target);
          } else if (String(target).match(/booth/)) {
            content = returnTargetBooth(boothData[0], target);
          } else {
            console.log("ERROR1");
          }
          document.getElementById("modal__content").innerHTML = content;
        });
      });
      $(".js-modal-close").on("click", function() {
        $(".js-modal").fadeOut();

        return false; //書かないとリンク要素として処理される
      });
    })
    .fail(function(boothData, stageData) {
      console.log("ERROR2:fail get JSON");
    });
});
