import { createContext, useContext, useEffect, useState } from "react";

export const ShopContext = createContext()

export const useShop = () => ( useContext(ShopContext) )

export const ShopProvider = ({children})=>{
    const [allproducts,setAllProducts] =useState([])
    const [product,setProduct] = useState([])
    const [categories,setCategories] = useState([])
    const products = async()=>{
        try {
            const url = 'https://dummyjson.com/products'
            let res = await fetch(url)
            res = await res.json()
            console.log(res);
            
            if(res){
                setProduct(res.products)
                setAllProducts(res.products)
            }
        } catch (error) {
            console.log("Error occured",error.message);
            setProduct([])
            setAllProducts([])
        }
    }
    const category = async()=>{
        try {
            const url = 'https://dummyjson.com/products/categories'
            let res = await fetch(url)
            res = await res.json()
            if(res){
                setCategories(res)
            }
        } catch (error) {
            console.log("Failed To Fetch Categories",error.message);
            setCategories([])
            
        }
    }
    const getbycategory = async(categoryname)=>{
        try {
            const url = `https://dummyjson.com/products/category/${categoryname}`
            let res = await fetch(url)
            res = await res.json()
            if(res){
                setProduct(res.products)
            }
        } catch (error) {
            console.log("ErroOccured",error);
        }
    }
    useEffect(()=>{
        products()
        category()
    },[])
    return(
        <ShopContext.Provider value={{allproducts,product,categories,getbycategory}} >
            {children}
        </ShopContext.Provider>
    )  
}