import React, { useState } from 'react';

const Counter = () => {
    const [Count, setCount] = useState(0)
const Name='Muhammad Iqran'
    return (
        <div>
            <>
            <div className="text-center py-2">
          <h4><u>{Name.toUpperCase()}</u></h4>
                <button className='btn border-0 btn-danger m-4 rounded-0 p-2' aria-label="decriment value"  onClick={() => {
                    setCount(Count - 1 )
            }}> - </button>


            <span className="p-5">{Count} </span>

            
            <button aria-label="Increament value" className='btn border-0 btn-success rounded-0 m-4 p-2' onClick={() =>{
                            setCount(Count+1)
                }}> 
                    +
                </button>
      
       <br />
                <img src="https://cdn.pixabay.com/photo/2021/08/16/03/27/lorikeet-6549172__340.jpg" alt="" />
        </div>
       
            </>
        </div>
    )
}

export default Counter
