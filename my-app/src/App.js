import React,{useContext} from 'react';
import { Routes,Route } from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import Login from './authentication/Login';
import Register from './authentication/Register'
import Home from './components/Home'
import NotFound from './components/Notfound';
import ProtectedRoute from './components/ProtectedRoute';
import { store } from './context/AuthContext';

function App() {
  const {  token } = useContext(store) || {};
  return (
     <AuthContextProvider>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route element={<ProtectedRoute {...{token}}/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthContextProvider>
    
  );
}

export default App;
