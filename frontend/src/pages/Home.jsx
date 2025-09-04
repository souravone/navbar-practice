import { useState } from "react";
import NotesList from "../components/NotesList";

function Home({ notes, setNotes }) {
  const initialData = {
    title: "",
    category: "Work",
    priority: "Med",
    description: "",
  };
  const [noteFormData, setNoteFormData] = useState(initialData);

  const handleNoteFormInput = (e) => {
    setNoteFormData({ ...noteFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteFormData.title || !noteFormData.description) return;

    const newNote = {
      id: Date.now(),
      ...noteFormData,
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="max-w-6xl mx-auto my-6">
      <h2 className="font-bold text-3xl">Welcome back, [Name]</h2>
      <form
        action="submit"
        className="bg-blue-100 border-2 border-blue-600 p-6 flex flex-col gap-2 my-6 max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl text-blue-600 font-bold mb-4 text-center">
          Add notes
        </h3>
        <div>
          <label htmlFor="" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            className="w-full border-1 border-black rounded-md mt-1 p-1"
            value={noteFormData.title}
            name="title"
            onChange={handleNoteFormInput}
          />
        </div>
        <div>
          <label htmlFor="category" className="font-semibold">
            Category
          </label>
          <div className="">
            <select
              className="w-full border-1 border-black rounded-md mt-1 p-1"
              value={noteFormData.category}
              onChange={handleNoteFormInput}
              name="category"
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="priority" className="font-semibold">
            Priority
          </label>
          <div className="">
            <select
              className="w-full border-1 border-black rounded-md mt-1 p-1"
              value={noteFormData.priority}
              onChange={handleNoteFormInput}
              name="priority"
            >
              <option>High</option>
              <option>Med</option>
              <option>Low</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="font-semibold">
            Descrption
          </label>
          <textarea
            type="text"
            className="w-full border-1 border-black rounded-md mt-1 p-1"
            value={noteFormData.description}
            onChange={handleNoteFormInput}
            name="description"
          />
        </div>
        <button
          type="submit"
          className="border-2 border-blue-600 bg-blue-300 rounded-lg font-bold px-4 py-2 mt-4 mr-auto cursor-pointer hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      <h3 className="font-semibold text-2xl text-blue-600 my-2">Notes</h3>
      <NotesList notes={notes} />
    </div>
  );
}

export default Home;
