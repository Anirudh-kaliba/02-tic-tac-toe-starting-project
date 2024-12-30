import Playerinfo from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          
       < Playerinfo initialName = "Player 1" symbol = "X" />
       < Playerinfo initialName = "Player 2" symbol = "O" />
 
        </ol>
      <GameBoard/>
      </div>
      log
    </main>
  );
}

export default App
