import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios'
function App() {
 const [notes,setNotes]=useState([])
 const [tr, setTr]=useState(true)
 useEffect(()=>{
  axios.get("http://localhost:4500/api/products").then(response=>{
    console.log(response.data)
  setNotes(response.data)}).catch(err=>console.log(err))
},[tr])

  function addNote(note){
      console.log(note)
      setNotes(prevNotes =>{
      return  [...prevNotes,note]
      })
  }


  function deleteNote(id){
    axios.delete("http://localhost:4500/api/products/"+id).then(response=>{
    console.log(response.data);setTr(!tr)
  }).catch(err=>console.log(err))
   
    
  }

  return (
    <div>
      <Header />
      <CreateArea  addNote={addNote}/>
    { notes && notes.map((e,i)=> {
        return <Note key={i} id={i} data={e}  deleteNote={deleteNote} />
      })}

      <Footer />
    </div>
  );
}

export default App;
