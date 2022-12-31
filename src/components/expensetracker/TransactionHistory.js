import React from 'react'

const TransactionHistory = ({ transactionhistory ,onDeleteTransaction}) => {

    return (
        <div className='expense-structure'>
            <h1>Transaction History</h1>
            <ul className='transactions'>
                {
                    
                    transactionhistory.map((data) =>
                    
                        <li key={data.id}>
                            {data.name}: Rs. {data.amount}
                            <button className='transactions-delete-button' type='button' onClick={()=>onDeleteTransaction(data.id)}>X</button>
                        </li>


                    )
                }

            </ul>
        </div>
    )
}

export default TransactionHistory
