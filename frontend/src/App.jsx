import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home notes={notes} setNotes={setNotes} /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
