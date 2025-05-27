$(document).ready(() => {
  // 商品データ
  const products = [
    {
      id: 1,
      name: "サウナハット（ブラック）",
      price: "5,720（税込）",
      description:
        "障がい者アーティスト山田太郎氏の鮮やかな色彩のアートをプリントしたサウナハット。耐熱性と快適さを兼ね備え、サウナでの時間をより特別なものにします。",
      shortDescription: `障がい者アーティスト山田太郎氏の鮮やかな色彩のアートをプリントしたサウナハット。耐熱性と快適さを兼ね備え、サウナでの時間をより特別なものにします。

【アーティスト】山田太郎
【素材】フェルト生地（ポリエステル100%）
【サイズ】頭囲約56〜62cm（調節可能）

サウナハットは、高温のサウナ室内で頭部を熱から守るために設計されています。このアートサウナハットは、機能性だけでなく、障がい者アーティストの作品を身に着けることで、アートの新しい楽しみ方を提案します。

お手入れ方法：手洗い推奨、陰干し、アイロン使用不可`,
      image: "images/saunahat_black-removebg.png",
      amazonUrl: "https://www.amazon.co.jp/Part-%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88-%EF%BC%92way%E3%82%BF%E3%82%A4%E3%83%97-%E9%9A%9C%E3%81%8C%E3%81%84%E8%80%85%E3%82%A2%E3%83%BC%E3%83%88-%E3%80%8Euntitled%E3%80%8F/dp/B0DQKMK4HB/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3TUGB7MIAKYOM&dib=eyJ2IjoiMSJ9.KhJ1OrC5n3KiRY4FR-4cKfoDyQNBz5CDrSmum5O3gsJ5UmU7Ao29nYDluIOnMjwD1Sieu0aeIkNld8K7S4dukVGUazc9GcUKNaiFE1cADnE5BzS7ULp9MtFbGTOxb_lMvhUEtV8EKBwez9H0-6QDQVoET2PZ_tH0_GbxfFZKK78t7QE2mDENcH1cgIlPCWQ7AhhJyKAiOtk_OVI1k1TxCZvEUP1a2aa5q5oKByzyhhJAEBSZTfpArTuqnpyG7O7yiwYTvI1dAvwdq6ySgTcMfUIFVbvBPOQHeOL9INO14RA.KHlZgMz481OyVjFZPYgrKpBdoAzunGJsE_z9R3uN9Z0&dib_tag=se&keywords=%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88part%2Bof%2Bme&qid=1748332913&sprefix=%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88part%2Bof%2Bme%2Caps%2C173&sr=8-1&th=1&psc=1",
      baseUrl: "https://base.shop/",
    },
    {
      id: 2,
      name: "サウナハット（ベージュ）",
      price: "5,720（税込）",
      description:
        "佐藤花子氏の独特な線画アートがデザインされた靴下。柔らかな肌触りと耐久性を兼ね備え、日常に彩りを添えます。サイズは23-25cmと25-27cmをご用意。",
      shortDescription: `佐藤花子氏の独特な線画アートがデザインされた靴下。柔らかな肌触りと耐久性を兼ね備え、日常に彩りを添えます。

【アーティスト】佐藤花子
【素材】コットン80%、ポリエステル15%、ポリウレタン5%
【サイズ】23-25cm（レディース向け）、25-27cm（メンズ向け）

佐藤花子氏は繊細なタッチと独特の色彩感覚で知られる障がい者アーティストです。このアートソックスは、彼女の作品を日常に取り入れられるアイテムとして企画されました。履くたびに気分が上がる鮮やかなデザインは、ファッションのアクセントとしても最適です。

お手入れ方法：洗濯ネット使用で洗濯機可、漂白剤使用不可、アイロン低温可`,
      image: "images/saunahat_beige-removebg.png",
      amazonUrl: "https://www.amazon.co.jp/Part-%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88-%EF%BC%92way%E3%82%BF%E3%82%A4%E3%83%97-%E9%9A%9C%E3%81%8C%E3%81%84%E8%80%85%E3%82%A2%E3%83%BC%E3%83%88-%E3%80%8Euntitled%E3%80%8F/dp/B0DR9K7WG2/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3TUGB7MIAKYOM&dib=eyJ2IjoiMSJ9.KhJ1OrC5n3KiRY4FR-4cKfoDyQNBz5CDrSmum5O3gsJ5UmU7Ao29nYDluIOnMjwD1Sieu0aeIkNld8K7S4dukVGUazc9GcUKNaiFE1cADnE5BzS7ULp9MtFbGTOxb_lMvhUEtV8EKBwez9H0-6QDQVoET2PZ_tH0_GbxfFZKK78t7QE2mDENcH1cgIlPCWQ7AhhJyKAiOtk_OVI1k1TxCZvEUP1a2aa5q5oKByzyhhJAEBSZTfpArTuqnpyG7O7yiwYTvI1dAvwdq6ySgTcMfUIFVbvBPOQHeOL9INO14RA.KHlZgMz481OyVjFZPYgrKpBdoAzunGJsE_z9R3uN9Z0&dib_tag=se&keywords=%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88part%2Bof%2Bme&qid=1748332913&sprefix=%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88part%2Bof%2Bme%2Caps%2C173&sr=8-1&th=1&psc=1",
      baseUrl: "https://base.shop/",
    },
    {
      id: 3,
      name: "サウナハット（障がい者アート）",
      price: "6,380（税込）",
      description:
        "鈴木一郎氏の抽象画をプリントしたボクサーパンツ。オーガニックコットン100%で肌に優しく、快適な着心地です。S、M、Lの3サイズ展開。",
      shortDescription: `鈴木一郎氏の抽象画をプリントしたボクサーパンツ。オーガニックコットン100%で肌に優しく、快適な着心地です。

【アーティスト】鈴木一郎
【素材】オーガニックコットン100%
【サイズ】S（ウエスト68-76cm）、M（ウエスト76-84cm）、L（ウエスト84-94cm）

鈴木一郎氏は、幼少期の事故により身体障害を持ちながらも、リハビリの一環として始めた絵画が人生を変えたアーティストです。このボクサーパンツは、鈴木氏の代表作「光と影の交差」をプリントしたアイテムです。

お手入れ方法：洗濯ネット使用で洗濯機可（30℃以下）、漂白剤使用不可、アイロン低温可`,
      image: "images/saunahat_art-removebg.png",
      amazonUrl: "https://www.amazon.co.jp/Part-%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88-%EF%BC%92way%E3%82%BF%E3%82%A4%E3%83%97-%E9%9A%9C%E3%81%8C%E3%81%84%E8%80%85%E3%82%A2%E3%83%BC%E3%83%88-%E3%80%8Euntitled%E3%80%8F/dp/B0DR9MQQ8Y/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3TUGB7MIAKYOM&dib=eyJ2IjoiMSJ9.KhJ1OrC5n3KiRY4FR-4cKfoDyQNBz5CDrSmum5O3gsJ5UmU7Ao29nYDluIOnMjwD1Sieu0aeIkNld8K7S4dukVGUazc9GcUKNaiFE1cADnE5BzS7ULp9MtFbGTOxb_lMvhUEtV8EKBwez9H0-6QDQVoET2PZ_tH0_GbxfFZKK78t7QE2mDENcH1cgIlPCWQ7AhhJyKAiOtk_OVI1k1TxCZvEUP1a2aa5q5oKByzyhhJAEBSZTfpArTuqnpyG7O7yiwYTvI1dAvwdq6ySgTcMfUIFVbvBPOQHeOL9INO14RA.KHlZgMz481OyVjFZPYgrKpBdoAzunGJsE_z9R3uN9Z0&dib_tag=se&keywords=%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88part%2Bof%2Bme&qid=1748332913&sprefix=%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%8F%E3%83%83%E3%83%88part%2Bof%2Bme%2Caps%2C173&sr=8-1&th=1&psc=1",
      baseUrl: "https://base.shop/",
    },
    {
      id: 4,
      name: "オリジナルアイテム制作",
      price: "Ask",
      description:
        "高橋誠氏の色彩豊かなアートをプリントしたトートバッグ。丈夫なキャンバス生地で、日常使いからお出かけまで幅広く活躍します。内ポケット付き。",
      shortDescription: `高橋誠氏の色彩豊かなアートをプリントしたトートバッグ。丈夫なキャンバス生地で、日常使いからお出かけまで幅広く活躍します。

【アーティスト】高橋誠
【素材】綿100%（厚手キャンバス）
【サイズ】幅40cm × 高さ35cm × マチ15cm、持ち手の長さ：約60cm

高橋誠氏は、自閉症スペクトラムを持ちながらも、独自の色彩感覚と構図で注目を集めるアーティストです。このトートバッグは、厚手のキャンバス生地を使用し、内側には小物を整理できるポケットを2つ配置しています。

お手入れ方法：手洗い推奨、漂白剤使用不可、アイロン中温可`,
      image: "images/original-item-removebg.png",
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
            <p class="price">¥${product.price}</p>
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
    $("#product-modal-price").text(`¥${product.price}`)
    $("#product-modal-description").html(product.shortDescription.replace(/\n/g, "<br>"))
    $("#product-modal-image").html(`<img src="${product.image}" alt="${product.name}の写真">`)
    $("#amazon-link").attr("href", product.amazonUrl)
    $("#base-link").attr("href", product.baseUrl)
    $("#product-modal").addClass("active")
    $("body").css("overflow", "hidden")
  }

})
