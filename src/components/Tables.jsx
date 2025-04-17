import React from 'react';

export default function Tables({ expenses, DeleteExpense }) {
  return (
    <div className='table-cont'>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <td>
                <button onClick={() => DeleteExpense(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}