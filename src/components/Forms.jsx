import React, { useState } from 'react'

export default function forms({AddExpense}) {
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
        <form action="" className= "forms"onSubmit={handleSubmit}>
            <input type="text" name= "name" id="expense" placeholder='Expense' value={formData.expense} onChange={formChange} />
            <input type="text" name= "name" id="description" placeholder='Description'value={formData.description} onChange={formChange} />
            <input type="text" name="name" id="category" placeholder='Category'value={formData.category} onChange={formChange} />
            <input type="number" name="name" id="amount" placeholder='Amount Kshs' value={formData.amount} onChange={formChange} />
            <input type="date" name="name" id="date" placeholder='Date' />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
