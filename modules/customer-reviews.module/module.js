var maxHeight = 0;

jQuery(".review-box").each(function(){
   if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
});

jQuery(".review-box").height(maxHeight);