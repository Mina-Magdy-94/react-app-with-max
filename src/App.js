import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 27)
  },
  {
    id: 'e4',
    title: 'New Dest (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState]
    })
  }

  const filteringYearshandler = (filteringYear) => {
    filteringYear === 'all' ? setExpenses(DUMMY_EXPENSES) :
      setExpenses(DUMMY_EXPENSES.filter((el) => el.date.getFullYear() === Number(filteringYear)))
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onFilteringYears={filteringYearshandler} />
    </div>
  );
}

export default App;
