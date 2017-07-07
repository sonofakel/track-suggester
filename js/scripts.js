$(function(){
  $("#person-info").submit(function(event) {
    event.preventDefault();
    var design = $("input:radio[name=design]:checked").val();
    var busType = $("input:radio[name=bus-type]:checked").val();
    var websiteType= $("input:radio[name=website-type]").val();
    var whyProgram = $("input:radio[name=why-program]").val();
    var favToy = $("input:radio[name=fav-toy]").val();
    var firstName =$("#first-name").val();

    $(".first-name").text(firstName);

    if (design === "likes-design") {
      $("#design-img").show();
      $(".show-results-design").show();
      $(".show-results-c-sharp").hide();  
      $(".show-results-ruby").hide();
      $(".hide-results").hide();
      $("#ruby-img").hide();
      $("#c-img").hide();
    } else if (design === "likes-backend" && busType === "start-up" || busType === "med-size" ||  websiteType === "web-apps") {
      $("#ruby-img").show();
      $(".show-results-ruby").show();
      $(".show-results-c-sharp").hide();
      $(".show-results-design").hide();
      $(".hide-results").hide();
      $("#design-img").hide();
      $("#c-img").hide();
    } else if (design === "likes-backend" && busType === "corp" || websiteType === "enterprise") {
      $("#c-img").show();
      $(".show-results-c-sharp").show();
      $(".show-results-design").hide();
      $(".show-results-ruby").hide();
      $(".hide-results").hide();
      $("#ruby-img").hide();
      $("#design-img").hide();
    } else {
      $("#design-img").show();
      $(".show-results-design").show();
      $(".show-results-c-sharp").hide();
      $(".show-results-ruby").hide();
      $("#ruby-img").hide();
      $("#c-img").hide();
    }
  });
});
