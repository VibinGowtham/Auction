 import React from 'react';
 import tachyons from 'tachyons';
import './Signin.css';
 const Signin=({onNameChange,onPasswordChange,onEmailChange,onButtonSubmit})=>{
  return(
     <div className="tc grow ma6 dib bw2 shadow-5 cardcomponent pa4 black-80">
  <div className="measure center">
    <fieldset id="sign_up" className="ba b--transparent  ph0 mh0">
    <label className="headerfont fw6 ph0 mh0 f2"><bold>SIGN IN</bold></label>
      <div className="mt3">
        <label className="db fw6 lh-copy f3" for="email-address">EMAIL</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={onEmailChange} type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f3" for="password">PASSWORD</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" onChange={onPasswordChange} name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input className="buttonstyle b ph3 pv2 input-reset ba b--black  grow pointer f6 dib" type="button" value="Submit" onClick={onButtonSubmit} value="Sign in"/>
    </div>
  </div>
</div>
  );
 }
 export default Signin;
 