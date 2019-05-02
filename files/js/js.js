$(function bentley(){
  //JSON, .getJSON()
  var flickApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  $.getJSON(flickApiUrl, {
    tags: "bentley",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    console.log(data);
    $.each(data.items, function(index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if(index == 4) {
        return false;
      }
    });
  }).fail(function(){
    alert("Ajax call failed.");
  });
});
$(function mercedes(){
  //JSON, .getJSON()
  var flickApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  $.getJSON(flickApiUrl, {
    tags: "mercedesw221, w222",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    console.log(data);
    $.each(data.items, function(index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if(index == 4) {
        return false;
      }
    });
  }).fail(function(){
    alert("Ajax call failed.");
  });
});
