import React from "react"
import "./Note.css"
import PushPinIcon from "@mui/icons-material/PushPin"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

function Note(props) {
  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="note-box">
      <div className="note">
        <div className="pin">
          <PushPinIcon fontSize="large" />
        </div>
        <div className="note-info">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
        <button className="note-button" onClick={handleClick}>
          <DeleteForeverIcon fontSize="large" />
        </button>
      </div>
    </div>
  )
}

export default Note
