import { notes } from "../data/noteData";
import Note from "./Note";

function NotesList() {
  return (
    <div className="grid gap-2 mt-5 lg:grid-cols-3">
      {notes.map((note, i) => (
        <Note note={note} key={i} />
      ))}
    </div>
  );
}

export default NotesList;
