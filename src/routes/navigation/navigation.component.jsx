import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.style.scss';
import { SignOut } from "../../utils/firebase.utils/firebase.utils";
import ShoppingCartIcon from "../../components/cart-icon/cart-icon.container";
import ShoppingCart from "../../components/shopping-cart/shopping-cart.container";
import { ShoppingCartContext } from "../../components/shoppingcart.context/shoppingcart.context.component";
import { useSelector } from "react-redux";
import { getCurrentUser } from '../../store/user/user-selector';


 const Navigation = () => {
  const currentUser = useSelector(getCurrentUser);
  const { isCartOpen } = useContext(ShoppingCartContext)
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link to='/' ><Logo className="logo" /></Link>
        <div className="links">
          <Link to='/shop'>Shops</Link>
          {
            currentUser != null ? (<span onClick={SignOut} className="nav-link">SignOut</span>)
              : (<Link to='/auth'>Auth</Link>)
          }
          <ShoppingCartIcon />
        </div>
      </div>
      {
        isCartOpen ? <ShoppingCart /> : null
      }

      <Outlet />
    </Fragment>
  )
}

export default Navigation;