import React, { useEffect, useState } from 'react';
import 'firebase/database';
import { Image } from 'react-bootstrap';
import signinimg from './oops.png';
import kmi from './kmi.png';
import firebase from 'firebase';
import {useParams,useNavigate} from'react-router-dom'
import Home from './Home';
import Box from '@mui/material/Box';
import mt from './mt.jpg';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {  FormLabel } from 'react-bootstrap';
import { FormControlLabel, Input,Button, FormGroup,InputLabel,MenuItem,Select,FormControl } from '@mui/material';
import database from './firebase.js'; 
import axios from 'axios';
import { positions } from '@mui/system';
import Ga from './Ga';
import { Block } from '@rsuite/icons';



const Add = ( ) => {

const [mobilesign, setmobilesign] = useState("");
const [passsign, setpasssign] = useState("");
const [save,setsave]=useState([]);
const navi=useNavigate();
const handlechangeable=(event)=>{
     setmobilesign(event.target.value)
console.log(mobilesign);
}
const handlechange=(event)=>{
    
    setpasssign(event.target.value)
console.log(passsign);
}
const play=()=>{
 console.log("yep");
 navi('/del')
}
useEffect(() => {
    const be=axios.get("https://fir-afbad-default-rtdb.firebaseio.com/customers.json").then(response=>{setsave(response.data)});
 
}, [save])

const   funci=()=>{
    var checky=document.getElementById("check");
    var becky=document.getElementById("read");

    if(checky.checked==true){
        console.log("yes checked");
becky.style.display="Block";
    }else{
becky.style.display="none";

    }
   }

const handlesubmit=(event)=>{
    event.preventDefault();
if(mobilesign!="" && passsign!=""){
// toast.success("running")
Object.values(save).map((a,b)=>{
if(mobilesign==a.Mobile && passsign==a.Password){
    toast.success("Logging in...",{position:toast.POSITION.TOP_CENTER})
 setTimeout(() => {
   
    console.log("moved")
    navi('/del');
 },3000);   
//  toast.success('Logging In',({positions:toast.POSITION.TOP_CENTER}));
}else{
    // toast.warn('Re-enter please...',({positions:toast.POSITION.TOP_CENTER}))
}
}
);
}else{
    toast.error("Proper details required..??");
    }
}
 
  return (

    <div className='addie'>
    Hogwards
         {/* <Ga/> */}
         {/* Add
         <a href='/del'>move</a> */}
<ToastContainer autoClose={3000}/>

<div style={{display:"flex"}}>
    {/* <Image style={{height:"610px",width:"760px",marginTop:"0px",marginLeft:"20px"}} src={signinimg}/> */}
<div className='loo'>Namma Plaza

<Image style={{height:"400px",width:"400px",marginTop:"0px",marginLeft:"20px",marginLeft:"100px",marginTop:"100px"}} src={kmi}/>
</div>


<div style={{display:"fle", backgroundColor:'transparent',height:'692.4px',width:'400px',marginTop:'50px',borderRadius:'20px',marginLeft:"150px"}}>


    <form style={{marginLeft:'10px',marginTop:"0px"}} onSubmit={handlesubmit}>
    <FormGroup>
    <div className='headsign'><b >
    Sign In</b></div>   
<InputLabel style={{color:'black',marginTop:'50px'}}>Mobile</InputLabel>
<Input sx={{marginTop:"0px",marginLeft:"50px",width:'240px'}} className='inputfire' type='phone' name='name' value={mobilesign} onChange={handlechangeable}/>
<br/>
<InputLabel><a style={{color:'black',fontSize:"16px"}}>Password</a></InputLabel>

<Input sx={{marginTop:"0px",marginLeft:"50px",width:'240px'}} className='inputfire' type='text' name='name' value={passsign} onChange={handlechange}/>
<div style={{display:'-ms-flexbox'}}><i style={{color:'blue'}}>
<input  className='check' type='checkbox'  id='check' onClick={()=>funci()}/>

  <a style={{marginLeft:"10px",color:"darkgreen"}}>Remember me</a>  </i></div>
  
  <p id='read' type='text' style={{display:"none",color:"blue",marginLeft:'50px'}}>Checked Bro</p>



<div style={{marginLeft:'50px',color:'black',fontSize:'14spx',marginTop:'10px'}}>Don't have an account ?
 <a href='/update' style={{fontSize:"18px",textDecoration:"none",whiteSpace:"pre-line",marginLeft:"4px"}}><b>Sign Up</b></a>
</div>
<br/>

<Button type='submit' variant='contained' sx={{backgroundColor:"darkgreen",height:"30px",width:'100px',border:'5px',borderRadius:'4px',marginTop:"4px",marginLeft:"100px"}}>Login</Button>
    </FormGroup>
    <b style={{marginTop:"10px"}}>Disclaimer:</b>
    <p>A Terms and Conditions agreement acts as a legal contract between you (the company) and the user. 
        It's where you maintain your rights to exclude users from your app in the event that they abuse your website/app, 
        set out the rules for using your service and note other important details and disclaimers</p>
    <button onClick={()=>play()}>get</button>
</form></div>
</div>
{/* { !save ? <div style={{marginLeft:"80px",marginTop:"20px",margin:'auto'}}>
<a style={{height:"80px",width:"80px",margin:'auto'}}>
    <Image src={mt} style={{margin:'auto',height:"80px",width:"80px",borderRadius:'50px'}}/></a>

</div>:
 <div className='scro' style={{display:"fle",marginBottom:"20px",width:"30px",margin:'aut',marginTop:"25px",marginLeft:"40px",backgroundColor:"wheat",borderRadius:'10px',height:"630px"}}>

{Object.entries(save).map((a,key)=>{
   
   return <div style={{fontFamily:"sans-serif",fontSize:'13px',margin:"auto",height:'150px',
   width:'250px',backgroundColor:'white',marginTop:'20px',borderRadius:'5px',marginBottom:"20px"}}>
     

  <div style={{display:"fle",marginLeft:"15px"}}>
  <b>Name:</b><b style={{whiteSpace:"pre-line",fontSize:"9px"}}>{a[0]}</b><br/>
  <b>Name:</b><b style={{whiteSpace:"pre-line"}}>{a[1].Password}</b>-------<br/><b>Mail:</b>
  <b style={{whiteSpace:"pre-wrap",marginLeft:'10px',color:'Highlight'}}>{a[1].Mobile.split("")}</b>
   </div>
   <br/>
  
   <Button  sx={{backgroundColor:"pink",height:"20px",width:"4px",marginLeft:"15px",fontSize:"10px"}}>
   <b style={{marginTop:"3px",fontSize:"9px"}} onClick={()=>this.edit(a[1].Id)}>Edit</b></Button>
 
 
 <Button  sx={{backgroundColor:"red",height:"20px",width:"4px",marginLeft:"13px",fontSize:"10px"}}>
   <b style={{marginTop:"0px",fontSize:"9px",color:'wheat'}} onClick={()=>this.delete(a[0])}>Delete</b></Button>
</div>
})}

</div> 
  } */}
 </div>

 
  )
}

export default Add;