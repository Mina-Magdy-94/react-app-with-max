import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
  const saveExpenseHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:((Math.random()*10).toFixed(0)).toString()
    }
    onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense