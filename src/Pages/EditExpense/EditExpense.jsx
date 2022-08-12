import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from '../../Components/Expense/ExpenseForm'

const EditExpense = (props) => {
  console.log(props)
  const params = useParams()
  const paramsId = params.id
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log('updated', expense)
        }}
      />
    </div>
  )
}

function mapStateToProps(state,{id} ) {
  return{
    expense: state.expenses.find(
      (expense) => expense.id === state.expenses.id
    )
  };
};
export default connect(mapStateToProps)(EditExpense);