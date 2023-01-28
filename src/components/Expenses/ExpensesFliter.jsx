import React from 'react'

import './ExpensesFilter.css'

const ExpensesFliter = ({selected,onChangeFilter}) => {
    const dropdownChangeHandler=(e)=>{
        onChangeFilter(e.target.value)
    }
  return (
    <div className='expense-filter__container'>
        <div className='expense-filter__child'>
            <label>Filter By Year</label>
            <select value={selected} onChange={dropdownChangeHandler}>
            <option value="all">All</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    </div>
  )
}

export default ExpensesFliter