$(function () {
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  var id = BL.getContentForPreview().content[0].id;

  $('#title').html(content.title);
  if (typeof content.items === "undefined" || content.items.length == 0) {
    $('#description').html('No items in the list');
  } else {
    $('#description').html(content.items.length + ' outstanding item(s)');
  }

  BL.previewReady();

  $('.container').click(function (e) {
    BL.showContent(id);
  });
});