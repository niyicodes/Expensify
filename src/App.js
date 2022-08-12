import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
// import Redux101 from './Playground/Redux101'
import ExpenseDashboardPage from './Pages/Dashboard/ExpenseDashboardPage';
import AddExpensePage from './Pages/AddExpense/AddExpensePage';
import './App.css';
import Header from './Components/Header/Header';
import EditExpense from './Pages/EditExpense/EditExpense';
import Help from './Pages/Help/Help';


function App() {
  return (
    <div className="todo-app">
      <Header />
      <Routes>
        <Route exact path="/" element={<ExpenseDashboardPage />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
