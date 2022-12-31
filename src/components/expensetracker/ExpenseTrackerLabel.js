import React from 'react'

const ExpenseTrackerLabel = ({income,expense}) => {
  return (
    <div className='expense-structure'>
      <h1>Expense Tracker</h1>
      <h3 className='balance-val'>Your Total Balance = Rs. {income - expense}</h3>
      <div className='row row-expense' style={{display:'flex' , justifyContent:'center'}}>
        <div className='col col-income'>
            <h3>Your Assets Worth</h3>
            <h3 className='income-text'>Rs. {income}</h3>
        </div>
        <div className='col col-expense'>
            <h3 >Your Expenses</h3>
            <h3 className='expense-text'>Rs. {expense}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default ExpenseTrackerLabel
