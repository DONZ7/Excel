import React from 'react'

import { Layout } from "antd";


const Layouts = ({ children, ...rest }) => {
    return <Layout {...rest}>{children}
    
      </Layout>;
  };
  export default Layouts;
  
  

  