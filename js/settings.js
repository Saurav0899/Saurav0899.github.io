$(document).on('click', '#setting-button',  function(){
    if ($("#setting-button i").hasClass("fa-cogs")){
      $("#options-setting").addClass("move-right");
      $("#setting-button i").removeClass("fa-cogs");
      $("#setting-button i").addClass("fa-times");
    }
    else
    {
      $("#options-setting").removeClass("move-right");
      $("#setting-button i").removeClass("fa-times");
      $("#setting-button i").addClass("fa-cogs");
    }
  });

 