import { useContext } from "react";
import { ShoppingCartContext } from "../../components/shoppingcart.context/shoppingcart.context.component";
import CheckoutItem from "../../components/checkout-items.component/checkout-items.component";
import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems } = useContext(ShoppingCartContext)
    return (
        <div className="checkout">
            <h3>Checkout</h3>
            {cartItems.length > 0 ? (
                <div className="items">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Product</td>
                                <td>Description</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(cartItem => {
                                    return <CheckoutItem cartItem={cartItem} />
                                })
                            }
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            ) : (<h4>No Items in the cart</h4>)}


        </div>
    );
}

export default CheckOut;