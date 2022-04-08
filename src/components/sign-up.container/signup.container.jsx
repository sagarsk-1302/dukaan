import { useState } from "react";
import { createaUserWithEmailAndPassword } from "../../utils/firebase.utils/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils/firebase.utils";
import Input from "../input.container/input.container";
import './signup.style.scss';

const defaultfFormFields = {
    displayName : "",
    email :"",
    password:"",
    confirmPassword: "",
}
const SignupForm = () =>{
    const [formFields,setFormFields] = useState(defaultfFormFields)
    const {displayName, email, password, confirmPassword} = formFields;
    const submitHandler = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword ){
            alert("password do not match ")
            return;
        }
        try{
            const response = await createaUserWithEmailAndPassword(email,password);
            const docref = await createUserDocumentFromAuth(response.user,{displayName})
            alert("Signed up, Please login! ")
        }catch(error){
            if(error.code=== "auth/email-already-in-use"){
                alert("Account cannot be created, email already exists")
            }if(error.code==="auth/weak-password"){
                alert("Enter password of 6 characters of more")
            }
            else{
                console.log("error",error);
            }
         
        }
       setFormFields(defaultfFormFields); 
    }
    const onChangeHandler = (event) =>{
        const {name, value} = event.target;
        //console.log(name,value)
        setFormFields({...formFields,[name]:value})
    }
    return (
        <div className="signup">
            <h2>Don't have an account yet?</h2>
            <h4>Sign up</h4>
        <form onSubmit={submitHandler}>
            <label htmlFor="">User Name</label>
            <Input type="text" name="displayName" className="form-control" required onChange={onChangeHandler} value={displayName}/>
            <label htmlFor="">Email</label>
            <Input type="email" name="email" className="form-control" required onChange={onChangeHandler} value={email}/>
            <label htmlFor="">password</label>
            <Input type="password" name="password" className="form-control" required onChange={onChangeHandler} value={password}/>
            <label htmlFor="">Confirm Password</label>
            <Input type="password" name="confirmPassword" className="form-control" required onChange={onChangeHandler} value={confirmPassword}/>
            <button type="submit">Signup</button>
        </form>
        </div>
    )
}

export default SignupForm;