import { createContext, useContext, useEffect, useState } from "react";

export const ShopContext = createContext()

export const useShop = () => ( useContext(ShopContext) )

export const ShopProvider = ({children})=>{
    const [product,setProduct] = useState([])
    const products = async()=>{
        try {
            const url = "https://api.escuelajs.co/api/v1/products"
            let res = await fetch(url)
            res = await res.json()
            if(res){
                setProduct(res)
            }
        } catch (error) {
            console.log("Error occured",error);
            setProduct(null)
        }
    }
    useEffect(()=>{
        products()
    },[])
    return(
        <ShopContext.Provider value={{product}} >
            {children}
        </ShopContext.Provider>
    )  
}