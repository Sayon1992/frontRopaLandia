import React,{useContext,useState} from 'react';

const loginContext = React.createContext();

const LoginContext = (props) => {

    const [loginData,setLoginData] = useState({
        usuario:"",
        email:"",
        constraseña:"",
        loggeado:false,
    })

    function loguearse(loginData) {
        setLoginData(loginData)
    }

    return ( 
        <loginContext.Provider values={{loginData}}>
            {props.children}
        </loginContext.Provider>
     );
}
 
export default LoginContext;