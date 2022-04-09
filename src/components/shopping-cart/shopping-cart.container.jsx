import './shopping-cart.style.scss';
import { useContext } from 'react';
import { ShoppingCartContext } from '../shoppingcart.context/shoppingcart.context.component';
import CartItem from '../cart-item/cart-item.container';
const ShoppingCart = ()=>{
    const {cartItems} = useContext(ShoppingCartContext)
    return(
        <div className="shopping-cart">
            <div className="items">
                {
                    cartItems.map(cartItem =>{
                        return (
                            <CartItem cartItem={cartItem}/>
                        )
                    } )
                }
            </div>
            <button className='btn-checkout'>Checkout</button>
        </div>
    )
}

export default ShoppingCart;