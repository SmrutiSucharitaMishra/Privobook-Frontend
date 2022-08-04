/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Notes from "./Notes";
import Login from "./Login";
import NoteContext from "./contexts/Notes/noteContext";
function Home() {
  const context = useContext(NoteContext);
  const { getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container my-3">
      {localStorage.getItem("token") ? <Notes /> : <Login />}
    </div>
  );
}

export default Home;
