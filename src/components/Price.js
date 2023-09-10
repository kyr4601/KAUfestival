import React from 'react'
import './../assets/styles/price.css'
import priceImg from './../assets/images/price.png'

const Price = ({menu, price}) => {
  return (
    <div className='price-container'>
      <p className='menu'>{menu}</p>
      <hr />
      <div className='wrap-img'>
        <img src={priceImg} alt='가격표' />
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Price
