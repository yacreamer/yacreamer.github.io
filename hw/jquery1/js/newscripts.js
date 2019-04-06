
//Executes when page loads and it's ready to view
var step = 0;

var titles = [
'Cleanse', //this is 0 titles [0]
'Tone',
'Exfoliate',
'Moisturize',
'Apply SPF'
];

$(function(){
$("#stepinfo, section, footer, .prev").hide();
});

$('.start').on('click',function(){
//do stuff when the button is clicked
$('.intro').hide();
$('footer, #stepinfo').show();
step = 1;

$('#step'+step).show();
//f(x) = x + 2
//set the title for our current step
$('#stepinfo').text('Step '+step+': '+titles[step-1]);
});

$('.next').on('click',function(){

//make the change only if we are under our number of steps

$('#step'+step).hide();
step++;
if(step == 2){
$('.prev').show();
}
if(step == 5){
$('.next').hide();
}
if(step <= 5) {
$('#step'+step).show();
$('#stepinfo').text('Step '+step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();

}

});

//Previous

$('.prev').on('click',function(){

//make the change only if we are under our number of steps

$('#step'+step).hide();
step--;
if(step == 1){
$('.prev').hide();
} else {
$('.next').show();
}

if(step >= 1) {
$('#step'+step).show();
$('#stepinfo').text('Step '+step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();

}

});
