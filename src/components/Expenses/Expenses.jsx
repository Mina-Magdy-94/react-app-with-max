import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFliter from './ExpensesFliter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({expenses,onFilteringYears}) => {
    const [filteredyear,setFilteredYear]=useState('all')

    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
        onFilteringYears(selectedYear)
    }

    

    return (
        <Card className='expenses'>
            <ExpensesFliter selected={filteredyear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={expenses}/>
            <ExpensesList expenses={expenses}/>
        </Card>
    )
}

export default Expenses