$(document).ready(() => {
  // 商品データ
  const products = [
    {
      id: 1,
      name: "サウナハット",
      price: "3,800",
      description:
        "障がい者アーティスト山田太郎氏の鮮やかな色彩のアートをプリントしたサウナハット。耐熱性と快適さを兼ね備え、サウナでの時間をより特別なものにします。",
      shortDescription: `障がい者アーティスト山田太郎氏の鮮やかな色彩のアートをプリントしたサウナハット。耐熱性と快適さを兼ね備え、サウナでの時間をより特別なものにします。

【アーティスト】山田太郎
【素材】フェルト生地（ポリエステル100%）
【サイズ】頭囲約56〜62cm（調節可能）

サウナハットは、高温のサウナ室内で頭部を熱から守るために設計されています。このアートサウナハットは、機能性だけでなく、障がい者アーティストの作品を身に着けることで、アートの新しい楽しみ方を提案します。

お手入れ方法：手洗い推奨、陰干し、アイロン使用不可`,
      image: "images/saunahat_black.jpg",
      images: ["images/saunahat_black.jpg", "images/saunahat_beige.jpg", "images/saunahat_art.jpg"],
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
    },
    {
      id: 2,
      name: "カラフルアートソックス",
      price: "1,500",
      description:
        "佐藤花子氏の独特な線画アートがデザインされた靴下。柔らかな肌触りと耐久性を兼ね備え、日常に彩りを添えます。サイズは23-25cmと25-27cmをご用意。",
      shortDescription: `佐藤花子氏の独特な線画アートがデザインされた靴下。柔らかな肌触りと耐久性を兼ね備え、日常に彩りを添えます。

【アーティスト】佐藤花子
【素材】コットン80%、ポリエステル15%、ポリウレタン5%
【サイズ】23-25cm（レディース向け）、25-27cm（メンズ向け）

佐藤花子氏は繊細なタッチと独特の色彩感覚で知られる障がい者アーティストです。このアートソックスは、彼女の作品を日常に取り入れられるアイテムとして企画されました。履くたびに気分が上がる鮮やかなデザインは、ファッションのアクセントとしても最適です。

お手入れ方法：洗濯ネット使用で洗濯機可、漂白剤使用不可、アイロン低温可`,
      image: "images/top3.jpg",
      images: ["images/top3.jpg"],
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
    },
    {
      id: 3,
      name: "アートボクサーパンツ",
      price: "2,200",
      description:
        "鈴木一郎氏の抽象画をプリントしたボクサーパンツ。オーガニックコットン100%で肌に優しく、快適な着心地です。S、M、Lの3サイズ展開。",
      shortDescription: `鈴木一郎氏の抽象画をプリントしたボクサーパンツ。オーガニックコットン100%で肌に優しく、快適な着心地です。

【アーティスト】鈴木一郎
【素材】オーガニックコットン100%
【サイズ】S（ウエスト68-76cm）、M（ウエスト76-84cm）、L（ウエスト84-94cm）

鈴木一郎氏は、幼少期の事故により身体障害を持ちながらも、リハビリの一環として始めた絵画が人生を変えたアーティストです。このボクサーパンツは、鈴木氏の代表作「光と影の交差」をプリントしたアイテムです。

お手入れ方法：洗濯ネット使用で洗濯機可（30℃以下）、漂白剤使用不可、アイロン低温可`,
      image: "images/top4.jpg",
      images: ["images/top4.jpg"],
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
    },
    {
      id: 4,
      name: "アートトートバッグ",
      price: "2,800",
      description:
        "高橋誠氏の色彩豊かなアートをプリントしたトートバッグ。丈夫なキャンバス生地で、日常使いからお出かけまで幅広く活躍します。内ポケット付き。",
      shortDescription: `高橋誠氏の色彩豊かなアートをプリントしたトートバッグ。丈夫なキャンバス生地で、日常使いからお出かけまで幅広く活躍します。

【アーティスト】高橋誠
【素材】綿100%（厚手キャンバス）
【サイズ】幅40cm × 高さ35cm × マチ15cm、持ち手の長さ：約60cm

高橋誠氏は、自閉症スペクトラムを持ちながらも、独自の色彩感覚と構図で注目を集めるアーティストです。このトートバッグは、厚手のキャンバス生地を使用し、内側には小物を整理できるポケットを2つ配置しています。

お手入れ方法：手洗い推奨、漂白剤使用不可、アイロン中温可`,
      image: "images/top1.jpg",
      images: ["images/top1.jpg"],
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
    },
    {
      id: 5,
      name: "アートポスター",
      price: "1,800",
      description:
        "中村洋子氏の繊細なタッチで描かれた風景画のポスター。A3サイズで、お部屋のインテリアとして最適です。高品質な紙を使用し、色鮮やかに仕上げています。",
      shortDescription: `中村洋子氏の繊細なタッチで描かれた風景画のポスター。A3サイズで、お部屋のインテリアとして最適です。

【アーティスト】中村洋子
【素材】高品質アート専用紙（マット仕上げ）
【サイズ】A3（297mm × 420mm）

中村洋子氏は、ダウン症を持ちながらも、独自の視点で風景を捉える才能を持つアーティストです。このポスターは、高品質なアート専用紙を使用し、中村氏の繊細なタッチと色彩を忠実に再現しています。

注意事項：額縁は付属していません、直射日光や湿気の多い場所での保管・掲示は避けてください`,
      image: "images/top5.jpg",
      images: ["images/top5.jpg"],
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
    },
    {
      id: 6,
      name: "デザインマスク",
      price: "980",
      description:
        "田中健太氏のポップなデザインが施された布マスク。洗って繰り返し使える環境に優しい素材を使用。3層構造で安心の防護性能を備えています。",
      shortDescription: `田中健太氏のポップなデザインが施された布マスク。洗って繰り返し使える環境に優しい素材を使用。3層構造で安心の防護性能を備えています。

【アーティスト】田中健太
【素材】表地・裏地：オーガニックコットン100%、中層：不織布フィルター
【サイズ】大人用（約17cm × 9.5cm）、子供用（約14cm × 8cm）

田中健太氏は、発達障害を持ちながらも、ポップでカラフルなデザインで人気を集めるアーティストです。このデザインマスクは3層構造で飛沫をしっかりガードしながら、通気性も確保しています。

お手入れ方法：手洗い推奨、洗濯ネット使用で洗濯機可（30℃以下）、漂白剤使用不可`,
      image: "images/top3.jpg",
      images: ["images/top3.jpg"],
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
    },
  ]

  // 商品一覧を表示
  function renderProducts() {
    const productsContainer = $("#products-container")
    productsContainer.empty()

    products.forEach((product) => {
      const productCard = `
        <div class="product-card" data-id="${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-details">
            <h3>${product.name}</h3>
            <p class="price">¥${product.price}（税込・送料別）</p>
            <p class="description">${product.description}</p>
            <div class="purchase-links" data-prevent-click="true">
              <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer" class="purchase-link">Amazon</a>
              <a href="${product.baseUrl}" target="_blank" rel="noopener noreferrer" class="purchase-link">BASE</a>
            </div>
          </div>
        </div>
      `
      productsContainer.append(productCard)
    })
  }

  renderProducts()

  // 商品カードクリック時の処理
  $(document).on("click", ".product-card", function (e) {
    if ($(e.target).closest("[data-prevent-click]").length === 0) {
      const productId = $(this).data("id")
      const product = products.find((p) => p.id === productId)

      if (product) {
        showProductModal(product)
      }
    }
  })

  // 商品詳細モーダルを表示
  function showProductModal(product) {
    $("#product-modal-name").text(product.name)
    $("#product-modal-price").text(`¥${product.price}（税込・送料別）`)
    $("#product-modal-description").html(product.shortDescription.replace(/\n/g, "<br>"))
    $("#amazon-link").attr("href", product.amazonUrl)
    $("#base-link").attr("href", product.baseUrl)

    // スライダー画像を設定
    const sliderContainer = $("#product-slider-container")
    const sliderIndicators = $("#slider-indicators")
    sliderContainer.empty()
    sliderIndicators.empty()

    product.images.forEach((image, index) => {
      const isActive = index === 0 ? "active" : ""
      sliderContainer.append(`
        <div class="product-slide ${isActive}">
          <img src="${image}" alt="${product.name} - 画像${index + 1}">
        </div>
      `)

      sliderIndicators.append(`
        <span class="slider-indicator ${isActive}" data-index="${index}"></span>
      `)
    })

    $("#product-modal").addClass("active")
    $("body").css("overflow", "hidden")
  }

  // スライダーの操作
  let currentSlideIndex = 0

  $("#prev-slide").click(() => {
    const slides = $(".product-slide")
    const indicators = $(".slider-indicator")

    if (slides.length > 1) {
      $(slides[currentSlideIndex]).removeClass("active")
      $(indicators[currentSlideIndex]).removeClass("active")

      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length

      $(slides[currentSlideIndex]).addClass("active")
      $(indicators[currentSlideIndex]).addClass("active")
    }
  })

  $("#next-slide").click(() => {
    const slides = $(".product-slide")
    const indicators = $(".slider-indicator")

    if (slides.length > 1) {
      $(slides[currentSlideIndex]).removeClass("active")
      $(indicators[currentSlideIndex]).removeClass("active")

      currentSlideIndex = (currentSlideIndex + 1) % slides.length

      $(slides[currentSlideIndex]).addClass("active")
      $(indicators[currentSlideIndex]).addClass("active")
    }
  })

  $(document).on("click", ".slider-indicator", function () {
    const index = $(this).data("index")
    const slides = $(".product-slide")
    const indicators = $(".slider-indicator")

    $(slides[currentSlideIndex]).removeClass("active")
    $(indicators[currentSlideIndex]).removeClass("active")

    currentSlideIndex = index

    $(slides[currentSlideIndex]).addClass("active")
    $(indicators[currentSlideIndex]).addClass("active")
  })

  // 特集商品のフリップアニメーション
  $(".flip-container").click(function () {
    $(this).find(".flipper").css("animation", "none")
    setTimeout(() => {
      $(this).find(".flipper").css("transform", "rotateY(180deg)")
    }, 10)
  })
})
