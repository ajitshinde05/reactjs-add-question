
import React, { useState,useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';



const Detailpage=(props)=> {

 const location = useLocation();
 const{ image , name ,prize}= location.state;
 const postData=()=>{
    axios.post('https://janam.free.beeceptor.com', {
        image: image,
        name: name,
        prize:prize,
      })
      .then(function (response) {
        console.log(response);
        if(response.status==200){
            alert("data post successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
 }

  return (
      <div
        style={{margin:20,alignItems:'center',justifyContent:'center'}}
      >
            <img 
                style={{height:500,width:500,}}
                src={image} alt='myPic' />
                <h3 style={{}}>{name}</h3>
                <p
                    style={{color:'green',}}
                > {`$ ${prize}`}</p>   
                <button  title='Chake Out'
                    style={{height:50,width:500,color:'green'}}
                    onClick={()=>postData()}
                >
                    <h2>Chake Out</h2>
                    </button>        
        </div>
  );
}

export default Detailpage;

