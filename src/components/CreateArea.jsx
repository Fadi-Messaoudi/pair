import React, { useState,useEffect } from "react";
import axios from 'axios';



function CreateArea( {addNote}) {

const [note,setNote]=useState([
//  date :"",
//   dbara:"",
//   imageUrl:""
]);
useEffect(()=>{
  axios.post("http://localhost:4500/api/products").then(response=>{
    console.log(response.data)
  setNote(response.data)}).catch(err=>console.log(err))
},[])
 function submitNote (e){
  addNote(note)
  setNote([])
  e.preventDefault()
 }


 function handleChange(event){
 const {name , value}=event.target 
  setNote(prevNote=>{
    return {
      ...prevNote,
      [name]:value
    }
  })
 }



  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.date} placeholder="Date" />
        <textarea name="content" onChange={handleChange} value={note.dbara} placeholder="Menu of the day..." rows="3" />
        <img src=""/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
