import { useContext } from "react";
import { ProductContext } from "../../components/products.context/product.context";
import ProductCard from "../../components/product.card/product-card.container";
import "./shop.styles.scss"
const Shop= ()=>{
    const {products, setProducts} = useContext(ProductContext)
    return(
        <div className="products">
            {products.map(product =>{
                return <ProductCard product={product} key={product.id}/>
            })}
        </div>
    )
}

export default Shop;