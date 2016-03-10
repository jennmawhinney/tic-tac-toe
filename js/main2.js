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
      if ((player1Win[0] + player1Win[1] + player1Win[2]) === ('XXX')) {
        $('.turnTaker').text('Player 1 is the ultimate winner!');
      }
      if ((player2Win[0] + player2Win[1] + player2Win[2]) === ('O','O', 'O')) {
        $('.turnTaker').text('Player 2 is the ultimate winner!');
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
        catSlide();
        trackWin();
        reset();
      }
      if ((board[3] + board[4] + board[5]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
        catSlide();
        reset();
      }
      if ((board[6] + board[7] + board[8]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[0] + board[3] + board[6]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[1] + board[4] + board[7]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[2] + board[5] + board[8]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[0] + board[4] + board[8]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[2] + board[4] + board[6]) === 'XXX') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 1 is the winner!');
        player1Win.push('X');
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
        catSlide();
        trackWin();
        reset();
      }
      if ((board[3] + board[4] + board[5]) === 'OOO') {
        console.log('O is the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[6] + board[7] + board[8]) === 'OOO') {
        console.log('O is the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[0] + board[3] + board[6]) === 'OOO') {
        console.log('Ois the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[1] + board[4] + board[7]) === 'OOO') {
        console.log('O is the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[2] + board[5] + board[8]) === 'OOO') {
        console.log('O is the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[0] + board[4] + board[8]) === 'OOO') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
      if ((board[2] + board[4] + board[6]) === 'OOO') {
        console.log('X is the winner!');
        $('.turnTaker').text('Player 2 is the winner!');
        player2Win.push('O');
        catSlide();
        trackWin();
        reset();
      }
    };

    // //if box one clicked
    // $('.box#one').on('click', function() {
    //   $('.box#one').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $('h1').css({
    //     'font-size': '2.5em'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[0] = (newPlayer[0]);
    //   $(this).addClass('clicked');
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });

    $(".box").on("click", function () {
      if ( $(this).hasClass('clicked') ) {
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

    //if box two clicked
    //
    // $('.box#two').on('click', function() {
    //   $('.box#two').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $('h1').css({
    //     'font-size': '2.5em'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[1] = (newPlayer[0]);
    //   $(this).addClass('clicked');
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });

    //if box three clicked
    //
    // $('.box#three').on('click', function() {
    //   $('.box#three').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[2] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
    // //if box four clicked
    //
    // $('.box#four').on('click', function() {
    //   $('.box#four').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[3] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
    // //if box five clicked
    //
    // $('.box#five').on('click', function() {
    //   $('.box#five').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[4] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
    // //if box six clicked
    //
    // $('.box#six').on('click', function() {
    //   $('.box#six').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[5] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
    // //if box seven clicked
    //
    // $('.box#seven').on('click', function() {
    //   $('.box#seven').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[6] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
    // //if box eight clicked
    //
    // $('.box#eight').on('click', function() {
    //   $('.box#eight').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[7] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
    // //if box nine clicked
    //
    // $('.box#nine').on('click', function() {
    //   $('.box#nine').unbind('click');
    //   // trackWin();
    //   whoseTurn();
    //   $(this).css({
    //     'background-color': '#9e9e9e',
    //     'color': '#ECADBE'
    //   });
    //   $(this).text(newPlayer[0]);
    //   board[8] = (newPlayer[0]);
    //   console.log(board);
    //   winnerX();
    //   winnerO();
    // });
    //
  });
