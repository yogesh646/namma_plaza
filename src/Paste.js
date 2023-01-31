import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import database, { storage } from './firebase.js'; 
import Sidebar from './Sidebar.js'
import {  Image } from 'react-bootstrap';
import mt from './mt.jpg';
import { toast, ToastContainer } from 'react-toastify';

const Paste = () => {
   
const [datas, setdatas] = useState({
    name:"",
    mail:"",
    img:"",
    imgs:"",
    imgss:"",
    imglink:"",
    imglinks:"",
    imglinkss:""
})

useEffect(() => {

}, [datas])


const handlechanges=(e)=>{
    setdatas({...datas,mail:e.target.value});
    console.log(datas.mail);
      }
  
  const    handlechangess=(e)=>{
        setdatas({...datas,img:e.target.files[0]});
      
          }
    
          const    handlechangess1=(e)=>{
            setdatas({...datas,imgs:e.target.files[0]});
          
              }
                
  const    handlechangess2=(e)=>{
    setdatas({...datas,imgss:e.target.files[0]});
  
      }
   const handlechange=(e)=>{
        setdatas({...datas,name:e.target.value});
  console.log(datas.name);
    }
      
        
      //img0
   const handleds=()=>{
    const {img,imglink}=datas;
        if(img!=""){
        console.log("handled");
         storage.ref("/images/"+ `${img.name}`).put(img).on("state_changed",alert("success"),alert,()=>{
        storage.ref("images").child(img.name).getDownloadURL().then((url)=>setdatas({...datas,imglink:url}))
      });
      console.log("link",imglink);
      toast.success("Image1 uploaded.")}else{
        console.log("img needed");
      }
      }
      //img1
      const handleds1=()=>{
        const {imgs,imglinks}=datas;
            if(imgs!=""){
            console.log("handled");
             storage.ref("/images/"+ `${imgs.name}`).put(imgs).on("state_changed",alert("success"),alert,()=>{
            storage.ref("images").child(imgs.name).getDownloadURL().then((url)=>setdatas({...datas,imglinks:url}))
          });
          console.log("link",imglinks);
          toast.success("Image2 uploaded.")}else{
            console.log("img needed");
          }
          }
          //img2
          const handleds2=()=>{
            const {imgss,imglink,imglinkss}=datas;
                if(imgss!=""){
                console.log("handled");
                 storage.ref("/images/"+ `${imgss.name}`).put(imgss).on("state_changed",alert("success"),alert,()=>{
                storage.ref("images").child(imgss.name).getDownloadURL().then((url)=>setdatas({...datas,imglinkss:url}))
                console.log(imglinkss);
              });
              console.log("link",imglink);
              toast.success("Image3 uploaded.")}else{
                console.log("img needed");
              }
              }
    
   
   
      
   const  handlesub= (e)=>{
          e.preventDefault();
         
        const {name,mail,imglink,imglinks,imglinkss}=datas;
          const reu=  database.ref("data").push({Id:Math.random(),Name:name,Mail:mail,Img:imglink,Imgs:imglinks,Imgss:imglinkss}).catch(alert);
          console.log("data saved");
          toast.success("Registered Successfully.",{position:toast.POSITION.TOP_CENTER})
        }

    return (
        
                 <div style={{display:"flex",marginTop:'100px'}}>
        <ToastContainer autoClose={2000}/>
        <form style={{marginLeft:"30px",marginTop:"10px"}} onSubmit={handlesub}>
      
<Image src="https://i.ibb.co/G2wbL6G/per.png" style={{height:"200px",width:"200px",borderRadius:'4px'}}/>
<br/>
<input style={{marginLeft:"0px",marginTop:"20px"}}  type='text' onChange={handlechange} placeholder='Name..'/>
<br/>
<input style={{marginLeft:"00px",marginTop:"20px"}} value={datas.mail}  type="text"  onChange={handlechanges} placeholder='Mail..'/>
<br/>
<input style={{marginLeft:"00px",marginTop:"20px",height:"100px",width:"350px",backgroundColor:'lightskyblue'}} type="file"  onChange={handlechangess} />
<input style={{marginLeft:"00px",marginTop:"20px",height:"100px",width:"350px",backgroundColor:'lightskyblue'}} type="file"  onChange={handlechangess1} />
<input style={{marginLeft:"00px",marginTop:"20px",height:"100px",width:"350px",backgroundColor:'lightskyblue'}} type="file"  onChange={handlechangess2} />
<br/>
<button style={{marginLeft:"50px",marginTop:"20px"}} type='submit'>Add</button>
<br/>
<button style={{marginLeft:"50px",marginTop:"20px"}} type='reset'>Reset</button>

{/* <Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={(e)=>handleget(e)}
>Get data</Button>
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={(e)=>handled(e)}
>Set data</Button> */}
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={handleds}
>put Image1</Button>
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={handleds1}
>put Image2</Button>
<Button style={{color:"wheat", backgroundColor:"GrayText",marginLeft:"50px",marginTop:"20px",fontSize:"13px"}}
onClick={handleds2}
>put Image3</Button>
</form>
        </div>
        
    );
};

export default Paste;