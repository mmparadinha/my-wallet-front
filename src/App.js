import React, { useState } from "react";
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
import TransactionsContext from './components/contexts/TransactionsContext';

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <GlobalStyles />
      <TransactionsContext.Provider value={{ transactions, setTransactions }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route element={<PrivatePages/>}>
              <Route path="/home" element={<Home />} />
              <Route path="/newincome" element={<NewIncome />} />
              <Route path="/newexpense" element={<NewExpense />} />
              <Route path="/editincome" element={<EditIncome />} />
              <Route path="/editexpense" element={<EditExpense />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TransactionsContext.Provider>
    </>
  );
}

export default App;