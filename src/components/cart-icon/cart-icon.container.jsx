import {ReactComponent as CartIcon} from '../../assets/cart.svg';
import './cart-icon.style.scss'
import { useContext } from 'react';
import { ShoppingCartContext } from '../shoppingcart.context/shoppingcart.context.component';

const ShoppingCartIcon = ()=>{
    const {isCartOpen,setIsCartOpen, cartItems} = useContext(ShoppingCartContext);
    const cartHandler =()=>{
        setIsCartOpen(!isCartOpen);
    }
    const itemcount = cartItems.reduce((accumulator, cartItem)=> accumulator+cartItem.quantity,0)
    return(
    <div className="cart-icon" onClick={cartHandler}>
        <CartIcon className='icon'/>
        <span className='item-count'>{itemcount}</span>
    </div>)
}

export default ShoppingCartIcon;