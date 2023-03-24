import React from "react";

function Note(props) {

  function handleClick (){
    props.deleteNote(props.data._id)
  }


  return (
    <div className="note">
      <h1>{props.data.date}</h1>
      <p>{props.data.dbara}</p>
      <img className="img" style={{width:'contains'}} src={props.data.imageUrl}/>
      <button onClick={handleClick}>DELETE</button> <br/>
      {/* <button onClick={}>UPDATE</button> */}
    </div>
  );
}

export default Note;
