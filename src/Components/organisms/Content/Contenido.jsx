import React from 'react'
import Prueba from '../../Atoms/Prueba';

const Contenido=({estado})=>{
console.log({estado})
    return(

    <div className="row">
        <div className="col-md-12">
            <table >
                <thead >
                     <tr>
                        <th scope="col">Categoría</th>
                        
                        <th scope="col">Descripción</th>
                        <th scope="col">Foto</th>
                        <th scope="col">No</th>
                        
                    </tr>
                </thead> 
                <tbody>
                 {estado.map(item => (
                    <tr key={item.id}>
                        <td>{item.Categoría}</td>
                        <td>{item.Comentario}</td>
                        <td>{item.Descripción}</td>
                        <td>{item.Foto}</td>
                        <td>{item.No}</td>
                
                    </tr>

                     ))}

                </tbody>

            </table>

        </div>

    </div>
    )
}



export default Contenido
