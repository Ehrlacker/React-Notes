import React, { useState } from "react"
import Header from "./components/Header/Header"
import CreateNote from "./components/CreateNote/CreateNote"
import Note from "./components/Note/Note"
import "./App.css"

function App() {
  const [noteList, setNoteList] = useState([])

  const addNote = (newNote) => {
    setNoteList((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNoteList(prevNotes =>{
      return prevNotes.filter((noteItem, index) => {
return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateNote add={addNote} />
      {noteList.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
    </div>
  )
}

export default App
