import React, { useState } from 'react';
import {AppBar, Button, Drawer, List, ListItem, Menu, MenuItem, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import { IconContext } from "react-icons";
import {FaShoppingCart} from 'react-icons/fa';
import {FaTv} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'
import {  useNavigate,Link } from 'react-router-dom'
import { NavLink } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaTshirt} from 'react-icons/fa';
import {ImMobile2 } from 'react-icons/im';
import {MdElectricalServices} from 'react-icons/md';
import {RiLogoutCircleLine} from 'react-icons/ri'
import { motion } from 'framer-motion';

const Sidebar = ({children}) => {
  const [sidebar,setSidebar]=useState(false);
  const menuitem=[

    {
        path:"/del",
        name:"Clothes",
        icon:<FaBeer/>
    },
    {
        path:"/update",
        name:"Mobiles",
        icon:<FaTshirt/>
    }
,
    {
        path:"/add",
        name:"Electronics",
        icon:<ImMobile2/>
    }
    ,
    {
        path:"/add",
        name:"Grocery",
        icon:<MdElectricalServices/>
    },
    {
        path:"/add",
        name:"Others",
        icon:<ImMobile2/>
    },
    {
        path:"/",
        name:"Logout",
        icon:<RiLogoutCircleLine/>
    }
]
const handleclick=()=>{
  console.log('hurray')
  setSidebar(!sidebar)
}
  return (
 
       <div style={{marginTop:"10px"}}>
    {/* <a style={{textDecoration:"none"}}>hari</a>  revi */}
        <IconContext.Provider value={{className:"reactsmenu"}}>
           
           <AiOutlineMenu onClick={handleclick}/>
         </IconContext.Provider>
        
         <div className='side'>

        <motion.div className='anim'  animate={{width:'250px',borderBottomRightRadius:"20px",textDecoration:"none"}}>
     
<section className='sidebar'>
  
<input placeholder='Search..' style={{borderRadius:"12px",marginTop:"50px",marginLeft:"20px",height:"20px",padding:"12px"}}/>
    {menuitem.map((a)=>{
        return(<p className='innermenu'>
       <div style={{height:"60px",width:"40px",fontSize:'20px',marginLeft:"20px"}}>{a.icon}</div>  
     
    <div  className='retry' underlineColorAndroid='transparent' style={{marginTop:"3.4px",color:'black',textDecoration:"none"}}>
      
<Link style={{fontSize:"19px",color:"black",textDecoration:"none",textDecorationLine:"none"}} to={a.path}>

  <a className='aname' underlineColorAndroid='transparent' inputContainerStyle={{borderBottomWidth:0}} style={{fontFamily:"forte",textDecorationLine:"none"}}>{a.name}</a></Link> 

      </div>
      </p>)
    })}
</section>
</motion.div>

<main>
          {children}
        </main>
       </div>
</div>
    
  );
};

export default Sidebar;



