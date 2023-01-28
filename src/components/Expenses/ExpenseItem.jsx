import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem({element}) {
    const {title,amount,date}=element
    const [expenseTitle,setexpenseTitle]=useState(title)
    const clickHandler=()=>{
        setexpenseTitle((prevTitle)=>prevTitle=`updated`)
        console.log(expenseTitle)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem