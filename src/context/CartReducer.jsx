export const totalquantity = (cart)=>{
  return cart.reduce((sum,cartitem) => sum + cartitem.quantity , 0 )
}

export const totalprice = (cart)=>{
  return cart.reduce((total,cartitem) => total + cartitem.quantity * cartitem.price , 0 )
}

const CartReducer = (cart,action)=>{
  switch(action.type){
    case "Add":
      const itemExist = cart.find((p)=> p.id === action.payload.id)
      if(itemExist){
        return cart.map((item)=>(
          item.id === action.payload.id ?
          {...item,quantity : item.quantity+1}
          :
          item
        ))
      }
      return [...cart,{...action.payload,quantity : 1}]

    case "Increase":
      return cart.map((item)=>(
        item.id === action.payload.id && item.quantity < 10 ?
        {...item,quantity : item.quantity+1}
        : item
      ))

    case "Decrease":
      return cart.map((item)=>(
        item.id === action.payload.id && item.quantity > 1 ? 
        {...item,quantity : item.quantity-1}
        : item
      ))

    case "Remove":
      return cart.filter((p)=> p.id !== action.id ) 

    default :
    return cart
  }
}

export default CartReducer
