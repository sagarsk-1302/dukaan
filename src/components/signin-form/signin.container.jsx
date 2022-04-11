import Input from "../input.container/input.container";
import { useState } from "react";
import { SignInwithEmailPassword } from "../../utils/firebase.utils/firebase.utils";
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase.utils/firebase.utils';
import './signin.styles.scss';

const defaultfFormFields = {
    email :"",
    password:"",
}

const SignIn = () =>{   
    const googlesignInWithPopup = async ()=>{
        const response = await signInWithGooglePopup();
        //console.log(response)
        const userDocref = await createUserDocumentFromAuth(response.user)
        console.log(userDocref)
    }
    const [formFields,setFormFields] = useState(defaultfFormFields)
    const { email, password} = formFields;
    const submitHandler = async (event)=>{
        event.preventDefault();
        try{
            const response = await SignInwithEmailPassword(email,password);
        }catch(error){
            console.log(error.code)
            switch(error.code){
                case "auth/user-not-found":
                    alert("User not found")
                    break;
                case "auth/wrong-password":
                    alert("Wrong credentials")
                    break    
                default : console.log("internal error")
            }
         
        }
       setFormFields(defaultfFormFields); 
    }
    const onChangeHandler = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    }
    return (
        <div className="signin">
            <h2>Sign in</h2>
        <form onSubmit={submitHandler}>
            <label htmlFor="">Email</label>
            <Input type="email" name="email" className="form-control" onChange={onChangeHandler} required value={email}/>
            <label htmlFor="">password</label>
            <Input type="password" name="password" className="form-control" onChange={onChangeHandler}  required value={password}/>
            <div className="buttons">
                <button type="submit" className="btn-signin">SignIn</button>
                <button type="button" className="btn-signingoogle" onClick={googlesignInWithPopup}>Signin with Google</button>
            </div>  
        </form>
        </div>
    )
}




export default SignIn;