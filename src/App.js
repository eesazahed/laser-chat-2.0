import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import { useAuthListener } from "./firebase/useAuthListener";
import "./App.css";
import { userTheme } from "./components/SetTheme";

function App() {
  const current = useAuthListener();

  userTheme();
  return (
    <div className="App">
      {current.user ? <Homepage user={current.user} /> : <Register />}
    </div>
  );
}

export default App;
