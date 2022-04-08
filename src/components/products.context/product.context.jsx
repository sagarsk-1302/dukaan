import { createContext, useState } from "react"
import SHOP_PRODUCTS from '../../assets/shop-data.json'

export const ProductContext = createContext({
    products: []
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_PRODUCTS)
    const value = { products, setProducts }
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}