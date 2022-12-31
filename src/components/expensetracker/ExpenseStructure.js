import React, { useEffect, useState } from 'react'
import ExpenseTrackerLabel from './ExpenseTrackerLabel'
import TransactionHistory from './TransactionHistory'
import TransactionForm from './TransactionForm'
import { uniqueId } from './../../uniqueId'


const ExpenseStructure = ({color}) => {
    console.log(color);
    const [income , setIncome] = useState(0);
    const [expense , setExpense] = useState(0);
    const [transactionhistory , setTransactionhistory] = useState([]);

    const saveData = () =>{
        localStorage.setItem('expenseTracker',JSON.stringify(transactionhistory))
    }
    
    const calculateExpense = () => {
        let income=0 ; let expense =0;
        
        transactionhistory.forEach((data)=>{
            // console.log(transactionhistory);
            if(data.type === 'income'){
                income += data.amount;
                
            }else if (data.type === 'expense'){
                expense += data.amount;
            }
        })

        saveData();
        setIncome(income);
        setExpense(expense);
        
    }
    
    useEffect(()=>{
        let oldStore = JSON.parse(localStorage.getItem('expenseTracker'));
        
            setTransactionhistory(oldStore);
        
            calculateExpense();
        
        
       
    },[]);

    useEffect(()=>{
        calculateExpense();
    },[transactionhistory]);

    const handleAddNewTransaction = (data) =>{
       
        let tempTransaction = [...transactionhistory , data];
        
        setTransactionhistory(tempTransaction);
    }

    const handleDeleteTransaction = (id) => {
        let tempTransaction = transactionhistory.filter((item)=> item.id != id );

        setTransactionhistory(tempTransaction);
    }

  return (
    <div style={{backgroundColor:{color}}}>
       <ExpenseTrackerLabel income={income} expense={expense} />
       <TransactionHistory transactionhistory={transactionhistory} onDeleteTransaction={handleDeleteTransaction}/>
       <TransactionForm onNewTransaction={handleAddNewTransaction}/>
    </div>
  )
}

export default ExpenseStructure
