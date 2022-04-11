import './shopping-cart.style.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../shoppingcart.context/shoppingcart.context.component';
import CartItem from '../cart-item/cart-item.container';
const ShoppingCart = ()=>{
    const {cartItems} = useContext(ShoppingCartContext)
    const navigate = useNavigate()
    const navigatetoCheckoutHandler = ()=>{
        navigate('/checkout')
    }
    return(
        <div className="shopping-cart">
            <div className="items">
                {
                    cartItems.map(cartItem =>{
                        return (
                            <CartItem cartItem={cartItem} key={cartItem.id}/>
                        )
                    } )
                }
            </div>
            <button onClick={navigatetoCheckoutHandler} className='btn-checkout'>Checkout</button>
        </div>
    )
}

export default ShoppingCart;