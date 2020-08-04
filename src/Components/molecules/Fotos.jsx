import React from 'react'
import FileUpload from '../Atoms/FileUpload'
import {Button} from 'antd'

const Fotos=()=>{
    return(
        <>
            <h1>Importar fotos</h1>
            <FileUpload/>
            <Button type="succes" >Cargar
            </Button>    
        </>    
    )
}
  
export default Fotos