import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Editor from "./layout";
import Error404 from "./layout/error";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
