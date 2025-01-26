import React, { useState } from 'react';

const SignInPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="sign-in-page">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

      <br/>
      <form>
       
          <input className ='email' type="email" required  placeholder='Email'/>
  
        <br/>
          <input className ='email' type="password" required  placeholder='Password'/>
        <br/>
        {isSignUp && (
                  
            <input className='email' type="password" required placeholder='Confirm Password'/>
        
        )}
        <br/>
        <button className ='sign'  type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <br/>
      <button className ='signup' onClick={() => setIsSignUp(!isSignUp)}>
      <a> <href> {isSignUp ? 'Sign In' : 'Sign Up'}</href></a>
      </button>
    </div>
  );
};

export default SignInPage;