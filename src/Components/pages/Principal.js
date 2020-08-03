import React from 'react'
import * as XLSX from 'xlsx'

import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import Contenido from '../organisms/Content/Contenido';

let datos=[]

class Principal extends React.Component {
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
    if(hojas[0]!=undefined){
    datos =(hojas[0].data)
    //console.log(datos)
  }
    
  } 
  
  render() {
    const {
      handleInputChange
    } = this
    return (
        
        
    <div className="App">
        <header >
          <Header handleInputChange={handleInputChange} />
        </header>
        
        <content className="App-header">
          <Contenido estado={datos} />
        </content>

        <footer>
          <Footer/>
        </footer>
    </div>        
        
    );
  }
}

export default Principal