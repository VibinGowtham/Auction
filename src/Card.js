import React, {Component} from 'react';
import './Signin.css'
class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      userName:this.props.userName,
      FirstName:this.props.FirstName,
      LastName:this.props.LastName,
      Age:this.props.Age,
      Matches:this.props.Matches,
      Category:this.props.Category,
      Average:this.props.Average,
      CareerBest:this.props.CareerBest,
      BasePrice:this.props.BasePrice,
      Wallet:this.props.Wallet,
      url:this.props.url
    }
  }

  
  render(){
const {updateWallet}=this.props;
    return (
  
        <div className='cardcompo tc grow bg-light-blue br4 pa4 ma4 dib bw2 shadow-5'>
      <img alt='users' src={this.state.url} />
      <div>
        <h3>Name :{" "+this.state.FirstName +" "+ this.state.LastName}</h3>
        <p>Age :{this.state.Age}</p>
        <p>Average :{this.state.Average}</p>
        <p>BasePrice : {this.state.BasePrice}</p>
        <input className='buttonstyle' style={{width:"200px"}} type="button" onClick={()=>updateWallet(this.state.BasePrice)} value="Bid"/>
              </div>
      </div>
    
  );
  }
  
}

export default Card;


