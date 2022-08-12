import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectedExpenses from '../../Redux/Selectors/expenses'

const ExpenseList = (props) => {
 return (
  <div>
   <h1>ExpenseList</h1>
   {props.expenses.map((expense) => {
    return <ExpenseListItem {...expense} key={expense.id}/>
   })}
  </div>
 )
}

const mapStateToProps = state => ({
 expenses: selectedExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList);