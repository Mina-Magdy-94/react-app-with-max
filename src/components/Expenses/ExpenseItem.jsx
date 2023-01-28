import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem({ element }) {
    const { title, amount, date } = element

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </Card>
        </li>

    )
}
export default ExpenseItem