import React, { useEffect } from 'react'
import axios from 'axios'
import productosTienda from '../../jsonPruebas/verTiendaElegida.json'

const VerTienda = () => {

    const [productos, setProductos] = useState(null)

    useEffect(()=>{
        setProductos(productosTienda);
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default VerTienda;
