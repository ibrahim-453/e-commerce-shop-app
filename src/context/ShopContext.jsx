import { createContext, useContext, useEffect, useReducer, useState } from "react";
import CartReducer from "../context/CartReducer"

export const ShopContext = createContext()

export const useShop = () => ( useContext(ShopContext) )

export const ShopProvider = ({children})=>{
    const [allproducts,setAllProducts] =useState([])
    const [product,setProduct] = useState([])
    const [singleproduct,setSingleProduct] = useState({})
    const [categories,setCategories] = useState([])
    const [cart,dispatch] = useReducer(CartReducer,[])
    
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

    const getsingleproduct = async(id)=>{
        try {
            const url = `https://dummyjson.com/products/${id}`
            let res = await fetch(url)
            res = await res.json()
            if(res){
                setSingleProduct(res)
            }
        } catch (error) {
            console.log("Error Ocuured",w);
            
        }
    }
    useEffect(()=>{
        products()
        category()
    },[])
    return(
        <ShopContext.Provider value={{allproducts,product,singleproduct,categories,cart,dispatch,getbycategory,getsingleproduct}} >
            {children}
        </ShopContext.Provider>
    )  
}