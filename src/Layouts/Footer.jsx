import React from 'react'
import { dataFooter } from './FooterDb'

const Footer = () => {

  return (
    <footer className='mt-5 bg-black text-white'>
      <div className='container d-md-flex justify-content-between align-items-center'>
        {dataFooter.map((datumFooter)=>{
          const {id, title, contact, about, careers, blog} = datumFooter
          return(
            <div key={id}>
              <h2>{title}</h2>
              <ul className='list-unstyled lh-lg'>
                <li>{contact}</li>
                <li>{about}</li>
                <li>{careers}</li>
                <li>{blog}</li>
              </ul>

            </div>
          )
        })}
      </div>
       <p className='text-center'>
        Copyright &copy;{new Date().getFullYear()} Janat.com. All right resverd
       </p>
    </footer>
  )
}

export default Footer