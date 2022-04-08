import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth-component/auth.component";

import Navigation from "./routes/navigation/navigation.component";

const App= () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shops"/>
        <Route path="auth" element={<Auth/>}/>  
      </Route>
    </Routes>
  );
}

export default App;
