import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
     <h1>Expensify</h1>
     <ul>
      <NavLink to="/" activeclassname="active">Dashboard</NavLink>
      <NavLink to="/create"  activeclassname="active">Expense</NavLink>
      <NavLink to="/edit/:id"  activeclassname="active">Edit</NavLink>
      <NavLink to="/help"  activeclassname="active">Help </NavLink>
     </ul>
    </header>
  )
}

export default Header;