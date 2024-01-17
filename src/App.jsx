import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Homepage, Login } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
