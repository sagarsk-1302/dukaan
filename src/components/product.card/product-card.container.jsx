import './product-card.styles.scss';

const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <img src={product.imageUrl} className="product-image" />
            <div className="product-details">
            <p>{product.name}</p>
            <p>{product.price} $</p>
            </div>
            
            <button>Add to cart</button>
        </div>
    )
}

export default ProductCard;