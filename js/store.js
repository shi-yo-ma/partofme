$(document).ready(() => {
  // 商品データ
  const products = [
    {
      id: 1,
      name: "サウナハット（untitled）",
      price: "6,380（税込）",
      description: `このサウナハットは、
『untitled』作：miwa　をデザインに起用し、サウナハットとしては初めての障がい者アートコラボとなります。障がい者の方ならではの優しい安らぎの表現を感じてください。
※こちら購入につき、売上の一部が作家に還元されます。

心を満たすリラックス空間を演出する「感動 サウナハット」。このサウナハットは、ただのサウナでの使用に留まらず、巾着としても活躍するユニークなデザインが特徴です。

嬉しい大きめ深め設計です。

表地は撥水加工素材、中綿、裏地メッシュ生地の３枚重ねのサウナハットでサウナ内でかぶることで頭ののぼせや、 髪へのダメージを減少してくれるアイテムです。 速乾のメッシュ生地なので蒸れずに快適に過ごすことができます。

裏地メッシュにより被り心地も抜群で、サウナの遠赤外線から頭皮や髪を守り、頭を快適に保ちます。さらに、使用後は巾着として軽やかに持ち運び可能ですので、移動の際にも便利です。
濡れたタオルや下着、化粧水・乳液など、かなり収納可能なので、このサウナハット１つでサウナに行くことができます。
サウナを最大限楽しむための必需品として、これを手に入れれば心も体もほぐれます。

【お手入れ】フェルトやウールハットと違い、洗濯機洗いでの簡単なお手入れで長く清潔にお使いいただけます。裏返し、外側をメッシュ素材にして、洗濯ネットをご使用の上洗われてください。 漂白剤、蛍光増白剤入りの洗剤は使用しないでください。生地の傷みを防止するため自然乾燥をオススメします。

■カラーバリエーションとサイズ
・カラー：黒 、ベージュ、『untitled』
・サイズ：フリーサイズ

■素材
・素材：ナイロン、ポリエステル

■お手入れ方法
・手洗い
・洗濯機の場合、裏返してネット使用の上、洗濯可能。
・直射日光を避け、風通しの良い場所で乾燥させてください。

■発送・注文について
・ご注文後、通常2〜5日で発送いたします。
・在庫がない場合は、別途ご連絡いたしますのでご了承ください。

■その他の注意事項
・濡れた状態での放置は避けてください。 （臭いの原因になります）
・使用しない時は、乾燥した場所で保管してください。

ショップのお問い合わせから、ご不明な点やご質問がございましたらお気軽にご連絡ください。心を込めたサウナライフをお楽しみください。`,
      image: "images/saunahat_art-removebg.webp",
      amazonUrl: "https://amzn.asia/d/9XFrOBZ",
      baseUrl: "https://partofme.official.ec/items/98905614",
      otherUrl: "",
    },
    {
      id: 2,
      name: "サウナハット（ブラック）",
      price: "5,720（税込）",
      description: `心を満たすリラックス空間を演出する「感動 サウナハット」。このサウナハットは、ただのサウナでの使用に留まらず、巾着としても活躍するユニークなデザインが特徴です。

嬉しい大きめ深め設計です。

表地は撥水加工素材、中綿、裏地メッシュ生地の３枚重ねのサウナハットでサウナ内でかぶることで頭ののぼせや、 髪へのダメージを減少してくれるアイテムです。 速乾のメッシュ生地なので蒸れずに快適に過ごすことができます。

裏地メッシュにより被り心地も抜群で、サウナの遠赤外線から頭皮や髪を守り、頭を快適に保ちます。さらに、使用後は巾着として軽やかに持ち運び可能ですので、移動の際にも便利です。
濡れたタオルや下着、化粧水・乳液など、かなり収納可能なので、このサウナハット１つでサウナに行くことができます。
サウナを最大限楽しむための必需品として、これを手に入れれば心も体もほぐれます。

【お手入れ】フェルトやウールハットと違い、洗濯機洗いでの簡単なお手入れで長く清潔にお使いいただけます。裏返し、外側をメッシュ素材にして、洗濯ネットをご使用の上洗われてください。 漂白剤、蛍光増白剤入りの洗剤は使用しないでください。生地の傷みを防止するため自然乾燥をオススメします。

■カラーバリエーションとサイズ
・カラー：黒 、ベージュ、『untitled』
・サイズ：フリーサイズ

■素材
・素材：ナイロン、ポリエステル

■お手入れ方法
・手洗い
・洗濯機の場合、裏返してネット使用の上、洗濯可能。
・直射日光を避け、風通しの良い場所で乾燥させてください。

■発送・注文について
・ご注文後、通常2〜5日で発送いたします。
・在庫がない場合は、別途ご連絡いたしますのでご了承ください。

■その他の注意事項
・濡れた状態での放置は避けてください。 （臭いの原因になります）
・使用しない時は、乾燥した場所で保管してください。

ショップのお問い合わせから、ご不明な点やご質問がございましたらお気軽にご連絡ください。心を込めたサウナライフをお楽しみください。`,
      image: "images/saunahat_black-removebg.webp",
      amazonUrl: "https://amzn.asia/d/gxpl0aC",
      baseUrl: "https://partofme.official.ec/items/98905355",
      otherUrl: "",
    },
    {
      id: 3,
      name: "サウナハット（ベージュ）",
      price: "5,720（税込）",
      description: `心を満たすリラックス空間を演出する「感動 サウナハット」。このサウナハットは、ただのサウナでの使用に留まらず、巾着としても活躍するユニークなデザインが特徴です。

嬉しい大きめ深め設計です。

表地は撥水加工素材、中綿、裏地メッシュ生地の３枚重ねのサウナハットでサウナ内でかぶることで頭ののぼせや、 髪へのダメージを減少してくれるアイテムです。 速乾のメッシュ生地なので蒸れずに快適に過ごすことができます。

裏地メッシュにより被り心地も抜群で、サウナの遠赤外線から頭皮や髪を守り、頭を快適に保ちます。さらに、使用後は巾着として軽やかに持ち運び可能ですので、移動の際にも便利です。
濡れたタオルや下着、化粧水・乳液など、かなり収納可能なので、このサウナハット１つでサウナに行くことができます。
サウナを最大限楽しむための必需品として、これを手に入れれば心も体もほぐれます。

【お手入れ】フェルトやウールハットと違い、洗濯機洗いでの簡単なお手入れで長く清潔にお使いいただけます。裏返し、外側をメッシュ素材にして、洗濯ネットをご使用の上洗われてください。 漂白剤、蛍光増白剤入りの洗剤は使用しないでください。生地の傷みを防止するため自然乾燥をオススメします。

■カラーバリエーションとサイズ
・カラー：黒 、ベージュ、『untitled』
・サイズ：フリーサイズ

■素材
・素材：ナイロン、ポリエステル

■お手入れ方法
・手洗い
・洗濯機の場合、裏返してネット使用の上、洗濯可能。
・直射日光を避け、風通しの良い場所で乾燥させてください。

■発送・注文について
・ご注文後、通常2〜5日で発送いたします。
・在庫がない場合は、別途ご連絡いたしますのでご了承ください。

■その他の注意事項
・濡れた状態での放置は避けてください。 （臭いの原因になります）
・使用しない時は、乾燥した場所で保管してください。

ショップのお問い合わせから、ご不明な点やご質問がございましたらお気軽にご連絡ください。心を込めたサウナライフをお楽しみください。`,
      image: "images/saunahat_beige-removebg.webp",
      amazonUrl: "https://amzn.asia/d/ijDNNZN",
      baseUrl: "https://partofme.official.ec/items/98905914",
      otherUrl: "",
    },
    {
      id: 99,
      name: "オリジナルアイテム制作",
      price: "Ask",
      description: `弊社は、商品パッケージから、壁、サウナハットまで、色々な物をぬりかえてきました。
アートを扱うが故に、ぬりかえることが不可能な物はないと信じています。
もしぬりかえたかったり、アートの力を借りたい時はお気軽にご相談ください。`,
      image: "images/question.webp",
      amazonUrl: "https://www.amazon.co.jp/",
      baseUrl: "https://base.shop/",
      otherUrl: "contact.html",
    },
    
  ]

  // 商品一覧を表示
  function renderProducts() {
    const productsContainer = $("#products-container")
    productsContainer.empty()

    products.forEach((product) => {
      let productCard = '';

      if (product.id === 99) {
        productCard = `
          <div class="product-card" data-id="${product.id}">
            <div class="question-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
              <h3>${product.name}</h3>
              <p class="price">¥${product.price}</p>
              <p class="description">${product.description}</p>
              <div class="purchase-links" data-prevent-click="true">
                <a href="${product.otherUrl}" rel="noopener noreferrer" class="purchase-link contact-link">お問い合わせ</a>
              </div>
            </div>
          </div>
        `
      } else {
        productCard = `
          <div class="product-card" data-id="${product.id}">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
              <h3>${product.name}</h3>
              <p class="price">¥${product.price}</p>
              <p class="description">${product.description}</p>
              <div class="purchase-links" data-prevent-click="true">
                <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer" class="purchase-link amazon-link">amazon</a>
                <a href="${product.baseUrl}" target="_blank" rel="noopener noreferrer" class="purchase-link base-link">BASE</a>
              </div>
            </div>
          </div>
        `
      }
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
    const productModalContent = $("#product-modal-content")
    productModalContent.empty()

    let productModalHtml = '';

    if (product.id === 99) {
      productModalHtml = `
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="modal-header">
          <h2 id="product-modal-name">${product.name}</h2>
          <p id="product-modal-price" class="product-price">¥${product.price}</p>
        </div>
        <div class="modal-body product-modal-body">
          <div class="product-modal-left">
            <div id="question-image" class="question-image question-modal-image">
              <img src="${product.image}" alt="${product.name}の写真">
            </div>
            <div class="product-purchase">
              <div class="purchase-buttons">
                <a href="${product.otherUrl}" rel="noopener noreferrer" class="purchase-link contact-link">お問い合わせ</a>
              </div>
            </div>
          </div>
          <div class="product-modal-right">
            <h3>説明</h3>
            <div id="product-modal-description" class="product-description">${product.description}</div>
          </div>
        </div>
      `
    } else {
      productModalHtml = `
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="modal-header">
          <h2 id="product-modal-name">${product.name}</h2>
          <p id="product-modal-price" class="product-price">¥${product.price}</p>
        </div>
        <div class="modal-body product-modal-body">
          <div class="product-modal-left">
            <div id="product-modal-image" class="product-modal-image">
              <img src="${product.image}" alt="${product.name}の写真">
            </div>
            <div class="product-purchase">
              <h3>購入する</h3>
              <div class="purchase-buttons">
                <a href="${product.amazonUrl}" id="amazon-link" target="_blank" rel="noopener noreferrer" class="amazon-btn">amazon</a>
                <a href="${product.baseUrl}" id="base-link" target="_blank" rel="noopener noreferrer" class="base-btn">BASE</a>
              </div>
            </div>
          </div>
          <div class="product-modal-right">
            <h3>商品説明</h3>
            <div id="product-modal-description" class="product-description">${product.description}</div>
          </div>
        </div>
      `
    }
    productModalContent.html(productModalHtml)
    $("#product-modal").addClass("active")
    $("body").css("overflow", "hidden")
  }

  // モーダルを閉じる
  $(document).on("click", ".modal-close", () => {
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
