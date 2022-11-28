import React, { useState } from "react"
import "./CreateNote.css"
import AddCircleIcon from "@mui/icons-material/AddCircle"

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
    <div className="enter-text">
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
          placeholder="Note message"
          // rows="3"
        />
        <button onClick={handleButtonClick}>
          {" "}
          <AddCircleIcon fontSize="large" />
        </button>
      </form>
    </div>
  )
}

export default CreateNote
