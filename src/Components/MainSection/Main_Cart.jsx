import React from 'react'

import Cart_Main from './Cart_Main'



const Main_Cart = () => {
  return (
    <div className='Main-cart-container-main'>
        <h3 className='Main-cart-container-heading raleway-bold'>Breif About my Work</h3>
        <div className="Main-cart-container-items">
          <Cart_Main type="Total Project" total_number={10}/>
          <Cart_Main type="Total Github Contributions" total_number={20}/>
          <Cart_Main type="Total Leetcode Solved" total_number={100}/>
        </div>
    </div>
  )
}

export default Main_Cart