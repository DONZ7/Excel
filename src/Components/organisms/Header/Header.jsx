import React from 'react'
import Excel from '../../Atoms/Excel';
import {Button} from 'antd';
import Grids from '../../molecules/Grids';

const Header=({handleInputChange})=>{
 return(
    <div>
        <Grids>
            <h1>Importar Excell</h1>
            <Excel d={handleInputChange}/>
            <Button type="primary" >Cargar
            </Button> 
        </Grids>
    </div> 
 );
};

export default Header

   
