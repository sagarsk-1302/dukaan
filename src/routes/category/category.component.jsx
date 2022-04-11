import { useParams } from "react-router-dom"
import ProductCard from "../../components/product.card/product-card.container"
import './category.style.scss'
import { useSelector } from "react-redux"
import { getCategoryMap } from "../../store/category/category-selector"
const CategoryRoute = () => {
    const  categoryMap = useSelector(getCategoryMap)
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