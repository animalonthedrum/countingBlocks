$(onReady);

//var span = [0, 0, 0, 0];

function onReady() {
  console.log('loaded JS');

//register events

$('.color-button').on('click', appendDiv);
//$('').on('click', counterDiv);
$('.container').on('click','div', deleteBox);
}
//function addToCounter(color) {

//}
function appendDiv () {
  var $d = $('<div>');
  var color =  $(this).data('color');
  $d.addClass('color-cube ' + color);
  console.log('color', color);
  $('.container').append($d);

  updateCounts();
}

function counterDiv () {
//add to zero for each click
console.log("counting span");
}

function deleteBox () {
$(this).remove();

updateCounts();
}


function updateCounts() {
    var redCounter = $('.red').length;
    $('#red').text(redCounter);

    var yellowCounter = $('.yellow').length;
    $('#yellow').text(yellowCounter);

    var greenCounter = $('.green').length;
    $('#green').text(greenCounter);

    var blueCounter = $('.blue').length;
    $('#blue').text(blueCounter);
}
