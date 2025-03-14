import React, { useEffect, useState } from 'react'
import "./Clock.css"

function Clock() {
    const [Hours , SetHours ] = useState(10)
    const [Min , SetMin ] = useState(10)
    const [Secends , SetSecends ] = useState(0)


useEffect(() => {
    setTimeout(() => {
        SetSecends(prev => prev - 1)

        if(Secends == 0 ) {
            SetSecends(59)
            SetMin(prev => prev - 1)
        }

        if(Min == 0) {
            SetMin(59)
            SetHours(prev => prev - 1)
        }

        if(Secends , Min , Hours == 0) {
            SetSecends(0)
            SetMin(0)
            SetHours(0)
        }
    }, 1000);
} , [Secends])

  return (
    <div className='Clock'>
        <h1 className='text-center'>Reverse Clock</h1>
        <br />
        <div className='d-flex justify-content-around'>
            <h3 className='bg-light p-3'>{Hours}</h3>
            <h3 className='bg-light p-3'>{Min}</h3>
            <h3 className='bg-light p-3'>{Secends}</h3>
        </div>
    </div>
  )
}

export default Clock