import React from 'react';
import * as XLSX from 'xlsx';
const Leer=()=>{

    const handleUpload = (e) => {
        e.preventDefault();
    
        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[1];
            const ws = readedData.Sheets[wsname];
    
            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
            //setFileUploaded(dataParse);
            console.log(dataParse)
        };
        reader.readAsBinaryString(f)
    }
    
    
    
    return (
        <>
          <input 
              required 
              type="file" 
              name="file" 
              id="file" 
              onChange={handleUpload} 
              placeholder="Archivo de excel" 
          />
          
      </>
        
            
    );
    
    
    

}

export default Leer

