import React ,{Component}from 'react';
import './Player.css';

class Player extends Component{
	constructor(props){
super(props);
this.state={
      FirstName:this.props.Player.FirstName,
      LastName:this.props.Player.LastName,
      Age:this.props.Player.Age,
      Matches:this.props.Player.Matches,
      Category:this.props.Player.Category,
      Average:this.props.Player.Average,
      CareerBest:this.props.Player.CareerBest,
      BasePrice:this.props.Player.BasePrice,
      url:this.props.Player.url,
      searchValue:""
	}
}
onChangeValues=(event)=>{
	this.setState({searchValue:event.target.value});
}
OnButtonClick=()=>{
switch(this.state.searchValue.toString().toLowerCase()){
	case "firstname": {
		let a=prompt("Enter New Value")
		this.setState({FirstName:a})
		break;
	}
	case "lastname": {
		let a=prompt("Enter New Value")
		this.setState({LastName:a})
		break;
	}
	case "age": {
		let a=prompt("Enter New Value")
		this.setState({Age:a})
		break;
	}
	case "average": {
		let a=prompt("Enter New Value")
		this.setState({Average:a})
		break;
	}
	case "url": {
		let a=prompt("Enter New Value")
		this.setState({url:a})
		break;
	}
	case "matches": {
		let a=prompt("Enter New Value")
		this.setState({Matches:a})
		break;
	}
	case "category": {
		let a=prompt("Enter New Value")
		this.setState({Category:a})
		break;
	}
	case "careerbest": {
		let a=prompt("Enter New Value")
		this.setState({CareerBest:a})
		break;
	}
	case "baseprice": {
		let a=prompt("Enter New Value")
		this.setState({BasePrice:a})
		break;
	}
	default : alert("Wrong Field")
}
}
render(){
	const {onSignout}=this.props;
	// return(
	// 	nav style={{display:'flex' , justifyContent:'space-around'}}>
 //        <p style={{border:"2px solid red", width:"400px",textAlign:"center"}} className='buttonstyle f3 link dim black  pa3 pointer'>Welcome Back: {this.FirstName}</p>
 //         <p style={{border:"2px solid red", width:"400px",textAlign:"center"}} onClick={()=>onSignout('home')} className='buttonstyle f3 link dim black  pa3 pointer'>Log Out</p>    
 //        </nav>

	// 	)
	
return(
	<div>
	<nav style={{display:'flex' , justifyContent:'space-around'}}>
        <p style={{border:"2px solid red", width:"400px",textAlign:"center"}} className='buttonstyle f3 link dim black pa2 pointer'>User :{" "+ this.state.FirstName + " " + this.state.LastName}</p>
         <p style={{border:"2px solid red", width:"400px",textAlign:"center"}} onClick={()=>onSignout('home')} className='buttonstyle f3 link dim black pa2 pointer'>Log Out</p>    
       </nav>

	   <div style={{marginLeft:"400px", width:"550px"}} className='tc bg-light-green br3 pa3 ma3 dib bw2 shadow-6'>
      <img alt='users'  src={this.state.url} /><br/>
      <h2>Name: {this.state.FirstName +" "+ this.state.LastName}</h2>
      <div>
        <h4>Age: {this.state.Age}</h4>
         <h4>Matches: {this.state.Matches}</h4>
         <h4>Category: {this.state.Category}</h4>
         <h4>Average: {this.state.Average}</h4>
          <h4>CareerBest: {this.state.CareerBest}</h4>
            <h4>BasePrice: {this.state.BasePrice}</h4>
                 What do You want to update? <br/>
        <input type="text" style={{ margin:"10px"}} onChange={this.onChangeValues} value={this.state.searchValue}/><br/>
        <input className="buttonstyle" type="button" style={{width:"200px", margin:"10px"}} value="Update" onClick={this.OnButtonClick}/>
     </div>
      </div>
      </div>
	);
}

}

export default Player;