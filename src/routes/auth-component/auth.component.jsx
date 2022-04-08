import SignupForm from '../../components/sign-up.container/signup.container';  
import Signin from '../../components/signin-form/signin.container';
import './auth.component.style.scss';

 const Auth = () =>{
    
    return (
        
        <div className="authentication">
                <Signin/>
                <SignupForm/>          
        </div>
    )
}

export default Auth;