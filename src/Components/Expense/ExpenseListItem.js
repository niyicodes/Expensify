import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../../Redux/Action/Expenses'

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => {
 console.log()
 return (
  <div>
   <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
   <p>{amount}-{createdAt}</p>
   <button
    onClick={() => dispatch(removeExpense({id}))}
    >
    Remove
   </button>
  </div>
 )
} 

export default connect()(ExpenseListItem)