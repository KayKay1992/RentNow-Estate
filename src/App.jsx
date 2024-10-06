import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Profile from "./pages/profile"
import SignIn from "./pages/signIn"
import SignOut from "./pages/signUp"

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/signIn" element={<SignIn />} /> 
        <Route path="/signOut" element={<SignOut />} /> 
    </Routes>
    </BrowserRouter>
   
  )
}