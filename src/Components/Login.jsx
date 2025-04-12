import React from 'react';
import './Login.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import signuplogo from '../Images/signuplogo.jpg';

function Login() {
  return (
    <div classname='signuppage'>
        <div className='weblogo flex items-center gap-8'>
            <img src={signuplogo}/>
    <div className='signup items-center'>
        <Card style={{width:'70rem'}}>
          <Card.Body className='bg-black text-white'>
           <div classname ="details bg-black">
            <fieldset>
            <input type="text" className="my-2 bg-black text-white" placeholder="Email or Phone Number" /> <br />
                   <input type="text" className="my-2 bg-black text-white" placeholder="Password"/>
               </fieldset>

                 <Button variant="primary">LogIn</Button><br />
                 <a href="">Forgot Password</a><hr />
                <Button variant="success">Create New Account</Button>  
           </div>
          </Card.Body>
        </Card>
    </div>
    </div>
    </div>
  )
}

export default Login
