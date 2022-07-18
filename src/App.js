import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";

import Allstudents from "./component/Allstudents";
import Addstudents from "./component/Addstudents";
import Editstudent from "./component/Editstudent";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div>
            <Routes>

              <Route path="/all-students" element={<Allstudents />} />
              <Route path="/" element={<Addstudents />} />
              <Route path="/edit-student/:id" element={<Editstudent />} />
   
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
