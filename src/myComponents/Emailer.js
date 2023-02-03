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




  const handleClick = (e, fieldType) => {
    if(fieldType === "email"){
      setMessage(e.target.value);
      
    }else if(fieldType === "CC"){
      setMessageCC(e.target.value);
    }
    else if(fieldType === "BCC"){
      setMessageBCC(e.target.value);
    }
    console.log('You clicked the Chip.');
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
    console.info('You clicked the delete icon.');
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

  return (
    <div className='container'>
      <div className='container emailer'>
        <table>
          <tr>
            <div className='d-flex align-items-center pt-4'>
              <td>Email:</td> 
              <td><TextField style={{marginLeft:"0.5rem",width:'43rem',boxSizing:'inherit',}} value={message} onChange={(e) => handleClick(e, "email")} onDelete={(e) => handleDelete(e,"email")} onKeyDown={(e)=>handleKeyDown(e,"email")} InputProps={{
              startAdornment:(
                <InputAdornment postion="start">
                  {email.map((e,i)=><Chip key={i} onDelete={(e) => handleDelete(e,"email")} label={e} style={{margin:'3px',}}></Chip>)}
                </InputAdornment>
              )
              }} type="email" name="email" placeholder='Enter your Email'></TextField>
              </td>
            </div> 
          </tr>
          <tr>
            <div className='d-flex align-items-center pt-4'>
              <td>CC:</td> 
              <td><TextField style={{marginLeft:"0.5rem",width:'44rem',boxSizing:'inherit',}} value={messageCC} onChange={(e) => handleClick(e, "CC")} onDelete={(e) => handleDelete(e,"CC")} onKeyDown={(e)=>handleKeyDown(e,"CC")} InputProps={{
              startAdornment:(
                <InputAdornment postion="start">
                  {CC.map((e,i)=><Chip key={i} onDelete={(e) => handleDelete(e,"CC")} label={e} style={{margin:'3px',}}></Chip>)}
                </InputAdornment>
              )
              }} type="email" name="CC" placeholder='CC'></TextField>
              </td></div> 
          </tr>
          <tr>
            <div className='d-flex align-items-center pt-4'>
              <td>BCC:</td> 
              <td><TextField style={{marginLeft:"0.5rem",width:"43rem",boxSizing:'inherit',}} value={messageBCC} onChange={(e) => handleClick(e, "BCC")} onDelete={(e) => handleDelete(e,"BCC")} onKeyDown={(e)=>handleKeyDown(e,"BCC")} InputProps={{
              startAdornment:(
                <InputAdornment postion="start">
                  {BCC.map((e,i)=><Chip key={i} onDelete={handleDelete(e,"BCC")} label={e} style={{margin:'3px',}} ></Chip>)}
                </InputAdornment>
              )
              }} type="email" name="BCC" placeholder='BCC'></TextField>
              </td>
              </div> 
          </tr>
          <tr>
            <div className='d-flex align-items-center pt-4'>Subject: <TextField style={{marginLeft:"0.5rem",width:"42rem",boxSizing:'inherit',}} type="text" name="Subject" placeholder='SUBJECT'></TextField></div>
          </tr>
          <tr>  
            <div className='textBox pt-4'><textarea style={{marginLeft:"0.5rem",width:"46rem",fontSize:"16px",borderColor:'lightgray'}} name="textBox" rows="4" cols="40"></textarea></div>        
          </tr>
        </table>
        <div className='d-flex justify-content-between' style={{width:"40rem",}}>
          <div className='buttonR btn btn-primary m-3 mx-3' cursor="pointer">Generate token</div>
          <div className='buttonR btn btn-success m-3' cursor="pointer">Send Email(s)</div>
        </div>
        <div>
          <textarea style={{width:"46rem",fontSize:"16px",}} name="textBoxToken" rows="4" cols="40" placeholder='Access token response:'></textarea>
        </div>
        <div>
            <textarea style={{width:"46rem",fontSize:"16px",}} name="textBoxToken" rows="8" cols="40" placeholder='Send email(s) server response:'></textarea>
        </div>
        <div className='buttonR btn btn-danger m-3' cursor="pointer">Clear all data</div>

      </div>
        
    </div>        
  );
}

export default Emailer