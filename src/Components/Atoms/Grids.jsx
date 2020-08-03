import React from 'react'
import { Row, Col, Button } from 'antd';

const Grids=()=>{
    return(
   <>     
  
    <Row>
      <Col span={12}>  
        <Button type="primary" >Cargar</Button> 
      </Col>
      <Col span={12}>col-8</Col>
    </Row>
  </>
);
    };


export default Grids