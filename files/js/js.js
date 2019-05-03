// getting photos from flickr
function someFunc(){
if(document.getElementById("myInput").value == "mercedes"){
      alert("Mercedes")

      $(function(){
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
            $("<img>").attr("src", item.media.m).appendTo(".merc");
            $("img").draggable();
            if(index == 4) {
              return false;
            }
          });
        }).fail(function(){
          alert("Ajax call failed.");
        });
      });
}else if (document.getElementById("myInput").value == "bentley") {
      alert("Bentley")
      $(function(){
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
            $("<img>").attr("src", item.media.m).appendTo(".bent");
            $("img").draggable();
            if(index == 4) {
              return false;
            }
          });
        }).fail(function(){
          alert("Ajax call failed.");
        });
      });

}else{
  alert("Please enter mercedes or bentley with lowercase")};


}
// search clicking
document.getElementById("searchBtn").onclick = someFunc;
