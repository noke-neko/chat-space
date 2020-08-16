$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = 
        `<div class="message">
          <div class="message-user-date">
            <div class="message-user">
              ${message.user_name}
            </div>
            <div class="message-date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-body">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
        `<div class="message">
          <div class="message-user-date">
            <div class="message-user">
              ${message.user_name}
            </div>
            <div class="message-date">
            ${message.created_at}
            </div>
          </div>
          <div class="message-body">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.message-form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data)
      $('.chat-main__message-field').append(html);
      $('.chat-main__message-field').animate({ scrollTop: $('.chat-main__message-field')[0].scrollHeight});
      $('.message-form')[0].reset();
      $('.message-form__sending').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});