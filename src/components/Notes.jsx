/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "./contexts/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  const [note, setnote] = useState({
    eid: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const changehandler = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    editNote(note.eid, note.etitle, note.edescription, note.etag);
  };
  const ref = useRef(null);
  const updateNote = (note) => {
    ref.current.click();
    setnote({
      eid: note._id,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
  };
  useEffect(() => {
    return () => {
      getNotes();
    };
  }, []);
  return (
    <>
      <AddNote />
      <button
        hidden
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    TITLE*
                  </label>
                  <input
                    value={note.etitle}
                    required
                    type="text"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    onChange={changehandler}
                    name="etitle"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    DESCRIPTION*
                  </label>
                  <input
                    value={note.edescription}
                    required
                    type="text"
                    className="form-control"
                    id="edescription"
                    onChange={changehandler}
                    name="edescription"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    value={note.etag}
                    required
                    type="text"
                    className="form-control"
                    id="etag"
                    onChange={changehandler}
                    name="etag"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleclick}
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>

        {notes.map((note) => {
          return (
            <div key={note._id} className="col-sm-4">
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Notes;
