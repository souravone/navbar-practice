function Note({ note }) {
  return (
    <div
      className={`border-2 border-blue-500 rounded-md p-4 flex flex-col ${
        note.priority === "High"
          ? "bg-rose-200 dark:bg-rose-700"
          : note.priority === "Med"
          ? "bg-emerald-200 dark:bg-emerald-700"
          : "bg-yellow-200 dark:bg-yellow-700"
      }`}
    >
      <div className="font-semibold">{note.title}</div>
      <div className="flex justify-between mt-2">
        <div className="text-sm">{note.date}</div>
        <div className="text-sm">{note.time}</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-sm font-semibold">{note.category}</div>
        <div className="text-sm font-semibold">{note.priority}</div>
      </div>
      <div className="mt-2">{note.description}</div>
      <div className="flex justify-between mt-4">
        <button className="text-sm font-semibold border-2 px-2 py-1 rounded-md">
          Delete
        </button>
        <button className="text-sm font-semibold border-2 px-2 py-1 rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Note;
