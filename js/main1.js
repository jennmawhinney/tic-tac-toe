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
  var currentSelection = [];

  //board layout
  var board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
  //player setup
  var currentPlayer = ['X', 'O'];
  var nextPlayer = [];




  var turnTaker = function(currentPlayer) {
    // debugger;
    for (var i = 0; i < currentPlayer.length; i++) {
      nextPlayer.push([i]);
      // currentPlayer[i]
    }
  };


  $('.button').on('click', function() {

    $('.turnTaker').text(playerX);


  });
  //   var turnTaker = function(player.currentPlayer) {
  // });

  //if playerX the button will log x else it will log y

  if($(this).data('clicked', true)){
    $('.turnTaker').text('This square is already taken, please choose another');
  }else{
    $('.turnTaker').text('Great choice, now its ' + nextPlayer[0] + "'s turn.");
}

      $('.box#one').on('click', function() {
      $('#one').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#one').text(turnTaker);
      board.push(turnTaker);
      console.log(board[0]);
      console.log('clicked');
    });

    $('.box#two').on('click', function() {
      $('#two').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#two').text(turnTaker);
      board.push(turnTaker);
      console.log(board[1]);
      console.log('hello');
    });

    $('.box#three').on('click', function() {
      $('#three').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#three').text(turnTaker);
      board.push(turnTaker);
      console.log(board[2]);
      console.log('hello');
    });

    $('.box#four').on('click', function() {
      $('#four').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#four').text(turnTaker);
      board.push(turnTaker);
      console.log(board[3]);
      console.log('hello');
    });

    $('.box#five').on('click', function() {
      $('#five').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#five').text(turnTaker);
      board.push(turnTaker);
      console.log(board[4]);
      console.log('hello');
    });

    $('.box#six').on('click', function() {
      $('#six').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#six').text(turnTaker);
      board.push(turnTaker);
      console.log(board[5]);
      console.log('hello');
    });

    $('.box#seven').on('click', function() {
      $('#seven').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#seven').text(turnTaker);
      board.push(turnTaker);
      console.log(board[6]);
      console.log('hello');
    });

    $('.box#eight').on('click', function() {
      $('#eight').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#eight').text(turnTaker);
      board.push(turnTaker);
      console.log(board[7]);
      console.log('hello');
    });

    $('.box#nine').on('click', function() {
      $('#nine').css({'background-color' : '#9e9e9e' , 'color': '#ECADBE'});
      $('#nine').text(turnTaker);
      board.push(turnTaker);
      console.log(board[8]);
      console.log('hello');
    });

    var boxCheck = function() {


    };
  // if((board.one
});
