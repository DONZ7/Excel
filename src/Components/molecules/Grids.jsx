import React from 'react'
import Fotos from '../molecules/Fotos';
import {Row,Col,Button} from 'antd'


const Grids=({children})=>{
return(
  <>
    <Row>
      <Col span={12}>{children}</Col>

      <Col span={12}>
        <Fotos/>
      </Col>

    </Row>
  </>  
)
}

export default Grids