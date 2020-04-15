const header = `<div class="fixed-top">
  <nav class="navbar navbar-expand-md">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
      <i class="fas fa-bars"></i>
    </button>
    <a href="index.html"><img src="img/logo_demo_w_hiq.png" alt="" class="logo"></a>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a href="shinkan.html" class="nav-link">新歓情報</a></li>
        <li class="nav-item"><a href="apply.html" class="nav-link">申し込み</a></li>
        <li class="nav-item"><a href="info.html" class="nav-link">お知らせ</a></li>
        <!-- <li class="nav-item active"><a href="#" class="nav-link">模擬店検索・一覧</a></li>
          <li class="nav-item"><a href="map.html" class="nav-link">マップ</a></li>
          <li class="nav-item"><a href="timetable.html" class="nav-link">タイムテーブル</a></li>
          <li class="nav-item"><a href="event.html" class="nav-link">企画</a></li>
          <li class="nav-item"><a href="info.html" class="nav-link">お知らせ</a></li> -->
      </ul>
    </div>
  </nav>
</div>`;
const jumbotron = ` <!-- Jumbotron -->
 <section>
    <div class="jumbotron my_jumbotron jumbotron-fluid" style="background-image: url(./img/${picture_name});">
      <div class="container">
        <p class="my_page-title text-center">${page_title}</p>
      </div>
    </div>
  </section>
  <!-- Jumbotron -->`;
const footer = `<section class="footer">
  <div class="row justify-content-center" id="footer-row">
    <div class="col-md-6 footer-left">
      <div class="footer-img">
        <a href="index.html">
          <img src="img/logo_demo_w_hiq.png" alt="やど祭ロゴ" class="logo">
        </a>
      </div>
      <hr class="light">
      <div class="">
        <p><a href="https://twitter.com/yadokari_sai"><i class="fab fa-twitter fa-lg"></i>やどかり祭公式Twitter</a></p>
      </div>
      <div class="">
        <p><i class="fa fa-envelope"></i>yadosai.tkb@gmail.com</p>
      </div>
    </div>
    <div class="col-md-3 footer-center">
      <hr class="light">
      <p><a class=text-decoration-none href="index.html">トップ</a></p>
      <hr class="light">
      <p><a href="about.html">やどかり祭とは</a></p>
      <p><a href="support.html">ご支援のお願い</a></p>
      <p><a href="shinkan.html">新歓情報</a></p>
      <p><a href="apply.html">申し込み</a></p>
      <p><a href="link.html">リンク</a></p>
      <p><a href="news.html">ニュース</a></p>


    </div>
    <div class="col-md-3 footer-right">
      <hr class="light">
      <p>お祭り情報</p>
      <hr class="light">
      <p><a href="access.html">アクセス</a></p>
      <p class="no-active">マップ</p>
      <p class="no-active">タイムテーブル</p>
      <p class="no-active">模擬店</p>
      <p><a href="event.html">企画</a></p>
      <p class="no-active">浴衣コンテスト</p>
      <p class="no-active">御輿</p>
      <p class="no-active"><a href="info.html">お知らせ</a></p>
    </div>
    <div class="col-12 copyright">
      <h5>&copy;2020年度宿舎祭実行委員会</h5>
      <p><small>当サイトでは、アクセスログの収集・解析にGoogle アナリティクスを使用しております。<br>
          Google アナリティクスではCookieを使用し、個人を特定する情報を含まずにログを収集しております。また、収集されるログはGoogleのプライバシーポリシーに基づいて管理されます。
        </small></p>
    </div>
  </div>
</section>`;
const webAd = `<section class="web-ad">

  <div class="sponsors row justify-content-center">
    <div class="sponsor-logo  my-shadow">
      <a href="support.html"><img src="img/offer.svg" alt="広告募集" class="web-ad-content "></a>
    </div>
    <div class="sponsor-logo my-shadow">
      <a href="https://mentoru.jp/info/tsukuba.html" target="_blank"><img src="img/めんとるステーション.svg" alt="めんとるステーション"
          class="web-ad-content"></a>
    </div>
    <div class="sponsor-logo">
      <img src="img/小山商会.svg" alt="小山商会" class="web-ad-content">
    </div>
    <div class="sponsor-logo">
      <img src="img/清六屋.svg" alt="清六屋" class="web-ad-content">
    </div>
    <div class="sponsor-logo">
      <img src="img/学園中央自動車学校.svg" alt="学園中央自動車学校" class="web-ad-content">
    </div>
    <div class="sponsor-logo">
      <img src="img/ホテルルートつくば.svg" alt="ホテルルートつくば" class="web-ad-content">
    </div>
  </div>
</section>`;
function writeHeader() {
  document.write(header);
  console.log("header");
}

function writeJumbotron(page_title, picture_name) {
  const default_pic_name = "jumbotron_test2.jpg";
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
