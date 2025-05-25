$(document).ready(() => {
  // ローディングアニメーション
  setTimeout(() => {
    $("#loading-animation").fadeOut(1000)
  }, 3000)

  // 現在年を設定
  $("#current-year").text(new Date().getFullYear())

  // モバイルメニュー
  $(".mobile-menu-btn").click(() => {
    $("#mobile-menu").addClass("active")
    $("body").css("overflow", "hidden")
  })

  $(".mobile-menu-close, .mobile-menu-overlay").click(() => {
    $("#mobile-menu").removeClass("active")
    $("body").css("overflow", "")
  })

  // ナビゲーションリンクのスクロール
  $(".nav-link, .mobile-nav-link").click(function () {
    const sectionId = $(this).data("section")
    const headerHeight = $(".header").height()
    if (sectionId) {
      const section = $("#" + sectionId)
      if (section.length) {
        $("html, body").animate(
          {
            scrollTop: section.offset().top - headerHeight,
          },
          800,
        )
        $("#mobile-menu").removeClass("active")
        $("body").css("overflow", "")
      }
    }
  })

  // ヘッダースタイル変更
  function updateHeaderStyle() {
    const scrollTop = $(window).scrollTop()
    const heroHeight = $(".hero-slider").height()
    const headerHeight = $(".header").height()
    const headerCenter = headerHeight / 2

    if ($(".hero-slider").length) {
      // トップページの場合
      const heroBottom = $(".hero-slider").offset().top + heroHeight
      if (heroBottom - scrollTop <= headerCenter || window.innerWidth < 768) {
        $("#header").addClass("header-white")
        $("#header-logo").attr("src", "images/partofme_logo_black.png")
      } else {
        $("#header").removeClass("header-white")
        $("#header-logo").attr("src", "images/partofme_logo_white.png")
      }
    } else {
      // 他のページの場合
      $("#header").addClass("header-white")
      $("#header-logo").attr("src", "images/partofme_logo_black.png")
    }
  }

  $(window).scroll(updateHeaderStyle)
  $(window).resize(updateHeaderStyle)
  updateHeaderStyle()

  // スライダー
  // 設定
  const SLIDE_INTERVAL = 7000; // 7秒
  const TRANSITION_DURATION = 1000; // 1秒
  const TOTAL_SLIDES = $('.slider-image').length;
  
  let currentIndex = 0;
  let isTransitioning = false;
  let slideInterval;

  // スライド切り替え関数
  function changeSlide(nextIndex) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // 現在のスライドにトランジションクラスを追加
    $(`.slider-image[data-index="${currentIndex}"]`).addClass('transitioning');
    $(`.mobile-info[data-index="${currentIndex}"]`).addClass('transitioning');
    $(`.desktop-info[data-index="${currentIndex}"]`).addClass('transitioning');
    
    setTimeout(() => {
      // 現在のスライドからアクティブクラスを削除
      $(`.slider-image[data-index="${currentIndex}"]`).removeClass('active transitioning');
      $(`.mobile-info[data-index="${currentIndex}"]`).removeClass('active transitioning');
      $(`.desktop-info[data-index="${currentIndex}"]`).removeClass('active transitioning');
      
      // 次のスライドにアクティブクラスを追加
      currentIndex = nextIndex;
      $(`.slider-image[data-index="${currentIndex}"]`).addClass('active');
      $(`.mobile-info[data-index="${currentIndex}"]`).addClass('active');
      $(`.desktop-info[data-index="${currentIndex}"]`).addClass('active');
      
      isTransitioning = false;
    }, TRANSITION_DURATION);
  }

  // 次のスライドへ
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % TOTAL_SLIDES;
    changeSlide(nextIndex);
  }

  // 自動再生開始
  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
  }

  // 自動再生停止
  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }

  // 自動再生リスタート
  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // スワイプ対応（モバイル用）
  let touchStartX_firstView = 0;
  let touchEndX_firstView = 0;

  $('.slider-container').on('touchstart', function(e) {
    touchStartX = e.originalEvent.touches[0].clientX;
  });

  $('.slider-container').on('touchend', function(e) {
    touchEndX_firstView = e.originalEvent.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX_firstView - touchEndX_firstView;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // 左スワイプ - 次へ
        nextSlide();
      } else {
        // 右スワイプ - 前へ
        const prevIndex = (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
        changeSlide(prevIndex);
      }
      restartAutoPlay();
    }
  }

  // キーボード操作
  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
      changeSlide(prevIndex);
      restartAutoPlay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      restartAutoPlay();
    }
  });

  // ページの可視性変更時の処理
  $(document).on('visibilitychange', function() {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // 初期化
  startAutoPlay();

  // サウナハット塗り替え
$('.sauna-hat-container').on('click', function () {
  $(this).find('.mask').animate({
    height: 0
  }, 3000, 'linear');
});


  // ギャラリーモバイルスワイプ
  let touchStartX = 0
  let touchEndX = 0
  const gallerySlides = $(".gallery-slide")
  const galleryIndicators = $(".gallery-indicator")
  let currentGallerySlide = 0

  $(".gallery-carousel").on("touchstart", (e) => {
    touchStartX = e.originalEvent.touches[0].clientX
  })

  $(".gallery-carousel").on("touchmove", (e) => {
    touchEndX = e.originalEvent.touches[0].clientX
  })

  $(".gallery-carousel").on("touchend", () => {
    if (touchStartX - touchEndX > 75) {
      // 左スワイプ
      currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length
    } else if (touchEndX - touchStartX > 75) {
      // 右スワイプ
      currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length
    }

    gallerySlides.removeClass("active")
    $(gallerySlides[currentGallerySlide]).addClass("active")

    galleryIndicators.removeClass("active")
    $(galleryIndicators[currentGallerySlide]).addClass("active")
  })

  // ニュースモーダル
  const newsData = [
    {
      id: 1,
      title: "新商品発売のお知らせ",
      date: "2023.12.15",
      image: "images/top1.jpg",
      content: `障がい者アーティスト5名の作品をデザインに取り入れた新商品ラインナップを発表しました。

今回のコレクションでは、山田太郎氏の鮮やかな色彩のアートをプリントしたサウナハット、佐藤花子氏の独特な線画アートがデザインされた靴下、鈴木一郎氏の抽象画をプリントしたボクサーパンツ、高橋誠氏の色彩豊かなアートをプリントしたトートバッグなど、日常で使える実用的なアイテムを多数ラインナップしています。

これらの商品は、オンラインストアおよび全国の取扱店舗にて販売開始いたしました。売上の一部はアーティストへの報酬や、障がい者アート活動の支援に使用されます。

ぜひ、彼らの才能と創造性が詰まった特別なアイテムをお手に取ってみてください。`,
    },
    {
      id: 2,
      title: "展示会開催のお知らせ",
      date: "2023.11.20",
      image: "images/top2.jpg",
      content: `東京・大阪・福岡の3都市で「障がい者アート展2023」を開催します。

【開催日程】
・東京会場：2023年12月1日(金)〜12月10日(日) 東京アートギャラリー
・大阪会場：2023年12月15日(金)〜12月24日(日) 大阪現代アートミュージアム
・福岡会場：2024年1月5日(金)〜1月14日(日) 福岡アートスペース

本展示会では、全国の障がい者支援施設から選ばれた30名のアーティストによる約100点の作品を展示します。絵画、彫刻、織物など多様な表現方法による作品をご覧いただけます。

また、会期中には作家本人によるワークショップやトークイベントも予定しています。詳細なスケジュールは公式ウェブサイトをご確認ください。

入場料は一般1,000円、学生800円、中学生以下無料です。チケットは各会場およびオンラインにて販売中です。`,
    },
    {
      id: 3,
      title: "コラボレーション商品発売",
      date: "2023.10.05",
      image: "images/top3.jpg",
      content: `国内大手アパレルブランド「STYLE FUSION」とのコラボレーションによる限定Tシャツコレクションが発売されました。

今回のコラボレーションでは、Part of Meに所属する3名の障がい者アーティストの作品をデザインに採用した限定Tシャツ5種類を展開しています。素材には環境に配慮したオーガニックコットンを使用し、サステナブルな取り組みも意識した商品となっています。

価格は各4,800円（税込）で、STYLE FUSIONの全国店舗およびオンラインストアにて販売中です。また、Part of Meのオンラインストアでも取り扱っています。

このコラボレーションを通じて、障がい者アートの魅力を多くの方に知っていただくとともに、アーティストの経済的支援にもつながる取り組みとなっています。売上の一部はアーティストへの報酬および障がい者アート支援活動に充てられます。`,
    },
    {
      id: 4,
      title: "アートワークショップ開催",
      date: "2023.09.10",
      image: "images/top4.jpg",
      content: `障がい者アーティストによるワークショップを全国5都市で開催します。

このワークショップでは、Part of Meに所属するアーティストが講師となり、独自の表現方法や創作プロセスを参加者と共有します。障がいの有無に関わらず、アートを通じたコミュニケーションと創造性の可能性を体験できる貴重な機会です。

【開催都市・日程】
・東京：2023年10月7日(土)、8日(日)
・大阪：2023年10月21日(土)、22日(日)
・名古屋：2023年11月4日(土)、5日(日)
・福岡：2023年11月18日(土)、19日(日)
・札幌：2023年12月2日(土)、3日(日)

各会場とも10:00〜12:00、14:00〜16:00の2部制で開催します。参加費は一般3,000円、学生2,000円、小学生以下1,000円です。材料費込みの価格となります。

事前予約制となっておりますので、公式ウェブサイトからお申し込みください。各回定員20名で、先着順となります。`,
    },
    {
      id: 5,
      title: "新規アーティスト募集",
      date: "2023.08.20",
      image: "images/top5.jpg",
      content: `Part of Meでは、新たに活動を共にする障がい者アーティストを募集しています。

絵画、イラスト、写真、彫刻など、ジャンルは問いません。独自の視点と表現方法を持ち、作品を通じて社会とつながりたいという思いをお持ちの方を広く募集します。

【応募資格】
・障がい者手帳をお持ちの方
・定期的に創作活動を行っている方
・年齢不問

【選考方法】
1. ポートフォリオ審査（作品5点以上の写真）
2. 面談（オンライン可）
3. トライアル期間（3ヶ月）

選ばれたアーティストには、作品の商品化、展示会出展、ワークショップ講師など、様々な活動機会を提供します。また、作品使用料や販売収益の一部をアーティスト本人に還元する仕組みを整えています。

応募方法の詳細は公式ウェブサイトをご確認ください。応募締切は2023年9月30日です。`,
    },
    {
      id: 6,
      title: "海外展示会参加決定",
      date: "2023.07.15",
      image: "images/top1.jpg",
      content: `ニューヨークで開催される国際障がい者アート展「Diverse Expressions 2024」に、Part of Meのアーティスト3名が招待されました。

山田太郎氏、佐藤花子氏、鈴木一郎氏の3名が、日本代表として参加することが決定しました。この展示会は、世界30カ国以上から選ばれた障がい者アーティストの作品が一堂に会する国際的なイベントで、2024年3月にニューヨークのモダンアートミュージアムで開催されます。

3名のアーティストは、それぞれ5点の作品を出展予定です。また、会期中には、アーティストによるトークセッションやライブペインティングも予定されています。

この機会を通じて、日本の障がい者アートの魅力を世界に発信するとともに、国際的なネットワークを構築し、今後の活動の幅を広げていきたいと考えています。

渡航費用や滞在費の一部は、クラウドファンディングで募集する予定です。詳細は後日発表いたしますので、ぜひご支援をお願いいたします。`,
    },
  ]

  $(".news-item").click(function () {
    const newsId = $(this).data("id")
    const news = newsData.find((item) => item.id === newsId)

    if (news) {
      $("#news-modal-title").text(news.title)
      $("#news-modal-date").text(news.date)
      $("#news-modal-image").html(`<img src="${news.image}" alt="${news.title}">`)
      $("#news-modal-content").text(news.content)
      $("#news-modal").addClass("active")
      $("body").css("overflow", "hidden")
    }
  })

  // アーティストモーダル
  const artistData = [
    {
      id: 1,
      name: "山田太郎",
      portrait: "images/creative-harmony.png",
      bio: "5歳の時に自閉症と診断されましたが、幼少期から絵を描くことに没頭していました。鮮やかな色彩と大胆な筆致が特徴で、感情を直接的に表現する作風が評価されています。現在は週に3日、アートスタジオで創作活動を行っています。「色彩は私の言葉です。言葉で表現できないことを、色で伝えたいんです」と語ります。",
    },
    {
      id: 2,
      name: "佐藤花子",
      portrait: "images/vibrant-art-market.png",
      bio: "ダウン症を持つ佐藤さんは、20代後半から本格的に絵を描き始めました。繊細な線と独特の色彩感覚で、日常の風景を幻想的に描き出します。「絵を描いているときが一番幸せ」と話す佐藤さんの作品は、国内外の展示会で高い評価を受けています。特に花や植物をモチーフにした作品には、彼女特有の優しい視点が表れています。",
    },
    {
      id: 3,
      name: "鈴木一郎",
      portrait: "images/contemporary-art-viewing.png",
      bio: "幼少期の事故により身体障害を持つ鈴木さんは、リハビリの一環として始めた絵画が人生を変えたと言います。抽象的なパターンと幾何学的な構図が特徴で、「限られた動きの中でも、無限の表現ができることを伝えたい」という思いを込めて創作しています。近年はデジタルアートにも挑戦し、新たな表現方法を模索中です。",
    },
    {
      id: 4,
      name: "中村洋子",
      portrait: "images/contemporary-art-viewing.png",
      bio: "幼い頃から絵を描くことが好きだった中村さんは、30代になってから本格的に創作活動を始めました。日常の何気ない風景を独自の視点で切り取り、温かみのある色彩で表現することが特徴です。「見慣れた景色の中にある美しさを伝えたい」という思いで制作を続けています。",
    },
    {
      id: 5,
      name: "田中誠",
      portrait: "images/vibrant-art-market.png",
      bio: "感情を抽象的な形と色で表現することを得意とする田中さん。自身の経験から生まれる感情の起伏を、キャンバスに自由に表現しています。「言葉では伝えられない感情を、色と形で伝えたい」という思いで創作活動を続けています。",
    },
  ]

  $(".view-artist-btn, .gallery-item").click(function () {
    const artistId = $(this).data("artist")
    const artist = artistData.find((item) => item.id === artistId)

    if (artist) {
      $("#artist-modal-name").text(artist.name)
      $("#artist-modal-portrait").html(`<img src="${artist.portrait}" alt="${artist.name}の写真">`)
      $("#artist-modal-bio").text(artist.bio)
      $("#artist-modal").addClass("active")
      $("body").css("overflow", "hidden")
    }
  })

  // モーダルを閉じる
  $(".modal-close").click(() => {
    $(".modal").removeClass("active")
    $("body").css("overflow", "")
  })

  // モーダル外クリックで閉じる
  $(".modal").click(function (e) {
    if ($(e.target).hasClass("modal")) {
      $(this).removeClass("active")
      $("body").css("overflow", "")
    }
  })
})
