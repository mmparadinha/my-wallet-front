import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./components/access/LogInPage";
import SignUpPage from "./components/access/SignUpPage";
import PrivatePages from "./PrivatePages";
import Home from "./components/private/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={
            <PrivatePages>
              <Home />
            </PrivatePages>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;