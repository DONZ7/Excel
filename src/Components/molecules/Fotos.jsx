import React from 'react'
import FileUpload from '../Atoms/FileUpload'
import {Row,Col,Button} from 'antd'

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