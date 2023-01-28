import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    const {expenses}=props
    return (
        <Card className='expenses'>
            {expenses.map((el) => {
                return (<ExpenseItem key={el.id} element={el} />)
            })}
        </Card>
    )
}

export default Expenses