import React from 'react'
import ExpenseList from '../../Components/Expense/ExpenseList';
import ExpenseListFilters from '../../Components/Expense/ExpenseListFilters';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  )
}

export default ExpenseDashboardPage