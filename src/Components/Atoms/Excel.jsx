import React from 'react'


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