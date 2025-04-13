import React from 'react'

export default function forms() {
  return (
    <div>
        <form action="" className= "forms">
            <input type="text" name= "name" id="expense" placeholder='Expense' required />
            <input type="text" name= "name" id="description" placeholder='Description' />
            <input type="text" name="name" id="category" placeholder='Category' />
            <input type="number" name="name" id="amount" placeholder='Amount Kshs' />
            <input type="date" name="name" id="date" placeholder='Date' />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
