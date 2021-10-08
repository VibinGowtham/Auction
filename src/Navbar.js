import React from 'react';
import './Signin.css';

const Navigation=({isSignedin,Name,Wallet})=>{
		return(
    <nav style={{display:'flex' , justifyContent:'center'}}>
        <p className='f3 link dim black underline pa3 pointer'>Welcome to the World's No 1 Best Bidding Portal</p>
    </nav>
    );
}
export default Navigation;