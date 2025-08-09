import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

function ProductByCategory() {
    const {categoryName} = useParams()
    const {product,getbycategory} = useShop()

    useEffect(()=>{
        getbycategory(categoryName)
    },[categoryName])
  return (
    <div className='w-full h-screen'>
        <div className='flex m-15'>
      {product.map(p => (
        <div key={p.id}>
            <div>
                <img width={100} height={100} src={p.images[0]} alt={p.title} />
            </div>
            <div>
                <h1>{p.title}</h1>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ProductByCategory