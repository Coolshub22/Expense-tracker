import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import Tables from './components/Tables';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const AddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses(prev => [...prev, newExpense]);
  };

  const DeleteExpense = (idToDelete) => {
    setExpenses(prev => prev.filter(exp => exp.id !== idToDelete));
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Forms AddExpense={AddExpense} />
      <Tables expenses={filteredExpenses} DeleteExpense={DeleteExpense} />
    </>
  );
}

export default App;