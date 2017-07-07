$(function(){
  $("#person-info").submit(function(event) {
    event.preventDefault();
    var design = $("input:radio[name=design]:checked").val();
    var busType = $("input:radio[name=bus-type]:checked").val();
    var websiteType= $("input:radio[name=website-type]").val();
    var whyProgram = $("input:radio[name=why-program]").val();
    var favToy = $("input:radio[name=fav-toy]").val();


debugger;
    if (design === "likes-design" && favToy === "play-doh") {
      $("#design-img").show();
      $(".show-results").show();
      $(".hide-results").hide();
      $("#ruby-img").hide();
      $("#c-img").hide();
    } else if (design === "likes-backend" && busType === "start-up" ||  websiteType === "web-apps") {
      $("#ruby-img").show();
      $(".show-results").show();
      $(".hide-results").hide();
      $("#design-img").hide();
      $("#c-img").hide();
    } else if (design === "likes-backend" && busType === "corp" || websiteType === "enterprise") {
      $("#c-img").show();
      $(".show-results").show();
      $(".hide-results").hide();
      $("#ruby-img").hide();
      $("#design-img").hide();
    } else {
      $("#design-img").show();
      $("#ruby-img").hide();
      $("#c-img").hide();
    }
  });
});
