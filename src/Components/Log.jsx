function Log({ turns }) {
    return (
      <div id="log">
        <h3>Game Log</h3>
        <ol>
          {turns.map((turn, index) => (
            <li key={`${turn.position.row},${turn.position.col}`}>
              Player {turn.player} selected square ({turn.position.row}, {turn.position.col})
            </li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default Log;
  