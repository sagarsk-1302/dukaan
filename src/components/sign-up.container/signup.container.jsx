import { useState } from "react";
import { createaUserWithEmailAndPassword } from "../../utils/firebase.utils/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils/firebase.utils";
const defaultfFormFields = {
    displayName : "",
    email :"",
    password:"",
    confirmPassword: "",
}
const SignupForm = () =>{
    const [formFields,setFormFields] = useState(defaultfFormFields)

    const submitHandler = async (event)=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = formFields;
        if(password != confirmPassword ){
            alert("password do not match ")
            return;
        }
        try{
            const response = await createaUserWithEmailAndPassword(email,password);
            const docref = await createUserDocumentFromAuth(response.user,{displayName})
            console.log(docref);
        }catch(error){
            if(error.code== "auth/email-already-in-use"){
                alert("Account cannot be created, email already exists")
            }if(error.code=="auth/weak-password"){
                alert("Enter password of 6 characters of more")
            }
            else{
                console.log("error",error);
            }
         
        }
        
    }
    const onChangeHandler = (event) =>{
        const {name, value} = event.target;
        //console.log(name,value)
        setFormFields({...formFields,[name]:value})
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="">User Name</label>
            <input type="text" name="displayName" onChange={onChangeHandler}/>
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={onChangeHandler}/>
            <label htmlFor="">password</label>
            <input type="password" name="password" onChange={onChangeHandler}/>
            <label htmlFor="">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
            <button type="submit">Signup</button>
        </form>
    )
}

export default SignupForm;