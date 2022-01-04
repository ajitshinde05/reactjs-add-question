
import React from 'react';
import {Link ,useNavigate} from 'react-router-dom';



const Card=(props)=> {
    const navigate = useNavigate();

    const todetailPage=(item)=>{
        console.log(item);
        navigate('/detailPage',{state:item});
    }
    console.log(props);
  return (
    <div style={{ }}
        
    >
        
        <a onClick={()=>{todetailPage(props.item)}}>         
                
        <div
            style={{display:'flex',backgroundColor:'#fff',padding:10,borderRadius:10,width:350}}
        >
            <img 
                style={{height:140,width:140,}}
                src={'http://images.habeco.si/Upload/Product/hoodie-bad-boy_5206_full.jpg'} alt='myPic' />
            <div>
                <h3 style={{textAlign:'center'}}>{props.item.name}</h3>
                <p
                    style={{color:'green',textAlign:"center"}}
                > {`$ ${props.item.prize}`}</p>
            </div>
        </div>
        </a>
   
  </div>
     
  );
}

export default Card;

