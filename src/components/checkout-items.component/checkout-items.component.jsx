import './checkout.style.scss';
import { ReactComponent as Increment } from '../../assets/increment.svg';
import { ReactComponent as Decrement } from '../../assets/decrement.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { useContext } from 'react';
import { ShoppingCartContext } from '../shoppingcart.context/shoppingcart.context.component';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price, id } = cartItem;
    const {incrementQuantity,decrementQuantity, removeItem} = useContext(ShoppingCartContext)
    const quantityDecrementHandler = ()=>{
        decrementQuantity(cartItem)
    }
    const quantityIncrementHandler = ()=>{
        incrementQuantity(cartItem)
    }
    const removeItemHandler = ()=>{
        removeItem(cartItem)
    }
    return (
        <tr className='row' key={id}>
            <td className="image"><img src={imageUrl} alt="" /></td>
            <td> {name} </td>
            <td >
                <div className='quantity'>
                    <Decrement className='quantity-control' onClick={quantityDecrementHandler} /><span>{quantity}</span> <Increment className='quantity-control' onClick={quantityIncrementHandler} />
                </div>
            </td>
            <td> {quantity * price} </td>
            <td> <Delete className='quantity-control' onClick={removeItemHandler}/></td>
        </tr>
    )
}

export default CheckoutItem;