import React,{useState,useEffect} from 'react';

export const LoginContext = React.createContext();

export const LoginContextProvider = (props) => {
    const [loginData,setLoginData] = useState({
        nombreCompleto:"",
        email:"",
        password:"",
        loggeado:false,
    })


     function loguear({nombreCompleto,email,password}) {
        const data= {nombreCompleto,email,password,loggeado:true}
        console.log(data)
        setLoginData({...data})

        console.log(loginData)
        localStorage.setItem('usuario', JSON.stringify(loginData))

    }

    function desloguear(){
        setLoginData({nombreCompleto:"",email:"",password:"",loggeado:false})
    }

    useEffect(() => {

        const localData = localStorage.getItem('usuario')
        localData? setLoginData(JSON.parse(localData)) : console.log("no hay local data ")
    },loginData)
    return ( 
        <LoginContext.Provider value={{loginData,loguear,desloguear}}>
            {props.children}
        </LoginContext.Provider>
     );
}
 