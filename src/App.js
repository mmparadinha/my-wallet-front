import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./components/access/LogInPage";
import SignUpPage from "./components/access/SignUpPage";
import PrivatePages from "./PrivatePages";
import Home from "./components/homepage/Home";
import NewIncome from "./components/inputs/NewIncome";
import NewExpense from "./components/inputs/NewExpense";
import EditIncome from "./components/inputs/EditIncome";
import EditExpense from "./components/inputs/EditExpense";

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
          <Route path="/newincome" element={
            <PrivatePages>
              <NewIncome />
            </PrivatePages>
          } />
          <Route path="/newexpense" element={
            <PrivatePages>
              <NewExpense />
            </PrivatePages>
          } />
          <Route path="/editincome" element={
            <PrivatePages>
              <EditIncome />
            </PrivatePages>
          } />
          <Route path="/editexpense" element={
            <PrivatePages>
              <EditExpense />
            </PrivatePages>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;