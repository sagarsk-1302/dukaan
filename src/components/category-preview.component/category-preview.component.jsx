import './category-preview.styles.scss'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product.card/product-card.container';
const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    const categoryNavigateHandler = ()=>{
        navigate(title)
    }
    return (
        <div key={title} className="category-preview">
            <h3><span className='navigate' onClick={categoryNavigateHandler}>{title.toUpperCase()}</span></h3>
            <div className="products">
                {
                    products.filter((_,idx)=>idx<4).map(product=>
                        <ProductCard product={product} key={product.id} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;