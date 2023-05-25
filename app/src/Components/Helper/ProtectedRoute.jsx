import { useContext } from 'react'
import { UserContext } from '../../Context/useContext';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { login } = useContext(UserContext)
    console.log(login)
    if(login === true) {
        return children
    } else if (login === false) {
        return <Navigate to="/login" /> 
    } else {
        return <></>
    }
}

export default ProtectedRoute
