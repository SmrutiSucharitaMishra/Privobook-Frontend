/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./NoteItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import NoteContext from "./contexts/Notes/noteContext";
function NoteItem(props) {
  const { note } = props;
  const { deleteNote } = useContext(NoteContext);

  return (
    <div className="noteitem">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <FontAwesomeIcon
              className="mx-3 i"
              icon={faEdit}
              onClick={() => {
                props.updateNote(note);
              }}
            />
            <FontAwesomeIcon
              className="mx-3 i"
              icon={faTrash}
              onClick={() => {
                deleteNote(note._id);
              }}
            />
          </div>
          <p className="card-text">{note.description}</p>
          <small>#{note?.tag}</small>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
