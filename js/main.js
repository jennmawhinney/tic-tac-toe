$(document).ready(function() {

  //Winning combinations

  var winningCombinations = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
  ];

  //Global variables

  var x = 'x';
  var y = 'y';
  var whatsX = [];
  var whatsY = []; /*which box has been clicked by whom*/
  var playerX = 'X goes first!';
  var playerO = 'O goes first!';
  // var playerO = ;/*players*/

  var board = {
    one: ['1'],
    two: ['2'],
    three: ['3'],
    four: ['4'],
    five: ['5'],
    six: ['6'],
    seven: ['7'],
    eight: ['8'],
    nine: ['9'],
    ten: ['10']
  };

  $('.button').on('click', function() {

    $('h1').text(playerX);

  });

    $('.box').on('click', function() {
        if (h1 === playerX) {
        $(this).text('X');
      } else {
        $(this).text('Y');
      }

      console.log('hello');
      $('#one').css('background-color', 'gray');
      // $('div').class()

});



  // checkX: function(input) {
  //   for (var i = 0; i < whatsX.length; i++) {
  //
  //   }
  // }

  // on click add class

  // };






// $('.box').on('click', function() {
//
// });
});

// function to show whose turn it is


//if x chooses a box add number of box to array
//if y chooses a box add number of box to array
