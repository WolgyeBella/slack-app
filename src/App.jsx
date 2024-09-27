import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ChatPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;
