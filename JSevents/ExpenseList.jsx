import React from 'react'

const ExpenseList = ({name,amount,date,index}) => {
  return (
    <div>
        <>
        <div className="container list-group">
            <div className="row list-group-item ">
                <div className="col">
                    
                <div className='d-flex justify-content-center fs-6 ' key={index}>
                <p style={{ margin: '0px 20px' }}>name-{name}</p>
                <p style={{ margin: '0px 20px' }}>amount-{amount}</p>
                <p style={{ margin: '0px 20px' }}>date-{date}</p>

                </div>

                </div>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default ExpenseList