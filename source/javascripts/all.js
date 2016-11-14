$("#criminal").click(function() {
      
      $(".civillit, .personalinjury, .bankruptcy, .businesslaw").hide();
      $(".criminallaw").show();
      $("a").removeClass("active");
      $("#criminal").addClass("active");
      
      
});

$("#civil").click(function() {
      
      $(".criminallaw, .personalinjury, .bankruptcy, .businesslaw").hide();
      $(".civillit").show();
      $("a").removeClass("active");
      $("#civil").addClass("active");
      
      
});

$("#personal").click(function() {
      
      $(".criminallaw, .civillit, .bankruptcy, .businesslaw").hide();
      $(".personalinjury").show();
      $("a").removeClass("active");
      $("#personal").addClass("active");
      
      
});

$("#bankrupt").click(function() {
      
      $(".criminallaw, .civillit, .personalinjury, .businesslaw").hide();
      $(".bankruptcy").show();
      $("a").removeClass("active");
      $("#bankrupt").addClass("active");
      
      
});

$("#business").click(function() {
      
      $(".criminallaw, .civillit, .personalinjury, .bankruptcy").hide();
      $(".businesslaw").show();
      $("a").removeClass("active");
      $("#business").addClass("active");
      
      
});