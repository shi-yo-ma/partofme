$(document).ready(() => {
  // ローディングアニメーション
  const hash = window.location.hash;
  if (hash) {
    $("#loading-animation").hide();
    $(window).scrollTop(0);
    setTimeout(() => {
      scrollToSection(hash.substring(1)); // ハッシュがある場合はそのセクションにスクロール
    }, 100);
  } else {
    $("#loading-animation").css("display", "flex");
    setTimeout(() => {
      $("#loading-animation").fadeOut(1000,function () {
      $(this).css("display", "none")});
    }, 3000);
  }

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

  // 1. 監視対象の全要素を取得
  const targets = document.querySelectorAll('.fade-in-target');
  // 2. Intersection Observer のコールバック関数
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 要素が表示領域に入ったら
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible'); // 表示クラスを追加
        observer.unobserve(entry.target); // 一度表示したら監視をやめる（任意）
      }
    });
  }, {
    threshold: 0.1 // 10%が見えたら発動
  });
  // 3. 監視開始
  targets.forEach(target => observer.observe(target));

  // スクロールアニメーション
  function scrollToSection(sectionId) {
    const headerHeight = $(".header").height();
    const section = $("#" + sectionId);
    if (section.length) {
      $("html, body").animate(
        {
          scrollTop: section.offset().top - headerHeight,
        },
        800
      );
    }
  }
  
  // ナビゲーションリンクのスクロール
  $(".nav-link, .mobile-nav-link").click(function (e) {
    const sectionId = $(this).data("section");
    const currentPage = window.location.pathname;

    if (sectionId) {
      if (currentPage.endsWith("index.html") || currentPage === "/") {
        e.preventDefault(); // ページ遷移抑制
        scrollToSection(sectionId);
        $("#mobile-menu").removeClass("active");
        $("body").css("overflow", "");
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
    }
  });

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
        $("#header-logo").attr("src", "images/partofme_logo_black.webp")
      } else {
        $("#header").removeClass("header-white")
        $("#header-logo").attr("src", "images/partofme_logo_white.webp")
      }
    } else {
      // 他のページの場合
      $("#header").addClass("header-white")
      $("#header-logo").attr("src", "images/partofme_logo_black.webp")
    }
  }

  $(window).scroll(updateHeaderStyle)
  $(window).resize(updateHeaderStyle)
  updateHeaderStyle()

  // スマホ画面の高さ取得
  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setVh();
  
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
    touchStartX_firstView = e.originalEvent.touches[0].clientX;
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
let isAnimating = false;

