import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './navigation.style.scss';

const Navigation =()=>{
    return (
      <Fragment>
        <div className="navigation-bar">
          <Link to='/' ><Logo className="logo"/></Link>
          <div className="links">
            <Link to='/shops'>Shops</Link>
            <Link to='/sign-in'>SignIn</Link>
          </div>
          
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;