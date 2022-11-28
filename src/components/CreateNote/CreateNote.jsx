import React, { useState } from "react"
import "./CreateNote.css"

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  const handleNoteInput = (e) => {
    const { name, value } = e.target
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  const handleButtonClick = (e) => {
    props.add(note)
    setNote({
      title: "",
      content: "",
    })
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleNoteInput}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleNoteInput}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleButtonClick}>Add</button>
      </form>
    </div>
  )
}

export default CreateNote
