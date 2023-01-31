import React, { Component } from 'react';
import { Button } from '@mui/material';
import database, { storage } from './firebase.js'; 
import Sidebar from './Sidebar.js'
import { Image } from 'react-bootstrap';
import mt from './mt.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home.js';
import Ga from './Ga.js';
import { Link } from 'react-router-dom';

class Delete extends Component {

  constructor(props){
    super(props);

      this.state={
name:"",
mail:"",
img:"",
imglink:'',
developer:[],
list:[],
kaval: "",
yo:false
  }
  this.Button=this.Button.bind(this);
}

Button(){
  console.log("updated.")
}
  

handlechanges=(e)=>{
  this.setState({mail:e.target.value});
  console.log(this.state.mail);
    }

    handlechangess=(e)=>{
      this.setState({img:e.target.files[0]});
      console.log(this.state.img);
        }

  handlechange=(e)=>{
this.setState({name:e.target.value});
console.log(this.state.name);
  }

componentDidMount(){
  let img=this.state.img;
  let imglink=this.state.imglink;
  const {list}=this.state;
  this.handleget();
 this.handleds();

 }

  

 handleds=()=>{
     let img=this.state.img;
  let imglink=this.state.imglink;
  if(img!=""){
  console.log("handled");
   storage.ref("/images/"+ `${img.name}`).put(img).on("state_changed",alert("success"),alert,()=>{
  storage.ref("images").child(img.name).getDownloadURL().then((url)=>this.setState({imglink:url}))
});
console.log("link",imglink);
toast.success("Image uploaded.")}else{
  console.log("img needed");
}
}

handled=()=>{
  console.log("handled");
const de=storage.ref();
console.log(de)
}
handleget=()=>{

  this.setState({yo:true})
   const re=database.ref('data');
   re.on('value',snapshot=>{
    const {list}=this.state;
     const state=snapshot.val();
   this.setState({list:state})
     console.log("list",list)
     console.log("list",state)
   })
   console.log("retrived...")


}
edit(jil)  {

const fe=database.ref('user');
fe.on('value',snapshot=>{
  const state=snapshot.val();
 const rep= Object.values(state).filter((a)=>(a.Id==jil))
 toast.warn("Please wait...")

  console.log(rep);
})
}

 delete(b)  {
  console.log(' del clicked');
const fe=database.ref('data');
fe.child(b).remove();
toast.error("Deleted Successfully.",{position:toast.POSITION.BOTTOM_CENTER,className:"toast-success"})
console.log(b);

}
clonedelete(b)  {
  const{list}=this.state;
const fe=database.ref('user');

fe.child(b).remove();

}

  handlesub =(event)=>{
    event.preventDefault();
   
    let name=this.state.name;
      let mail=this.state.mail;
    let img=this.state.img;
    let imglink=this.state.imglink;
    const reu=  database.ref("data").push({Id:Math.random(),Name:name,Mail:mail,Img:imglink}).catch(alert);
    console.log("data saved");
    console.log(reu);
    this.state.name="";
    this.state.mail="";
    toast.success("Registered Successfully.",{position:toast.POSITION.TOP_CENTER})}
  

