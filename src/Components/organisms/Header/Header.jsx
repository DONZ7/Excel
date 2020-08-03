import React from 'react'
import Excel from '../../Atoms/Excel';

import {Header, Button,Row,Col} from 'antd';
import Grids from '../../molecules/Grids';

//import Grids from '../../Atoms/Grids';

const Header1=({handleInputChange})=>{
    const datoss=[];
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

export default Header1

   
