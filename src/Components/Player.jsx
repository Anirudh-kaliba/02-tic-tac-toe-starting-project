import { useState } from "react";

export default function Playerinfo({ initialName, symbol }) {
  
  const[playerName , setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevEditing) => !prevEditing);
    
    

  }

  function handleChange (event)
  {
    setPlayerName(event.target.value)
  }

  // let playerName =  <span className="player-name">{name}</span>      // 1st Technique to write

  // if(isEditing === true)
  // {
  //   playerName = <input type="text"/>
  // }

  let editablePlayerName;
  if (isEditing == true) {
    editablePlayerName = <input type="text"   required  value={playerName} onChange={handleChange} />;
  } else {
    editablePlayerName = <span className="player-name">{playerName}</span>;           //2nd Technique to write condition
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'save' : 'Edit'}</button>       

    </li>

  );
}