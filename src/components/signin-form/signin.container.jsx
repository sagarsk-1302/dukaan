import Input from "../input.container/input.container";
import { useState } from "react";
import { SignInwithEmailPassword } from "../../utils/firebase.utils/firebase.utils";
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase.utils/firebase.utils';

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

    const submitHandler = async (event)=>{
        event.preventDefault();
        const { email, password} = formFields;
        try{
            const response = await SignInwithEmailPassword(email,password);
        }catch(error){
            console.log(error.code)
            switch(error.code){
                case "auth/user-not-found":
                    alert("User not found")
                    break;
                default : console.log("internal error")
            }
         
        }
        
    }
    const onChangeHandler = (event) =>{
        const {name, value} = event.target;
        //console.log(name,value)
        setFormFields({...formFields,[name]:value})
    }
    return (
        <div className="signin">
            <h2>Sign in</h2>
        <form onSubmit={submitHandler}>
            <label htmlFor="">Email</label>
            <Input type="email" name="email" className="form-control" onChange={onChangeHandler}/>
            <label htmlFor="">password</label>
            <Input type="password" name="password" className="form-control" onChange={onChangeHandler}/>
            <div className="buttons">
                <button type="submit">Signup</button>
                <button type="button" onClick={googlesignInWithPopup}>Signin with Google</button>
            </div>  
        </form>
        </div>
    )
}




export default SignIn;