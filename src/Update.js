import { FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Add from './Add';
import signinim from './mob.png';
import database from './firebase.js'; 
import { Button, FormControl, FormLabel,Image } from 'react-bootstrap';
import Home from './Home';
import kt from './kt.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import { height } from '@mui/system';
import Ga from './Ga';

const Update = () => {
  // const [save,setsave]=useState({names:"",mobile:"",password:""})
 const [names, setnames] = useState("");
 const [mobile, setmobile] = useState("");
 const [password, setpassword] = useState("");
const [cave, setcave] = useState("");

useEffect(() => {

}, [cave])


 const play=()=>{
  console.log("right");
  const re=database.ref('customers')
  re.on('value',snapshot=>{
    const state=snapshot.val()
    setcave({[cave]:state})
    console.log("list",cave)
  })
  console.log("retrived...")
}

const handlechange=(e)=>{
setnames(e.target.value);
}
const handlechanges=(e)=>{
  setmobile(e.target.value);
  }
  const handlechangepass=(e)=>{
    setpassword(e.target.value);
    }
const handlesubmit=(e)=>{
 
  e.preventDefault();
   console.log("clicked");
const reu = database.ref("customers").push({Id:Math.random(),Names:names,Mobile:mobile,Password:password}).catch(alert);
  setnames("");
  setmobile("");
  setpassword("");
  console.log(reu);
  toast.success("Registered",{position:toast.POSITION.BOTTOM_CENTER})

}
  return (

 <div className='updatehead' style={{backgroundColor:"white",fontSize:"14px",display:"flex"}}>

   <ToastContainer autoClose={1000}/>

   <div><Image style={{height:"600px",width:"800px",marginTop:"20px",marginLeft:"20px"}} src={signinim}/></div> 

   <div style={{height:"714px"}}>

   <div style={{marginLeft:"130px",backgroundColor:"transparent",height:"500px",width:'400px',borderRadius:"15px",marginTop:'0px'}}>

          <form style={{marginTop:"80px"}} onSubmit={(e)=>handlesubmit(e)}>     
         
          <FormGroup  style={{height:'400px',width:'350p',marginLeft:'50px'}}>
         
          <div style={{marginTop:"3px"}}><b style={{fontFamily:"sans-serif",color:'darkgreen',fontSize:"37px",marginLeft:"2px",marginTop:'30px'}}>Sign Up</b></div>
         
          <TextField className='feildname' sx={{marginTop:"40px"}} label="Name" variant="outlined" type='text' value={names} onChange={(e)=>handlechange(e)}/>
              
         <TextField className='feildname' label="Mobile number" variant="outlined" style={{width:'280px',marginTop:"20px"}} type='text' value={mobile} onChange={(e)=>handlechanges(e)}/>
             
          <TextField className='feildname' sx={{width:'280px',marginTop:"20px",borderColor:"darkgreen",color:"darkgreen"}} label="Password" type="password" variant="outlined"  value={password} onChange={(e)=>handlechangepass(e)}/>
               
               <Button type='submit' 
               style={{height:"40px",width:'100px',border:'5px',borderRadius:'4px',marginLeft:'190px',marginTop:'40px',color:'white',backgroundColor:"darkgreen"}}>
               <b>Register</b></Button>
            
           </FormGroup></form>
         <b style={{marginTop:"10px",marginLeft:"30px"}}>Disclaimer:</b>
         <p style={{width:"300px",height:"400px",color:"black",marginLeft:"60px",marginTop:"20px"}}>
          A Terms and Conditions agreement acts as a legal contract between you (the company) and the user. 
         It's where you maintain your rights to exclude users from your app in the event that they abuse your website/app, 
         set out the rules for using your service and note other important details and disclaimers</p>
      
          </div>

        </div> 
        
        
  </div> 
  )
}

export default Update