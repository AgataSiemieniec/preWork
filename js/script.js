{
  const playGame = function(playerInput){ 
    clearMessages();
    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
          return 'kamień';
      } else if (argMoveId == 2){
          return 'papier';
      } else if(argMoveId ==3){
          return 'nożyce';
      }
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
          return 'nieznany ruch';
      }
    // ok 
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
      
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
  
  
    const displayResult = function (argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrana!');
      } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
          printMessage('Remisik');
      } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
          printMessage('Przegrywka');
      } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
          printMessage('Remis');
      } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
          printMessage('Wygrana');
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
          printMessage('Wygrywasz!');
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
          printMessage('Looser!');
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
          printMessage('Remis!')
      }
    }
    displayResult(computerMove, playerMove);
  };
  // playGame(3);
  
  document.getElementById('p-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('p-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('p-scissors').addEventListener('click', function(){
    playGame(3);
  });
  
}
