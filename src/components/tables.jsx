import React from 'react'

export default function Tables() {
  return (
    <div>
        <h1>Tables</h1>
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Groceries</td>
                    <td>Kales</td>
                    <td>Grocery</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>Chapo</td>
                    <td></td>
                    <td></td>
                    <td>$100.00</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
