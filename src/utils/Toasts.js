import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Toasts = () => {
    const notify = () => {
        toast("An item has been added!");
    }

  return (
    <div>
         <ToastContainer />
    </div>
  )
}


export default Toasts