import './product-card.styles.scss';
import { useContext } from 'react';
import { ShoppingCartContext } from '../shoppingcart.context/shoppingcart.context.component';


const ProductCard = ({ product }) => {
    const {addItemToCart} = useContext(ShoppingCartContext)
    const addToCartHandler =()=>{
        addItemToCart(product);
    }
    return (
        <div className="product-card" >
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
                <p>{product.name}</p>
                <p>{product.price} $</p>
            </div>

            <button onClick={addToCartHandler}>Add to cart</button>
        </div>
    )
}

export default ProductCard;