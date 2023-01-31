import React, { useState } from 'react';
import yeps from './yeps.png';
import uru from './imi.png';
import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Component } from 'react';
import {AppBar, Button, Drawer, List, ListItem, Menu, MenuItem, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import Sidebar from './Sidebar.js'
import { IconContext } from "react-icons";
import {FaShoppingCart} from 'react-icons/fa';
import {FaTv} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa';

import {  useNavigate,Link } from 'react-router-dom'
// import Mama from './Drawer'




function Ga() {
    const [sidebar,setSidebar]=useState(false);
  
const navi=useNavigate();
    const gone=()=> {
        console.log('hello')
        navi('/add')
       }
       const signups=()=>{
         console.log('moves');
   navi('/update')
       } 
    const handleclick=()=>{
        console.log('hurray')
        setSidebar(!sidebar)
    }
    const handleclose=()=>{
     
        setSidebar(!sidebar)
    }
    
      return (
     
          <React.Fragment  >
                 {!sidebar ? <div></div>:<div style={{textDecoration:"none"}}><Sidebar/></div>}
          <AppBar   sx={{background:'yellow',display:"flex",height:"55px"}}>
       
          <Toolbar className='tools'>
          <motion.div  animate={{borderRadius:"8px"}}
           whileHover={{scale:1.1}}
           onClick={handleclick} >
  
          <IconContext.Provider value={{className:"reactsmenu"}}>
           
          <AiOutlineMenu   />
        </IconContext.Provider>
    </motion.div>
   
    {/* <Image src={yeps} style={{marginTop:"5px",height:"60px",width:"200px"}}/> */}
    <a style={{color:"black",fontFamily:"forte",fontSize:"40px",marginLeft:"1px",width:"280px"}}>Namma Plaza</a>
    <Image src={uru} style={{marginTop:"5px",height:"45px",width:"50px"}}/>
          <Typography sx={{color:'black',fontSize:'20px',marginLeft:"15px",fontFamily:'Georgia',marginTop:'5px'}}>
         
         
            </Typography>
   
      
          <div style={{width:"450px",color:'black',marginLeft:'10px'}}>
      <input className='inhead' type='text'/></div>
      <div style={{marginLeft:'10px',backgroundColor:'black',color:'black',width:"30px",height:"26px",
      marginTop:'10px',borderTopRightRadius:'5px',borderBottomRightRadius:'5px'}}>
       <IconContext.Provider value={{className:"reacts"}}>
      <FaSearch/>
        </IconContext.Provider>
              </div>
      
        
        
         <div style={{color:'black'}}>  <IconContext.Provider value={{className:"reactscart"}}>
              <FaShoppingCart/>
        </IconContext.Provider></div>
        <div style={{marginLeft:"5px",display:"flex"}}><a style={{marginLeft:"30px",display:"flex"}}>




  

    <Link to='/paste' style={{color:'skyblue',textDecoration: 'none',color:'black',marginTop:'10px'}}>
<b style={{marginLeft:"30px",color:'blue',fontSize:"13px"}}>
    Add Item
    </b></Link>
    <Link to='/' style={{color:'darkred',textDecoration: 'none',color:'black',marginTop:'10px'}}>
<b style={{marginLeft:"30px",color:'darkred',fontSize:"13px"}}>
    Back to Home page
    </b></Link>
</a>

</div>
             <Button  sx={{marginLeft:'30px',background:'#04980B',height:"30px",marginTop:"10px"}}  variant='contained' onClick={()=>gone()}>Login</Button>
             <Button onClick={()=>{signups()}} sx={{marginLeft:'10px', height:"30px",marginTop:"10px",fontSize:"9px",width:"150px"}} variant='contained'>Account Creation</Button>
         
          </Toolbar>
          
      </AppBar>
         </React.Fragment>
      
      )
}



export default Ga;
