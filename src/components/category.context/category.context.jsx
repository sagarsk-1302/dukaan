import { createContext, useState, useEffect } from "react"
// import SHOP_DATA from '../../assets/shop-data.js';
import { createCollectionWithObjects, getCategoriesAndDocuments } from "../../utils/firebase.utils/firebase.utils";

export const CategoryContext = createContext({
    categoryMap: {}
})

export const CategoryProvider = ({ children }) => {
    const [categoryMap, setCategoryMap] = useState({})
    useEffect(()=>{
        const getCategories = async()=>{
            const categoryMap = await getCategoriesAndDocuments(); 
            setCategoryMap(categoryMap) 
        }
        getCategories()
    },[])
    const value = { categoryMap, setCategoryMap}
    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}