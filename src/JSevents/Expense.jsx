import React from 'react'
import { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'

const Expense = () => {
  const[expenseData,setData]= useState([])

  const onSetDataHandler =(data)=>{
    console.log(data)
  }

  return (
    <>
    <ExpenseForm onSetDataHandler={onSetDataHandler}/>

    <hr/>

    <div className="container">
      <div className="row">
        <div className="col-md">
          <p className='text-center fs-3 font-monospace fw-light Light weight text.'>
            Expense list
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        
          {expenseData.length?
            (expenseData.map((ele,index,arr)=>(
            <ExpenseList  
            name={ele.name}
            amount={ele.amount} 
            date={ele.date}
            index={index}  />
          ))) : <p>enter expense</p>}

        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    </>
    
  )
}

export default Expense