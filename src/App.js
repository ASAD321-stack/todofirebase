import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import InputTodo from "./components/InputTodo";
import { auth } from "./firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [log, setLog] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLog(user);
      } else {
        setLog(null);

      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {log ? (
          <Route path="/" element={<InputTodo user={log} />} />
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
