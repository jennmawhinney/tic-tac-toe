//Global variables
var board = [];
var player1Win = [];
var player2Win = [];

//winning combinations
$(document).ready(function() {

  //make cat invisible and remove from document flow
  $('.cat').css({
    'display': 'none'
  });

  //check for winner against board array ^^

  var checkClick = function() {
    if ($(".box#one").hasClass('clicked')) {
      swal("This square is taken!", "Please try another");
    }
  };

  var reset = function() {
    $('.button').on('click', function() {
      $('.cat').slideUp(100);
      board = [];
      $(".clicked").removeClass("clicked");
      $('.bigBox').css({
        'display': 'block'
      });
      $('.box').text('?');
      // if ('.box' === 'X' || 'O') {
      //   $(this).text('?');
      $('.box').css({
        'background-color': '#F3EBDD'
      });
      $('.box').css({
        'color': 'rgb(236, 173, 190)'
      });
      // }
    });
  };

  var finalReset = function() {
    reset();
    $('h4').text('');
    $('.button').removeClass('.gameOver');
    $('.button').text("Let's Play");
    player1Win = [];
    player2Win = [];
  };

  //Top prize appears on win
  var catSlide = function() {
    $('.bigBox').css({
      'display': 'none'
    });
    $('.cat').slideDown(100);
    $('.button').text('Play Again');
    $('.button').css({
      'margin-left': '6.5em'
    });
  };

  //announce which player which player and change to next player
  var newPlayer = [];
  var nextPlayer = ['X', 'O'];

  var announceTurn = function() {
    if (newPlayer[0] === 'O') {
      $('.turnTaker').text("Player 1's turn");
    } else {
      $('.turnTaker').text("Player 2's turn");
    }
    return newPlayer[0];
  };

  var whoseTurn = function() {

    if (newPlayer[0] === nextPlayer[0]) {
      newPlayer[0] = nextPlayer[1];
    } else {
      newPlayer[0] = nextPlayer[0];
    }
    announceTurn();
  };

  trackWin = function() {
    if ((player1Win).length === 3) {
      $('.turnTaker').text('Player 1 is the ultimate winner!');
      swal("Player 1 is the ultimate winner.", "Enjoy your prize!");
      $('.button').addClass('.gameOver');
      $('.button').text('Congratulations!');
    }
    if ((player2Win).length === 3) {
      $('.turnTaker').text('Player 2 is the ultimate winner!');
      swal("Player 2 is the ultimate winner.", "Enjoy your prize!");
      $('.button').addClass('.gameOver');
      $('.button').text('Congratulations!');
}
    if ($('.button').hasClass('.gameOver')) {
      finalReset();
    }
};

  //when Let's Play button clicked announce first player
  $('.button').on('click', function() {
    board.push([]);
    newPlayer[0] = 'O';
    $('.turnTaker').text('Hit it!');
  });

  //possible winners
  var winnerX = function() {
    if ((board[0] + board[1] + board[2]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[3] + board[4] + board[5]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      reset();
    }
    if ((board[6] + board[7] + board[8]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[0] + board[3] + board[6]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[1] + board[4] + board[7]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[2] + board[5] + board[8]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[0] + board[4] + board[8]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[2] + board[4] + board[6]) === 'XXX') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 1 is the winner!');
      player1Win.push('X');
      $('.player1 h4').text((player1Win).length);
      catSlide();
      trackWin();
      reset();
    }
  };

  var winnerO = function() {
    if ((board[0] + board[1] + board[2]) === 'OOO') {
      console.log('O is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[3] + board[4] + board[5]) === 'OOO') {
      console.log('O is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[6] + board[7] + board[8]) === 'OOO') {
      console.log('O is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[0] + board[3] + board[6]) === 'OOO') {
      console.log('Ois the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[1] + board[4] + board[7]) === 'OOO') {
      console.log('O is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[2] + board[5] + board[8]) === 'OOO') {
      console.log('O is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[0] + board[4] + board[8]) === 'OOO') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
    if ((board[2] + board[4] + board[6]) === 'OOO') {
      console.log('X is the winner!');
      $('.turnTaker').text('Player 2 is the winner!');
      player2Win.push('O');
      $('.player2 h4').text((player2Win).length);
      catSlide();
      trackWin();
      reset();
    }
  };

  $(".box").on("click", function() {
  if ($(this).hasClass('clicked')) {
  swal("This square is taken!", "Please try another");
  return false;
  }
  whoseTurn();
  $(this).css({
  'background-color': '#9e9e9e',
  'color': '#ECADBE'
  });
  $('h1').css({
  'font-size': '2.5em'
  });
  $(this).text(newPlayer[0]);
  var position = $(this).data('position');
  board[position] = (newPlayer[0]);
  $(this).addClass('clicked');
  console.log(board);
  winnerO();
  winnerX();
  });
});
