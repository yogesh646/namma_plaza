import { Button } from '@mui/material';
import React from 'react'
import kmi from './kmi.png';
import { Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';

 const Home = () => {
return (
    <div className='homeback' style={{color:"blue",height:"717px"}}>
        Home
<div style={{marginLeft:"0px",display:"flex"}}><a style={{marginLeft:"30px",display:"flex"}}/>




<div className='loo'>Namma Plaza

<Image style={{height:"400px",width:"400px",marginTop:"0px",marginLeft:"20px",marginLeft:"100px",marginTop:"100px"}} src={kmi}/>
</div>
<div style={{marginLeft:"100px",marginTop:"100px"}}>

<Button  sx={{marginLeft:'30px',background:'#04980B',height:"30px",marginTop:"10px"}}  variant='contained' ><Link to='/update' style={{textDecoration:"none"}}>
<p style={{marginLeft:"0px",color:"white",padding:"3px",textAlign:"center",marginTop:"15px"}}>
    Register
    </p></Link></Button>
    <br/>
    <Button  sx={{marginLeft:'30px',height:"30px",marginTop:"20px",width:"112px"}}  variant='contained' ><Link to='/add' style={{textDecoration:"none"}}>
<p style={{marginLeft:"0px",color:"white",padding:"3px",textAlign:"center",marginTop:"18px"}}>
    Login
    </p></Link></Button>
</div>
</div>
    </div>
  )
}
export default Home;