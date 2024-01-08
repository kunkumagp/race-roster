
var accordianRowLimit = 3;
var accordianRowCount = $('.content-row').length;
var hiddenRowCount = document.querySelectorAll('.content-row.accordian-row-hidden').length;
var showAllRows = false;

$('.head').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('.cross-arrow').toggleClass('arrow-animate');
  $(this).parent().find('.content').slideToggle(280);
});

$( ".content-row" ).each(function(index) {
  $( this ).removeClass( "accordian-row-hidden" );
  if( (index+1) == accordianRowLimit ){
    return false;
  }
});

if(accordianRowLimit < accordianRowCount){
  $( ".accordian-button" ).removeClass( "hidden" );
}

$('.accordian-button').click(function(){
  var $this = $(this);
  $this.toggleClass('show');
  if($this.hasClass('show')){
    $this.text('SHOW ALL');  
  } else {
    $this.text('SHOW LESS');
  }
});

$('.accordian-button').click(function(){
  if( showAllRows == false){
    $( ".content-row" ).each(function(index) {
      $( this ).removeClass( "accordian-row-hidden" );
    });
    showAllRows = true;
  }else{
    $( ".content-row" ).addClass( "accordian-row-hidden" );
    $( ".content-row" ).each(function(index) {
      $( this ).removeClass( "accordian-row-hidden" );
      if( (index+1) == accordianRowLimit ){
        return false;
      }
    });
    showAllRows = false;
  }
});