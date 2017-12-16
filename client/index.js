$(document).ready(() => {

  var formatInputs = (data) => {
    var formatted = {};
    for(var i = 0; i < data.length-1; i++) {
      formatted[data[i].id] = data[i].value;
    }
    return formatted;
  }

  var sendMessageReq = (data) => {
    console.log(data)
    $.ajax({
      url: 'http://localhost:3000/',
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify(data)
    })
    .done((data) => {
      console.log('success', data) 
    })
    .fail((err) => {
      console.log('error', err);
    });
  }

  $( "#form" ).submit(function(e) {
    var messageObj = formatInputs($('#form :input'));
    e.preventDefault();
    sendMessageReq(messageObj);
  });

});