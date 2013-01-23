$(function () {

  $('#create-button').click(function (e) {
    var content = JSON.stringify({title:$('#title-input').val(), items:[]});
    BL.createContent(content);
  });

});