  render() {
    const {kaval,developer,list}=this.state;
    return (
    
      <div style={{backgroundColor:"white",height:"600px",width:"600px",display:"flex"}}>
      
 <div className='retry' style={{display:"fle"}}><a className='retry'><Ga/></a></div> 
 <div>
        {/* <div style={{display:"flex",marginTop:'100px'}}>
        
        <form style={{marginLeft:"30px",marginTop:"10px"}} onSubmit={this.handlesub}>
      
<Image src="https://i.ibb.co/G2wbL6G/per.png" style={{height:"200px",width:"200px",borderRadius:'4px'}}/>
<br/>
<input style={{marginLeft:"0px",marginTop:"20px"}} name='name' value={this.state.name} type="text" ref="name" onChange={this.handlechange} placeholder='Name..'/>
<br/>
<input style={{marginLeft:"00px",marginTop:"20px"}} name='mail' type="text" ref="mail" onChange={this.handlechanges} placeholder='Mail..'/>
<br/>
<input style={{marginLeft:"00px",marginTop:"20px",height:"100px",width:"350px"}} name='img' type="file" ref="img" onChange={this.handlechangess} placeholder='Image..'/>
<br/>
<button style={{marginLeft:"50px",marginTop:"20px"}} type='submit'>Add</button>
<br/>
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={this.handleget}
>Get data</Button>
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={this.handled}
>Set data</Button>
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={this.handleds}
>put data</Button>
</form>
        </div> */}

{/* <div className='listin' style={{marginTop:"63px", backgroundColor:"white",marginLeft:"50px",width:"400px",height:"628px",marginBottom:"10px"}} >
{ !list ? <div style={{marginLeft:"80px",marginTop:"20px",margin:'auto'}}>
<a style={{height:"80px",width:"80px",margin:'auto'}}><Image src={mt} style={{margin:'auto',height:"80px",width:"80px",borderRadius:'50px'}}/></a>

</div>:
<div style={{overflowY:'scroll',display:"fle",marginBottom:"20px",width:"330px",margin:'aut',marginTop:"25px",marginLeft:"40px",backgroundColor:"wheat",borderRadius:'10px',height:"600px"}}>


{Object.entries(list).map((a,key)=>{
   
   return <div className='tru' style={{fontFamily:"sans-serif",fontSize:'13px',margin:"auto",height:'150px',
   width:'250px',backgroundColor:'white',marginTop:'20px',borderRadius:'5px',marginBottom:"20px"}}>
     
        {<a ><Image className='imi' src={a[1].Img} style={{marginTop:'8px',height:"50px",width:"50px",borderRadius:'40px',marginLeft:'20px'}}/></a> }
  <div style={{display:"fle",marginLeft:"15px"}}>
  <b>Name:</b><b style={{whiteSpace:"pre-line",fontSize:"9px"}}>{a[0]}</b><br/>
  <b>Name:</b><b style={{whiteSpace:"pre-line"}}>{a[1].Name}</b>-------<br/><b>Mail:</b>
  <b style={{whiteSpace:"pre-wrap",marginLeft:'10px',color:'Highlight'}}>{a[1].Mail}</b>
   </div>
   <br/>
  
   <Button  sx={{backgroundColor:"pink",height:"20px",width:"4px",marginLeft:"15px",fontSize:"10px"}}>
   <b style={{marginTop:"3px",fontSize:"9px"}} onClick={()=>this.edit(a[1].Id)}>Edit</b></Button>
 
 
 <Button  sx={{backgroundColor:"red",height:"20px",width:"4px",marginLeft:"13px",fontSize:"10px"}}>
   <b style={{marginTop:"0px",fontSize:"9px",color:'wheat'}} onClick={()=>this.delete(a[0])}>Delete</b></Button>
</div>
})}
</div>
  }
</div>  */}

<div className='listin' style={{marginTop:"63px",display:"flex", backgroundColor:"white",marginLeft:"5px",width:"1500px",height:"500px",marginBottom:"10px"}} >
{ !list ? <div style={{marginLeft:"80px",marginTop:"20px",margin:'auto'}}>
<a style={{height:"80px",width:"80px",margin:'auto'}}><Image src={mt} style={{margin:'auto',height:"80px",width:"80px",borderRadius:'50px'}}/></a>

</div>:
<div className='mainb' style={{overflowX:'scroll',overflowY:"hidden",display:"flex",marginBottom:"20px",width:"1500px",margin:'aut',marginTop:"25px",marginLeft:"14px",borderRadius:'2px',height:"480px"}}>


{Object.entries(list).map((a,key)=>{
   
   return <div className='tru' style={{display:"fle",fontFamily:"sans-serif",fontSize:'13px',margin:"auto",height:'450px',marginLeft:'10px',
   width:'280px',marginTop:'12px',borderRadius:'5px',marginBottom:"20px",background:"white"}}>
     
      <div style={{display:"flex",height:"250px",width:"290px"}}> 
       {<a ><Image className='imig' src={a[1].Img}
        style={{marginTop:'8px',height:"250px",width:"250px",borderRadius:'40px',marginLeft:'13px'}}/></a> }</div>
  <div style={{display:"fle",marginLeft:"15px",marginTop:"20px"}}>

  <b></b><b style={{whiteSpace:"pre-line",marginLeft:'10px',marginTop:"30px"}}>{a[1].Name}</b>-------<br/><b></b>
  <b style={{marginTop:"30px",whiteSpace:"pre-wrap",marginLeft:'10px',color:'Highlight'}}>{a[1].Mail}</b>
   </div>
   <br/>
  
   <Button  sx={{color:'black',backgroundColor:"rgba(33, 250, 0, 0.5)",height:"20px",width:"4px",marginLeft:"15px",fontSize:"10px"}}>
   {/* <b style={{marginTop:"3px",fontSize:"9px"}} onClick={()=>this.edit(a[1].Id)}> */}
    <Link to='/banner' sx={{width:"50px"}} style={{textDecoration:"none"}} state={a[1]} > Edit</Link>
   </Button>
 
 
 <Button  sx={{backgroundColor:"red",height:"20px",width:"4px",marginLeft:"13px",fontSize:"10px"}}>
   <b style={{marginTop:"0px",fontSize:"9px",color:'wheat'}} onClick={()=>this.delete(a[0])}>Delete</b></Button>
</div>
})}

</div>
  }

</div>

{/* next */}

<div className='listin' style={{marginTop:"6px",display:"flex", backgroundColor:"white",marginLeft:"5px",width:"1500px",height:"500px",marginBottom:"10px"}} >
{ !list ? <div style={{marginLeft:"80px",marginTop:"20px",margin:'auto'}}>
<a style={{height:"80px",width:"80px",margin:'auto'}}><Image src={mt} style={{margin:'auto',height:"80px",width:"80px",borderRadius:'50px'}}/></a>

</div>:
<div className='mainb' style={{overflowX:'scroll',overflowY:"hidden",display:"flex",marginBottom:"20px",width:"1500px",margin:'aut',marginTop:"25px",marginLeft:"14px",borderRadius:'2px',height:"480px"}}>


{Object.entries(list).map((a,key)=>{
   
   return <div className='tru' style={{display:"fle",fontFamily:"sans-serif",fontSize:'13px',margin:"auto",height:'450px',marginLeft:'10px',
   width:'280px',backgroundColor:'white',marginTop:'20px',borderRadius:'5px',marginBottom:"20px"}}>
     
      <div style={{display:"flex",height:"250px",width:"290px"}}> 
       {<a ><Image className='imig' src={a[1].Img}
        style={{marginTop:'8px',height:"250px",width:"250px",borderRadius:'40px',marginLeft:'13px'}}/></a> }</div>
  <div style={{display:"flex",marginLeft:"15px"}}>

  <b></b><b style={{whiteSpace:"pre-line",marginTop:"30px"}}>{a[1].Name}</b>-------<br/><b></b>
  <b style={{marginTop:"30px",whiteSpace:"pre-wrap",marginLeft:'10px',color:'Highlight'}}>{a[1].Mail}</b>
   </div>
   <br/>
  
   <Button  sx={{backgroundColor:"pink",height:"20px",width:"4px",marginLeft:"15px",fontSize:"10px"}}>
   <b style={{marginTop:"3px",fontSize:"9px"}} onClick={()=>this.edit(a[1].Id)}>Edit</b></Button>
 
 
 <Button  sx={{backgroundColor:"red",height:"20px",width:"4px",marginLeft:"13px",fontSize:"10px"}}>
   <b style={{marginTop:"0px",fontSize:"9px",color:'wheat'}} onClick={()=>this.delete(a[0])}>Delete</b></Button>
</div>
})}
</div>
  }
</div>

<ToastContainer autoClose={1000}/>
</div>
      </div>
    )
  }
}
export default Delete;
