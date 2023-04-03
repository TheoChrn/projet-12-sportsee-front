import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./react/Page/Dashboard";
import { UserProvider } from "./react/Context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
