import React, { useState } from "react";
import "./createnote.css";

function CreateNote({onAdd}) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    const {name ,value}=e.target;
    setNote((preValue)=>{
         return {
             ...preValue,
             [name]:value,
         }
    });

  };

  const submitHandler=(event)=>{
      onAdd(note);
      setNote({
          title:"",
          content:"",
      })
      event.preventDefault();
  }
  return (
    <div className="createnote">
      <form>
        <input value={note.title}  type="text" name="title" placeholder="Title" onChange={changeHandler} />
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a Note..."
            onChange={changeHandler}
          ></textarea>
        </p>
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
