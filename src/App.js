import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./components/access/LogInPage";
import SignUpPage from "./components/access/SignUpPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;