$(document).ready(() => {
  // ラジオボタンのスタイル変更
  $(".radio-item input[type='radio']").change(function () {
    $(".radio-item label").removeClass("active")
    if ($(this).is(":checked")) {
      $(this).siblings("label").addClass("active")
    }
  })

  // フォーム送信処理
  $("#contact-form").submit(function(e) {
    e.preventDefault();

    // 送信中の状態を表示
    $("#submit-btn").text("送信中...").prop("disabled", true);

    // contact_numberをセット
    this.contact_number.value = Math.floor(Math.random() * 100000);

    // EmailJSでフォーム送信
    emailjs.sendForm('service_xdwicxh', 'template_3o5r3yu', this)
      .then(() => {
        console.log('SUCCESS!');
        // 送信完了のUI切り替え
        $("#contact-form").hide();
        $("#form-success").removeClass("hidden");
      }, (error) => {
        console.log('FAILED...', error);
        // 失敗時はボタンを元に戻すなどの処理も入れると親切
        $("#submit-btn").text("送信する").prop("disabled", false);
        alert("送信に失敗しました。時間を置いて再度お試しください。");
      });
  });

  // 新しいお問い合わせボタン
  $("#new-inquiry-btn").click(() => {
    $("#contact-form").trigger("reset")
    $("#form-success").addClass("hidden")
    $("#contact-form").show()
    $("#submit-btn").text("送信する").prop("disabled", false)
  })
})
