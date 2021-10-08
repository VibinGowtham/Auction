import React,{Component} from 'react';
import Card from './Card';

class CardList extends Component   {
	constructor(props){
		super(props);
		this.state={
			user:this.props.user,
			Wallet:this.props.Wallet,
			BasePrice:this.props.BasePrice,
			Count:0,
			SearchField:"",
			filteredUsers:[]
		}
	}

updateWallet=(data)=>{
	if(data>this.state.Wallet) alert("Sorry Insufficient Balance!!")
else{
	let ans=prompt("To proceed enter 'Yes'");
	if(ans.toString().toLowerCase()==='yes'){
		let temp=this.state.Wallet-data;
		this.setState({Count: this.state.Count+1})
this.setState({Wallet:temp});
	}
	else{
		alert("Successfully Aborted!!")
	}
	}
}

  
 AddWallet=()=>{
 	let amount=this.state.Wallet+ 50000;
this.setState({Wallet:amount})
}


render(){
		const{ Players,user,onSignout,onSearchChange}=this.props;

	return (
    <div>
       < nav style={{display:'flex' , justifyContent:'space-around'}}>
           <p style={{border:"2px solid red", width:"400px",textAlign:"center", letterSpacing:"4px"}} className='buttonstyle f3 link dim black  pa3 '>Welcome back: {this.state.user}</p>
        
        </nav>
    <input style={{textAlign:"center", marginLeft:"450px" ,width:"450px" ,marginBottom:"15px"}} onChange={onSearchChange} type='search'  className='pa2' placeholder="Search Players"/>
<br/>
    
   <nav style={{display:"flex" , justifyContent:"space-around"}}>
           <p style={{border:"2px solid red", width:"350px",textAlign:"center"}} className='buttonstyle f3 link dim black  pa3 pointer'>Players Bought: {this.state.Count}</p>
        <p style={{border:"2px solid red", width:"350px",textAlign:"center"}} className='buttonstyle f3 link dim black  pa3 pointer'>Balance Wallet: {this.state.Wallet}</p>
         <p style={{border:"2px solid red", width:"350px",textAlign:"center"}} className='buttonstyle f3 link dim black  pa3 pointer ' onClick={this.AddWallet}>Add To Wallet: 50000 </p>
         <p style={{border:"2px solid red", width:"350px",textAlign:"center"}} onClick={()=>onSignout('home')} className='buttonstyle f3 link dim black  pa3 pointer'>Log Out</p>    
        </nav>
    {  
        Players.map((user, i) => {
          return (
            <Card
              updateWallet={this.updateWallet}
              key={i}
              FirstName={Players[i].FirstName}
              LastName={Players[i].LastName}
              Age={Players[i].Age}
              Matches={Players[i].Matches}
              Category={Players[i].Category}
              Average={Players[i].Average}
              CareerBest={Players[i].CareerBest}
              BasePrice={Players[i].BasePrice}
              Wallet={this.state.Wallet}
              url={Players[i].url}
             />
          );
        })
      }}
    </div>
  )
}
  
}

export default CardList;