import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../../Redux/Action/Filter'

const ExpenseListFilters = (props) => {
 const handleChange = (e) => {
   if(e.target.value === 'date'){
    props.dispatch(sortByDate())
   }else if(e.target.value === 'amount'){
    props.dispatch(sortByAmount())
   }
 }
  return (
    <div>
     <input type="text" value={props.filters.text} name="search" onChange={(e) => props.dispatch(setTextFilter(e.target.value))}/>
     {/* this onChange function helps to filter through the redux store using the input fields */}
     <select 
        value={props.filters.sortBy}
        onChange={handleChange}
      >
       <option value="date">Date</option>
       <option value="amount">Amount</option>
     </select>
    </div>
  )
}

const mapStateToProps = state => {
 return {
  filters: state.filters
 }
}

export default connect(mapStateToProps)(ExpenseListFilters)