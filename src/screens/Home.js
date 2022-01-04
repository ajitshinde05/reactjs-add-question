
import React, { useState,useEffect } from 'react';
import {Link , useNavigate} from 'react-router-dom';

import Card from './Component/Card';


const Home=()=> {
    const [appData ,setappData]=useState([
        {
            image:'http://images.habeco.si/Upload/Product/hoodie-bad-boy_5206_full.jpg',
            name:'Beardo Hoodie',
            prize:'140',
        },
        {
            image:'http://images.habeco.si/Upload/Product/hoodie-bad-boy_5206_full.jpg',
            name:'Beardo Hoodie',
            prize:'140',
        },
        {
            image:'http://images.habeco.si/Upload/Product/hoodie-bad-boy_5206_full.jpg',
            name:'Beardo Hoodie',
            prize:'140',
        },
        {
            image:'http://images.habeco.si/Upload/Product/hoodie-bad-boy_5206_full.jpg',
            name:'Beardo Hoodie',
            prize:'140',
        },
        {
            image:'http://images.habeco.si/Upload/Product/hoodie-bad-boy_5206_full.jpg',
            name:'Beardo Hoodie',
            prize:'140',
        },
    ]);

    const navigate = useNavigate();

    const todetailPage=(item)=>{
        navigate('/detailPage',item);
          }
    const [isLoding ,setLoading]=useState(false);

    const fetchApi=async()=>{

    }
    useEffect(() => {
        fetchApi();
      });
  return (
      <div
        style={{margin:20}}
      >
          <div  style={{marginTop:6,marginLeft:6}}>
              <h2>Products</h2>
          </div>
          <div  style={{display:'flex',backgroundColor:'#fff',marginBottom:30,width:600,height:30}}>
            <input placeholder='search Product..' style={{color:'black',width:600,height:30 ,paddingLeft:10}}/>

          </div>
            <div
            style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }} 
            >
                {
                    appData.map((item,index)=>
                    // <Link to={{
                    //     pathname: "/detailPage",
                    //     state: item // your data array of objects
                    //     }}
                    // style={{ cursor: 'pointer',textDecoration:'none'}}
                   
                    // >
                        <Card item={item} key={index}/>
                        // </Link>
                    )
                }
                
            </div>
        </div>
  );
}

export default Home;

