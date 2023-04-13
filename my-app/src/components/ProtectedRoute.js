import React,{useContext} from 'react'
import { store } from '../context/AuthContext';
import { Route,Navigate } from 'react-router-dom'
import Home from './Home'

function ProtectedRoute() {
    const {  token } = useContext(store);
    console.log("protect",token)
    
    return token ? (<Home/>):(<Navigate to="/login" replace />)
}

export default ProtectedRoute
