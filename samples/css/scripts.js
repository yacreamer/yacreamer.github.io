$(function(){
  //alert("jquery loaded!");
});
//functions could be click or mouseover or mouseleave
$('.hide').on('click',function(){
  $('#myimage').hide();
  $('#actiontitle').text('Image is hidden');
  $('#actiontitle').css('color','red');
})

  $('.show').on('click',function(){
    $('#myimage').show();
    $('#actiontitle').text('Image is showing');
    $('#actiontitle').css('color','green');
})
$('.done').on('click',function(){
  $('body').html('<h2>We are done!</h2><p>See ya later!</p>');

});

$('.append').on('click', function(){
  var username = $('#testimput').val();
  $('#list').append('<li>'+username+'</li>');
});
