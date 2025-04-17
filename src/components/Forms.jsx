import React, { useState } from 'react';

export default function Forms({ AddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  function formChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    AddExpense(formData);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  }

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Expense" value={formData.name} onChange={formChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={formChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={formChange} />
        <input type="number" name="amount" placeholder="Amount Kshs" value={formData.amount} onChange={formChange} />
        <input type="date" name="date" value={formData.date} onChange={formChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}