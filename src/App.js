import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "./utils/firebase.utils/firebase.utils";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth-component/auth.component";
import Shop from "./routes/shop.component/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import CheckOut from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user-actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
      onAuthStateChangedListener((user) => {
      console.log(user);
      dispatch(setCurrentUser(user));
    })
  }, [])
  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
