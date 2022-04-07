import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase.utils/firebase.utils';

    

 const SignIn = () =>{
    const googlesignInWithPopup = async ()=>{
        const response = await signInWithGooglePopup();
        //console.log(response)
        const userDocref = await createUserDocumentFromAuth(response.user)
        console.log(userDocref)
    }
    return (
        <div className="sign-in">
            <h1>Sign in page</h1>   
            <button onClick={googlesignInWithPopup}>Signin with popup</button> 
        </div>
    )
}

export default SignIn;
