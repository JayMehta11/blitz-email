import React, {useState} from 'react'
import './emailer.css';
import {TextField, Chip, InputAdornment} from '@mui/material';

function Emailer() {

  const [message, setMessage] = useState('');

  const [email, setEmail] = useState([]);

  const [CC, setCC] = useState([]);

  const [messageCC, setMessageCC] = useState('');
  
  const [BCC, setBCC] = useState([]);

  const [messageBCC, setMessageBCC] = useState('');

  const [subject, setsubject] = useState('');

  const [textBox, settextBox] = useState('');



  const handleClick = (e, fieldType) => {
    if(fieldType === "email"){
      setMessage(e.target.value);
      
    }else if(fieldType === "CC"){
      setMessageCC(e.target.value);
    }
    else if(fieldType === "BCC"){
      setMessageBCC(e.target.value);
    }
    else if(fieldType === "subject"){
      setsubject(e.target.value);
    }
    else if(fieldType === "textBox"){
      settextBox(e.target.value);
    }
    // console.log('You clicked the Chip.');
  };

  const handleDelete = (i,fieldType) => {
    
    if(fieldType === "email"){
      let temp = [...email]
      temp.splice(i,1)
      setEmail(temp)
      
    }else if(fieldType === "CC"){
      let temp = [...CC]
      temp.splice(i,1)
      setCC(temp)
    }
    else if(fieldType === "BCC"){
      let temp = [...BCC]
      temp.splice(i,1)
      setBCC(temp)
    }
    // console.info('You clicked the delete icon.');
  };

  const handleKeyDown = (e,fieldType) => {
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      // console.log("space done")
      if(fieldType === "email"){
        let temp = email;
        temp.push(message)
        setMessage("")
        setEmail(temp)
      }else if(fieldType === "CC"){
        let temp = CC;
        temp.push(messageCC)
        setMessageCC("")
        setCC(temp)
      }
      else if(fieldType === "BCC"){
        let temp = BCC;
        temp.push(messageBCC)
        setMessageBCC("")
        setBCC(temp)
      }
      
    }
  };

  const handleSubmit = () => {
    // let arr = {
    //     'Email' : email,
    //     'CC': CC,
    //     'BCC': BCC,
    //     'SUBJECT': subject,
    //     'TextBox': textBox, 
    //   };
    // console.log(arr)
    console.log('Email: ' + email);
    console.log('CC: ' + CC);
    console.log('BCC: ' + BCC);
    console.log('SUBJECT: ' + subject);
    console.log('TextBox: ' + textBox);

    alert('Email has been sent succesfully.')
  };

  return (
    <div className='container'>
      <div className='container emailer'>
        
          
      <div className='email-grid align-self-center'>
              Email: 
              <TextField style={{
              // width:'42rem',
              // boxSizing:'inherit',
            }} value={message} onChange={(e) => handleClick(e, "email")} onDelete={(e) => handleDelete(e,"email")} onKeyDown={(e)=>handleKeyDown(e,"email")} InputProps={{
              startAdornment:(
                <InputAdornment postion="start">
                  {email.map((e,i)=><Chip key={i} onDelete={(e) => handleDelete(e,"email")} label={e} style={{margin:'3px',}}></Chip>)}
                </InputAdornment>
              )
              }} type="email" name="email" placeholder='Enter your Email'></TextField>
              
            
          
          
            
              CC: 
              <TextField style={{
              // width:'44rem',
              // boxSizing:'inherit',
            }} value={messageCC} onChange={(e) => handleClick(e, "CC")} onDelete={(e) => handleDelete(e,"CC")} onKeyDown={(e)=>handleKeyDown(e,"CC")} InputProps={{
              startAdornment:(
                <InputAdornment postion="start">
                  {CC.map((e,i)=><Chip key={i} onDelete={(e) => handleDelete(e,"CC")} label={e} style={{margin:'3px',}}></Chip>)}
                </InputAdornment>
              )
              }} type="email" name="CC" placeholder='CC'></TextField>
              
          
          
            
              BCC: 
              <TextField style={{
              // width:"43rem",
              // boxSizing:'inherit',
            }} value={messageBCC} onChange={(e) => handleClick(e, "BCC")} onDelete={(e) => handleDelete(e,"BCC")} onKeyDown={(e)=>handleKeyDown(e,"BCC")} InputProps={{
              startAdornment:(
                <InputAdornment postion="start">
                  {BCC.map((e,i)=><Chip key={i} onDelete={(e)=>handleDelete(e,"BCC")} label={e} style={{margin:'3px',}} ></Chip>)}
                </InputAdornment>
              )
              }} type="email" name="BCC" placeholder='BCC'></TextField>
              
              
          
          
            Subject: <TextField style={{
            // width:"42rem",
            // boxSizing:'inherit',
            }} onChange={(e) => handleClick(e, "subject")} type="text" name="Subject" placeholder='SUBJECT'></TextField>
          
            </div>
            <textarea className='mt-3' style={{ alignSelf: "center", width: "80%",fontSize:"16px",borderColor:'lightgray'}} onChange={(e) => handleClick(e, "textBox")} name="textBox" rows="4" cols="40"></textarea>        
          
        
        <div className='d-flex justify-content-around'>
          <div className='buttonR btn btn-primary m-3 mx-3 align-self-center' cursor="pointer">Generate token</div>
          <div className='buttonR btn btn-success m-3 align-self-center' onClick={handleSubmit} cursor="pointer">Send Email(s)</div>
          </div>
        
          <textarea style={{width:"46rem",fontSize:"16px", alignSelf: "center"}} name="textBoxToken" rows="4" cols="40" placeholder='Access token response:'></textarea>
        
        
          <textarea className='mt-3' style={{width:"46rem",fontSize:"16px", alignSelf: "center"}} name="textBoxToken" rows="8" cols="40" placeholder='Send email(s) server response:'></textarea>
        
        <div className='buttonR btn btn-danger m-3 align-self-center' cursor="pointer">Clear all data</div>

      </div>
        
    </div>        
  );
}

export default Emailer