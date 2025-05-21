const $ = require("jquery")

$(document).ready(() => {
  // ラジオボタンのスタイル変更
  $(".radio-item input[type='radio']").change(function () {
    $(".radio-item label").removeClass("active")
    if ($(this).is(":checked")) {
      $(this).siblings("label").addClass("active")
    }
  })

  // フォーム送信処理
  $("#contact-form").submit((e) => {
    e.preventDefault()

    // 送信中の状態を表示
    $("#submit-btn").text("送信中...").prop("disabled", true)

    // 送信完了を模擬（実際の実装では非同期処理の完了後に設定）
    setTimeout(() => {
      $("#contact-form").hide()
      $("#form-success").removeClass("hidden")
    }, 1500)
  })

  // 新しいお問い合わせボタン
  $("#new-inquiry-btn").click(() => {
    $("#contact-form").trigger("reset")
    $("#form-success").addClass("hidden")
    $("#contact-form").show()
    $("#submit-btn").text("送信する").prop("disabled", false)
  })
})
