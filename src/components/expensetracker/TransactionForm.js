import React, { useState } from 'react'
import { uniqueId } from '../../uniqueId';

const TransactionForm = ({onNewTransaction}) => {


  const [nameValue, setNameValue] = useState('');
  const [amountValue, setAmountValue] = useState('');


  const addTransaction = (type) => {
    if(amountValue > 0 && nameValue.length>0){
    
    const data = {
      id: uniqueId(), name: nameValue, amount: parseInt(amountValue), type: type
  
  }
  console.log(data);
    
    onNewTransaction(data);
    setAmountValue('');
    setNameValue('');
  }
}

  return (
    <div className='expense-structure'>
      <h1>Add New Transaction</h1>

      <form className='transaction-form'>

        <label>Name

          <div>
            <input type="text" value={nameValue}
              onChange={(e) => setNameValue(e.target.value)} required />
          </div>

        </label>

        <label>Amount

          <div>
            <input type="number" value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)} required />
          </div>

        </label>

        <div>
          <button className='income-btn' type='button' onClick={() => addTransaction('income')} required>Add Income</button>
          <button className='expense-btn' type='button' onClick={() => addTransaction('expense')}>Add Expense</button>
        </div>

      </form>
    </div>
  )
}

export default TransactionForm
