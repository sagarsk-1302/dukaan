import './cart-item.style.scss'

const CartItem = ({cartItem})=>{
    const {imageUrl,id,name,quantity,price} = cartItem;
    return(
        <div className="cart-item" key={id}>
            <img src={imageUrl} alt={name} className='item-photo'/>
            <div className="details">
            <p>{name}</p>
            <span>{quantity} x {price}$ = {price*quantity}$</span>
            
            </div>
        </div>
    )
}

export default CartItem;