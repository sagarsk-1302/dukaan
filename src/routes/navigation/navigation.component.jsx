import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.style.scss';
import { Usercontext } from "../../components/user.context/user.context.component";
import { SignOut } from "../../utils/firebase.utils/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(Usercontext);

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
        </div>

      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;