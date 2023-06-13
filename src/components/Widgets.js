import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {FiMoreVertical} from 'react-icons/fi'
import './Widgets.css';
import '../App.css';

function Widgets(){
    const [data,setData] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response)=>{
        setData(response.data)
    })},[])
    console.log(data);
   
  

    return (

        <div className="widgets">
        <div className="cardstyle" >
            {data.map((val)=>{
                return(
                    <div className="column" style={{marginBottom:50,marginLeft:40}}>
                        <div className="card">
                        <h5 style={{color:'blue',fontWeight:'700'}}>{val.question}</h5>
                        <h5 style={{color:'blue',fontWeight:'300'}}>{val.answer}</h5>
                       
                       <span className="dots"><FiMoreVertical /></span>
                    </div>
                </div>
                )
            })}
        </div>
        <Link to ="/Addcard">
            <button style={{ position: 'fixed', bottom:'40px',right:'30px',color:'white',backgroundColor:'blue',borderRadius:25,borderColor:'blue',fontSize:'18px',padding:'12px 24px',width:'150px'}}>
                + Add Card
            </button>
        </Link>
        </div>
    )
 }
   
export default Widgets;