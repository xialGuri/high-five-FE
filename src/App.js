import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./RegisterForm/Register"
import LoginGoogle from "./LoginPage/LoginGoogle"
import RegisterScreen from "./Screen/RegisterScreen"
import ListviewScreen from "./Screen/ListviewScreen";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterScreen />}></Route>
                <Route path="/list" element={<ListviewScreen />}></Route>
                {/*    <Route path="/" element={<LoginGoogle />}></Route>*/}
                </Routes>
            </Router>
        );
    }

    export default App;
