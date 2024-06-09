import React from 'react'

export const CartContainer = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  )
}