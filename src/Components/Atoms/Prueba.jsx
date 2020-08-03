import React from 'react'
import * as XLSX from 'xlsx'

let datos=[]

class GetDataFromExcelJusTInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoja: "",
      hojas:[],
      file: false

    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }
 
  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const this2 = this
    this.setState({
      [name]: value
    })
    let hojas = []
    if (name === 'file') {
      let reader = new FileReader()
      reader.readAsArrayBuffer(target.files[0])
      reader.onloadend = (e) => {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});

        workbook.SheetNames.forEach(function(sheetName) {
          // Here is your object
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          hojas.push({
            data: XL_row_object,
            sheetName
          })
        })
        this2.setState({
          selectedFileDocument: target.files[0],
          hojas
        })
        
      }
    }
    
    hojas=(this2.state.hojas)
    if(hojas[1]!=undefined){
    datos =(hojas[1].data[1])
    console.log(datos)
  }
    
  } 
  
  render() {
    const {
      handleInputChange
    } = this
    return (
        <>
          <input 
              required 
              type="file" 
              name="file" 
              id="file" 
              onChange={handleInputChange} 
              placeholder="Archivo de excel" 
          />



<div className="row">

<div className="col-md-12">

<table >
    <thead >
    <tr>
    <th scope="col">id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Stock</th>
        <th scope="col">Precio</th>
        <th scope="col">Imagen</th>
    </tr>
    </thead> 
    <tbody>
            {(

        <tr>
          <td>{datos.comentario}</td>
          <td></td>
          <td></td>
          <td></td>
         
        </tr>

)}
     
      </tbody>

</table>

</div>

</div>
          
      </>
        
            
    );
  }
}

export default GetDataFromExcelJusTInput