import React from "react"
import Header from "./components/Header/Header"
import CreateNote from "./components/CreateNote/CreateNote"
import Note from "./components/Note/Note"
import "./App.css"
import useLocalStorage from './LocalStorage/LocalStorage'

function App() {
  const [noteList, setNoteList] = useLocalStorage('noteList',[] )

  const addNote = (newNote) => {
    setNoteList((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNoteList((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <div className="allnotes-container">
        <CreateNote add={addNote} />
        <div className="note-box">
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
      </div>
    </div>
  )
}

export default App
