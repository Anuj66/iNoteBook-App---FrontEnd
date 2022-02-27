import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {useState} from "react";

function App() {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });

        setTimeout(() => {
            setAlert(null);
        },2000);
    }

  return (
    <div>
        <NoteState>
            <Navbar />
            <Alert alert={alert}/>
            <div className={"container"}>
                <Routes>
                    <Route exact path={"/"} element={<Home showAlert={showAlert}/>}></Route>
                    <Route exact path={"/about"} element={<About />}></Route>
                    <Route exact path={"/login"} element={<Login showAlert={showAlert}/>} />
                    <Route exact path={"/signup"} element={<SignUp showAlert={showAlert}/>} />
                </Routes>
            </div>
        </NoteState>
    </div>
  );
}

export default App;
