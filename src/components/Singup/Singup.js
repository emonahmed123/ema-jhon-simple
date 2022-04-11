import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
        const [email,setEmail] =useState( ' ');
        const [password,setPassword] =useState( ' ');
        const [confirmPassword,setConfirmPassword] =useState( ' ')
        const [ error,setError] =useState( ' ')
        

   const handleEmailBlur =event=>{
       setEmail(event.target.value)
   }
   const handlePassword=event=>{
       setPassword(event.target.value)
   }

   const hadleConfirmPassword =event =>{
       setConfirmPassword(event.target.value)
   }
   const handleCreateUser =event=>{
       event.preventDefault()
       if(password !== confirmPassword){
         setError('Your two did not macth')  
        return
       }
   }

    return (
        <div className='form-container'>
        <div>
        <h1 className='form-title'>Sigup </h1>

      <form >
          
      <div className='input-group'>
            <label htmlFor='email'>Email</label>
             <input onBlur={handleEmailBlur} type='email' name="email" id='' required/>
        </div>
       <div className='input-group'>
            <label htmlFor='password'>Password</label>
             <input onBlur={handlePassword}  type='password' name="password" id='' required/>
        </div>
       <div className='input-group'>
            <label htmlFor='confirm-password'>Confirm Password</label>
             <input onBlur={ hadleConfirmPassword } type='password' name="confirm-password" id=''required/>
        </div>
             <p style={{color:'red'}}>{error}</p>
              <input className='form-submit' type="submit" value='Login' />

      </form>
        <p>Already have an account? <Link className='form-link' to= '/login'>Login</Link></p>
       </div>
    </div>
    );
};

export default Singup;