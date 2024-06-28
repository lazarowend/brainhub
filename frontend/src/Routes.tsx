import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SingUp from "./pages/sing-up";
import Quiz from "./pages/quiz";
import Interest from "./pages/interests";
import SingIn from "./pages/sing-in";
import Dashboard from "./pages/dashboard";


export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/sing-up" element={<SingUp/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/sing-up/interests" element={<Interest/>}/>
            <Route path="/sing-in" element={<SingIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    )
}