import React from 'react'
import { useState } from 'react'
import ExpenseList from './ExpenseList'

const Expense = () => {
  //also... const wow=[1,2,3] put wow inside useState like useState(wow)
  const[expenseData,setData]= useState([])
  
  const[name,setName]=useState('')
  const[amount,setAmount]=useState('')
  const[date,setDate]=useState('')

  const [Message, setMessage] = useState('');
  const [Message1, setMessage1] = useState('');
  


    const onNameChangeHandler=(e)=>{
        console.log('js event worked',//e.target.value)  
        {value:  e.target.value})
        //name=event.targer.value--- wrong 
        setName(e.target.value)
        setMessage('');
        
    }
    const onAmountChangeHandler=(e)=>{
        console.log('js event worked twice',
        {amount:  e.target.value})
        setAmount(e.target.value)
        setMessage1('');
    }
    const onDateChangeHandler=(e)=>{
        console.log('js event worked thrice',
        {date:  e.target.value})
        setDate(e.target.value)
    }
    
    const onSubmitHandler=()=>{
      if (!name) {
        setMessage('Please enter a name');
        return;
      }
      if (!amount) {
        setMessage1('Please enter an amount');
        return;
      }

      const data={name, amount: +amount, date}  //+amount to store an integer value
      setData((prevState)=>[...prevState,data])
      
      setName('')
      setAmount('')
      setDate('')
    }

    const onSubmitHandler2=()=>{
      setName('')
      setAmount('')
      setDate('')
    }
    
    const onSubmitHandler3=()=>{
      setData('')
    }


  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-auto">

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" className="form-control" placeholder="Expense name" aria-label="Expense name" aria-describedby="basic-addon1" onChange={(e)=>onNameChangeHandler(e)}  value={name}/>
            </div>
            {Message && <p className="text-danger">{Message}</p>}

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Amount</span>
            <input type="number" className="form-control" placeholder="Expense amount" aria-label="Expense amount" aria-describedby="basic-addon1" onChange={onAmountChangeHandler}  value={amount}/>
            </div>
            {Message1 && <p className="text-danger">{Message1}</p>}

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Date</span>
            <input type="date" className="form-control" placeholder="date" aria-label="date" aria-describedby="basic-addon1" onChange={onDateChangeHandler} value={date} />
            </div>

            </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <input className="btn btn-primary" type="submit" value="Add expense" onClick={onSubmitHandler}/>
          </div>
          <div className="col-md-3">
            <input className="btn btn-primary" type="submit" value="Clear expense form" onClick={onSubmitHandler2}/>
          </div>
          <div className="col-md-4">
            <input className="btn btn-primary" type="submit" value="Clear expense" onClick={onSubmitHandler3}/>
          </div>
        </div>
    </div>

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