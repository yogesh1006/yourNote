import "./App.css"
import CreateNote from "./components/createNote/CreateNote"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Task from "./components/task/Task";
import { useState } from "react";

function App() {
const [notes,setNotes]=useState([]);
  const addNote=(newnote)=>{
    setNotes((preValue)=>{
     return [
          ...preValue,
          newnote,
     ]
    })
  }

  const deleteNote=(id)=>{
     setNotes((prevValue)=>{
       return [...prevValue.filter((item , index)=>
         index !== id
       )];
     })
  }
  return (
    <div className="App">
      <Header />
      <CreateNote onAdd={addNote}/>
      {notes.map((note,index)=>{
         return <Task 
         key={index} 
         id={index} 
         title={note.title} 
         content={note.content}
         onDelete={deleteNote}
          />
      })}
      <Footer />
    </div>
  );
}

export default App;
