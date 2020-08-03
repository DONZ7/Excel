import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import Prueba from './Prueba'


const Excel=({d})=>{
 
return (
    <input
    required
    type="file"
    name="file"
    id="file"
 onChange={d}
    placeholder="Archivo de excel" />
)
}

export default Excel