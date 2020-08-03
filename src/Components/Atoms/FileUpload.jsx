import React, { useState } from 'react';
import firebase from 'firebase';

const FileUpload=()=>{
    const [uploadValue,setUploadValue]=useState(0);
    const [picture,setPicture]=useState(null);
  
    const handleUpload=(event)=>{
        const file=event.target.files[0];
        const storageRef=firebase.storage().ref(`/productos/${file.name}`);
        const task=storageRef.put(file);

        task.on('state_changed',snapshot =>{
            let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
            setUploadValue(percentage)
        },error => {
            console.log(error.message);
        }, ()=>{
            setUploadValue(100);
            setPicture(task.snapshot.downloadURL);
            console.log(file.name)
        });
        }

return(
<div>
    <progress value={uploadValue} max="100"></progress>
    <br/>
    <input type="file" 
    onChange={handleUpload} 
    />
    <br/>
    <img width="320" src={picture} alt=""/>
   
</div>
)
}

export default FileUpload