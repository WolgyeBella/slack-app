import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import app from "./firebase";
import { clearUser, setUser } from "./store/userSlice";

function App() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");

        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        navigate("/login");
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route path='/' element={<ChatPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;
