jQuery(function(){
    jQuery("#sidekf").hover(function(){
        jQuery("#sidekf .tel").show();
        jQuery(this).animate({left: "0px"}, 200);
    }, function(){
        jQuery("#sidekf .tel").hide();
        jQuery(this).animate({left: "-110px"}, 200);
    });
});