$('.sauna-hat-container').on('click', function () {
  if (isAnimating) return;

  isAnimating = true;
  const $mask = $(this).find('.mask');
  const currentHeight = $mask.height();

  if (currentHeight === 0) {
    // 再表示する（元の高さを指定、例として100%にしておく）
    $mask.stop().animate({
      height: '100%'
    }, 1500, 'linear', function () {
      isAnimating = false;
    });
  } else {
    // 非表示にする
    $mask.stop().animate({
      height: 0
    }, 1500, 'linear', function () {
      isAnimating = false;
    });
  }
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
      id: 6,
      title: "webサイトをリニューアルしました。",
      date: "R7.06.01",
      image: "images/pressrelease1.webp",
      detail: `この度、長らく準備を進めておりましたWebサイトのリニューアルが完了し、本日公開いたしましたことをご報告いたします。今回のリニューアルでは、デザインの一新はもちろんのこと、コンテンツの見直しや構成の変更を行い、より快適に、そしてより便利にご利用いただけるWebサイトを目指しました。

今回のリニューアルを通じて、皆様にPOM webをより身近に感じていただき、より一層ご満足いただけるよう努めてまいります。今後とも、変わらぬご愛顧を賜りますようお願い申し上げます。`,
    },
    {
      id: 5,
      title: "サウナ施設×アートギャラリーという新たな取り組み",
      date: "R6.11.30~12.1",
      image: "images/pressrelease2.webp",
      detail: `この度、愛媛県松山市にある「SAUNA ALKU」様と協力し、障がい者アート×サウナという新たな取り組みをしました。
そして、アートをご提供してくださったのは、「インクルーシヴ松山　ヒカリのアトリエ」様です。
アートを求めてお越しになられた方、サウナを求めてお越しになられた方の双方にお互いの魅力を感じてもらえるイベントとなりました。
水を感じるアートはシャワー前に。力を感じるアートはサウナ室前に。

どんな場所でも、彩り、ぬりかえることの出来るアートの力を再確認しました。`,
    },
    {
      id: 4,
      title: "障がい者アート×サウナハットという、未だ世の中にないアイテム制作！",
      date: "R6.11.25",
      image: "images/pressrelease3.webp",
      detail: `この度、サウナハットに障がい者アートを施し、サウナの中でも外でも、見て楽しい・被って楽しいアイテムを制作しました。
こちらにプリントしているのは、
「untitled」という作品で、「インクルーシヴ松山　ヒカリのアトリエ」に通うmiwaというアーティストにより描かれたものです。 
柔らかく優しくも、力強い生きるエネルギーのようなものを感じ、起用させていただきました。

こちらは、令和６年度の愛媛県による「障がい者アート商品化支援事業」に採択されたものになります。`,
    },
    {
      id: 3,
      title: "~Aloha eha festival~ 2024に参加し、企画・出店しました。",
      date: "R6.4.28~4.29",
      image: "images/pressrelease4.webp",
      detail: `例年開催しており、コロナも明け益々盛り上がるアロハエハーフェスティバルにお誘い頂き、参加し、企画・出店いたしました。
青空の下でアートギャラリーを行い、沢山の方にアートをみていただくことが出来ました。

ご参加いただいた企業・団体・施設（敬称略）
・三浦工業株式会社
・就労継続支援A型事業所　樹
・就労継続支援B型事業所　Visee
・LANTANA　FOOD　SERVISE株式会社

協賛いただいた企業（敬称略）
・三浦工業株式会社
・協同組合ビジネスサプライ愛知
・越智クリニック
・原運輸株式会社
・株式会社tomo group`,
    },
    {
      id: 2,
      title: "砥部焼（伝統工芸品）×障がい者アートという取り組みと課題",
      date: "R6.4.10",
      image: "images/pressrelease5.webp",
      detail: `「インクルーシヴ松山」様に依頼し、そこに通う障がい者さんに砥部焼（伝統工芸品）にデザインをてもらいました。
こちらを作った理由としては、世の中になかったものづくり、はもちろん、これを機に砥部焼に興味をもってもらい、窯元の雇用を増やしたいという思いからでした。
愛媛県民には親しみ深い、綺麗な藍色と、割れにくく丈夫な素材。
これを後世に残していくには、窯元が在り続けることが絶対条件であり、少子高齢化のこの時代の最大の課題なのです。

まだまだ無くなってはならない伝統工芸品であることを、この龍から伝えられました。`,
    },
    {
      id: 1,
      title: "Story of cheesecake様とのコラボパッケージをリリースしました。",
      date: "R6.4.26",
      image: "images/pressrelease6.webp",
      detail: `LANTANA FOOD SERVICE株式会社とインクルーシヴ松山とコラボし、
「story of cheesecake」のチーズケーキと愛媛県産をイメージしたパッケージを制作しました。

「日和」というアーティストによる、写実的で、商品のイメージをそのまま表現した素敵なイラストから、愛媛をイメージしデザインしています。


story of cheesecakeはこちら
▼JR 松山駅だんだん通り店
 〒790-0062 愛媛県松山市南江戸１丁目１４−２ JR松山駅だんだん通り 北棟`,
    },
  ]

  // ニュース一覧を表示
  function renderNews() {
    const newsContainer= $("#news-container")
    newsContainer.empty()

    newsData.forEach((news) => {
      let newsCard = '';

      newsCard = `
        <div class="news-item" data-id="${news.id}">
          <div class="news-image">
            <img src="${news.image}" alt="${news.title}">
          </div>
          <div class="news-content">
            <h3>${news.title}</h3>
            <p class="news-date">${news.date}</p>
            <p class="news-detail">${news.detail}</p>
          </div>
        </div>
      `
      newsContainer.append(newsCard)
    })
  }
  
  renderNews()



  $(".news-item").click(function () {
    const newsId = $(this).data("id")
    const news = newsData.find((item) => item.id === newsId)

    if (news) {
      $("#news-modal-title").text(news.title)
      $("#news-modal-date").text(news.date)
      $("#news-modal-image").html(`<img src="${news.image}" alt="${news.title}">`)
      $("#news-modal-detail").text(news.detail)
      $("#news-modal").addClass("active")
      $("body").css("overflow", "hidden")
    }
  })

  // アーティストモーダル
  const artistData = [
    {
      id: 1,
      name: "　　",
      portrait: "images/no_image.webp",
      bio: `プロフィール、準備中です。`,
    },
    {
      id: 2,
      name: "　　",
      portrait: "images/no_image.webp",
      bio: `プロフィール、準備中です。`,
    },
    {
      id: 3,
      name: "はせがわたくみ",
      portrait: "images/artist-hasegawa.webp",
      bio: `重度知的障がいを伴う自閉症。
      小さい頃から絵を描くことが好きで、キャラクターから展開した自分の絵を作り上げ、日々の出来事もまじえた表情豊かな絵を描くようになりました。
      たくみの絵で多くの人々が笑顔になるとうれしいです。
      （たくみ母）`,
    },
    {
      id: 4,
      name: "よしけん",
      portrait: "images/artist-yoshiken.webp",
      bio:  `絵を描くことがとにかく好きで、特に過去に出会った人々の絵や実際の場面を描く。
      人との会話や交流も大好き。
      本人曰く”ものまね”という独特のコミュニケーション方法で会話することが多い。
      日帰りや泊まりのお出かけも大好き。`,
    },
    {
      id: 5,
      name: "　　",
      portrait: "images/no_image.webp",
      bio:  `プロフィール、準備中です。`,
    },
  ]

  const $carousel = $('.gallery-carousel')
  const $slides = $('.gallery-slide')
  const totalSlides = $slides.length
  let currentArtIndex = 0

  // クローンスライドを前後に追加（ループ感のため）
  const $firstClone = $slides.first().clone()
  const $lastClone = $slides.last().clone()

  $carousel.prepend($lastClone)
  $carousel.append($firstClone)

  let $allSlides = $('.gallery-slide')

  function updateCarousel(animate = true) {
    $allSlides.removeClass('active')

    const $target = $allSlides.eq(currentArtIndex + 1);
    $target.addClass('active')

    const slideWidth = $allSlides.eq(currentArtIndex + 1).outerWidth(true)
    const wrapperWidth = $carousel.parent().width()
    const offset = (wrapperWidth / 2) - (slideWidth / 2) - slideWidth * (currentArtIndex + 1)

    if (animate) {
      $carousel.css({
        transition: 'transform 0.5s ease',
        transform: `translateX(${offset}px)`
      })
    } else {
      $target.css('transition', 'none');

      $carousel.css({
        transition: 'none',
        transform: `translateX(${offset}px)`
      })

      void $target[0].offsetHeight;

      $target.css('transition', '');
      
    }
  }

  function goToSlide(index) {
    currentArtIndex = index
    updateCarousel()
  }

  $('.carousel-arrow.prev').on('click', function () {
    if (currentArtIndex <= 0) {
      currentArtIndex = -1
      updateCarousel()
      setTimeout(() => {
        currentArtIndex = totalSlides - 1
        updateCarousel(false)
      }, 500)
    } else {
      currentArtIndex--
      updateCarousel()
    }
  })

  $('.carousel-arrow.next').on('click', function () {
    if (currentArtIndex >= totalSlides - 1) {
      currentArtIndex = totalSlides
      updateCarousel()
      setTimeout(() => {
        currentArtIndex = 0
        updateCarousel(false)
      }, 500)
    } else {
      currentArtIndex++
      updateCarousel()
    }
  })

  // スワイプ対応
  let touchArtStartX = 0
  let touchArtEndX = 0

  $carousel.on('touchstart', function (e) {
    touchArtStartX = e.originalEvent.touches[0].clientX
  })

  $carousel.on('touchmove', function (e) {
    touchArtEndX = e.originalEvent.touches[0].clientX
  })

  $carousel.on('touchend', function () {
    const swipeThreshold = 50
    const diff = touchArtStartX - touchArtEndX

    if (diff > swipeThreshold) {
      $('.carousel-arrow.next').click()
    } else if (diff < -swipeThreshold) {
      $('.carousel-arrow.prev').click()
    }
  })

  $(window).on('resize', function () {
    updateCarousel(false); // アニメーションなしで再描画
  });

  // 初期位置を1番目（クローン後の2番目）に設定
  currentArtIndex = 0
  updateCarousel(false)
  
  $(".view-artist-btn, .gallery-item").click(function () {
    const artistId = $(this).data("artist")
    const artist = artistData.find((item) => item.id === artistId)

    if (artist) {
      $("#artist-modal-name").text(artist.name)
      $("#artist-modal-portrait").html(`<img src="${artist.portrait}" alt="${artist.name}の写真">`)
      $("#artist-modal-bio").html(artist.bio.replace(/\n/g, "<br>"))
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
