$(function () {

  function create_list_item(item) {
    var list_item = '<li class="bottom-border">' + item.name;
    list_item += '<input type="checkbox" class="right checkbox"></input></li>';
    return list_item
  }

  var content = JSON.parse(BL.getContentItem());
  $("#title").html(content.title);
  console.log(content);
  var items = content.items;

  for (var ii = 0; ii < items.length; ii++) {
    $('#items-list').append(create_list_item(items[ii]));
  }

  $('#add-button').click(function (e) {
    var new_item = {name:$('#item-input').val() };
    //Save new content
    //content.items.push(new_item);
    //BL.updateContent(JSON.stringify(content));
    //Add it to the list
    $('#items-list').append(create_list_item(new_item));
  });

  $('input[type=checkbox]').live('click', function () {
    //Remove item from the saved content
    //Remove item from the list
    $(this).parent().remove();
  });
});