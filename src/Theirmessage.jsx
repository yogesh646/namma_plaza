import React from "react";

const Theirmessage=({message,lastmessage})=>{

const firstbyuser= !lastmessage || lastmessage.sender.username!==message.sender.username;

    return(
        <div>Their message


<div>{firstbyuser &&
<div style={{background:`url(${message?.sender?.avatar})`}}/>}
{ message?.attachments?.length>0  ?
<img src={message.attachments[0].file}/>:
<div style={{float:"right",backgroundColor:"CABCDC"}}>{message.text}</div>
}
</div>


        </div>
    )
}
export default Theirmessage;