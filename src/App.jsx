import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./react/Page/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
