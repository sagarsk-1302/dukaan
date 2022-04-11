import { Routes, Route } from "react-router-dom";
import CategoriesPreview from '../categories-preview/categories-preview.component'
import CategoryRoute from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils/firebase.utils";
import { useDispatch } from "react-redux";
import {setCategoryMap} from '../../store/category/category-actions'
const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategories = async()=>{
            const categoryMap = await getCategoriesAndDocuments(); 
            dispatch(setCategoryMap(categoryMap))
        }
        getCategories()
    },[])
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<CategoryRoute/>}/>
        </Routes>
    )
}

export default Shop;