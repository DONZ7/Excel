import React from 'react'

const Contenido=({estado})=>{
console.log(estado)
    return(

    <div className="row">
        <div className="col-md-12">
            <table >
                <thead >
                     <tr>
                        <th scope="col">Categoría</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Precio</th>
                        
                    </tr>
                </thead> 
                <tbody>
                 {estado.map(item => (
                    <tr key={item.SKU}>
                        <td>{item.type}</td>
                        <td>{item.description}</td>
                        <td>{item.images}</td>
                        <td>{item.price}</td>
                
                    </tr>

                     ))}

                </tbody>

            </table>

        </div>

    </div>
    )
}



export default Contenido
