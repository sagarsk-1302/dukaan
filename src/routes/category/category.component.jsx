import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CategoryContext } from "../../components/category.context/category.context"
import ProductCard from "../../components/product.card/product-card.container"
import './category.style.scss'
const CategoryRoute = () => {
    const { categoryMap } = useContext(CategoryContext)
    const { category } = useParams()
    return (
        <div className="category">
            <h1>{category.toLocaleUpperCase()}</h1>
            <div className="products">
                {
                    categoryMap && categoryMap[category] ? (categoryMap[category].map(product =>
                        <ProductCard key={product.id} product={product} />
                    )):null
                }
            </div>
        </div>
    )
}

export default CategoryRoute;