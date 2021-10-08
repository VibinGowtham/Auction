import logo from './logo.svg';
import React, {Component} from 'react';
// import Navbar from './Navbar';
import './App.css';
 import Player from './Player';
// import tachyons from 'tachyons';
import CardList from './CardList'
import Signin from './Signin'
const Buyers=[
{
FirstName: "Vibin",
LastName: "Gowtham",
Email: "Vbngowtham@gmail.com",
Password: "p@123"
},
{
FirstName: "Gowtham",
LastName: "gopal",
Email: "gowtham@gmail.com",
Password: "gowtham@123"
},
{
FirstName: "Rahul",
LastName: "Krishna",
Email: "rahul@gmail.com",
Password: "rahul@123"
},
{
FirstName: "Raj",
LastName: "Kumar",
Email: "raj@gmail.com",
Password: "raj@123"
},
{
FirstName: "ravi",
LastName: "prasath",
Email: "ravi@gmail.com",
Password: "ravi@123"
},
]
let Players=[
{
  url:"https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/14/w1200X800/Faf_du_Plessis_PTI.jpg",
FirstName: "Faf",
LastName: "Duplesis",
Email: "duplesi@gmail.com",
Password: "Faf@123",
Age:37,
Matches:190,
Category:"Batsman",
Average:37.8,
CareerBest:95,
BasePrice:15000
},
{
url : "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170673/kl-rahul.jpg",
FirstName: "KL",
LastName: "Rahul",
Email: "Rahul@gmail.com",
Password: "Kl@134",
Age:27,
Matches:167,
Category:"Batsman",
Average:46.7,
CareerBest:132,
BasePrice:20000
},
{
url: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
FirstName: "Virat",
LastName: "Kohli",
Email: "virat@gmail.com",
Password: "Virat@183",
Age:33,
Matches:202,
Category:"Batsman",
Average:43.6,
CareerBest:109,
BasePrice:20000
},
{
url:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170641/glenn-maxwell.jpg",
FirstName: "Glenn",
LastName: "Maxwell",
Email: "maxwell@gmail.com",
Password: "Glenn@123",
Age:31,
Matches:125,
Category:"Batsman",
Average:34.8,
CareerBest:84,
BasePrice:15000
},
{
url:"https://storage.googleapis.com/cricketimages/Players/DZ.png",
FirstName: "Rahul",
LastName: "Tripathi",
Email: "tripathi@gmail.com",
Password: "Rahul@33",
Age:29,
Matches:85,
Category:"Batsman",
Average:30.5,
CareerBest:79,
BasePrice:10000
},
{
url:"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319946.png",
FirstName: "Ms",
LastName: "Dhoni",
Email: "dhoni@gmail.com",
Password: "Ms@183",
Age:40,
Matches:210,
Category:"Batsman",
Average:40.2,
CareerBest:84,
BasePrice:15000
},
{
url:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170670/ravindra-jadeja.jpg",
FirstName: "Ravindra",
LastName: "Jadeja",
Email: "jadeja@gmail.com",
Password: "Ravi@8",
Age:31,
Matches:180,
Category:"Batsman",
Average:34.8,
CareerBest:67,
BasePrice:15000
},
{
url:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170666/hardik-pandya.jpg",
FirstName: "Hardik",
LastName: "Pandya",
Email: "pandya@gmail.com",
Password: "Hardik@33",
Age:28,
Matches:110,
Category:"Batsman",
Average:36.8,
CareerBest:91,
BasePrice:15000
},
{
url:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170690/yuzvendra-chahal.jpg",
FirstName: "Yuzvendra",
LastName: "Chahal",
Email: "chahal@gmail.com",
Password: "Yuzi@123",
Age:29,
Matches:136,
Category:"Bowler",
Average:7.2,
CareerBest:16,
BasePrice:15000
},
{
url:"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316500/316521.png",
FirstName: "Ravichandran",
LastName: "Ashwin",
Email: "ashwin@gmail.com",
Password: "Ravichandran@23",
Age:35,
Matches:186,
Category:"Bowler",
Average:7.8,
CareerBest:44,
BasePrice:15000
},
{
url:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170684/mohammed-shami.jpg",
FirstName: "Mohammed",
LastName: "Shami",
Email: "shami@gmail.com",
Password: "Mohammed@17",
Age:31,
Matches:163,
Category:"Bowler",
Average:7.5,
CareerBest:24,
BasePrice:15000
},
{
url:"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319940.png",
FirstName: "Jasprit",
LastName: "Bumrah",
Email: "bumrah@gmail.com",
Password: "Jasprit@93",
Age:29,
Matches:164,
Category:"Bowler",
Average:6.8,
CareerBest:16,
BasePrice:20000
},
{
url:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c151715/arshdeep-singh.jpg",
FirstName: "Arshdeep",
LastName: "Singh",
Email: "singh@gmail.com",
Password: "Arshdeep@27",
Age:24,
Matches:24,
Category:"Bowler",
Average: 8.4,
CareerBest:8,
BasePrice:10000
}
];

class App extends Component {
  constructor(){
    super();
    this.state={
        Players:Players,
        Name:"",
        id:-1,
        Email:"",
        Password:"",
        isSignedin:false,
        Usertype:"",
        Wallet:50000,
        route:"home",
        searchField:""
    }
  }
   onSignout=(route)=>{
    if(route==="home") this.setState({isSignedin:false})
  this.setState({route:route})
}



  onNameChange=(event)=>{
this.setState({Name:event.target.value});
  }
  onEmailChange=(event)=>{
    this.setState({Email:event.target.value});
  }
  onPasswordChange=(event)=>{
    this.setState({Password:event.target.value});
  }
onButtonSubmit=()=>{
  let i=0,j=0,flag=0;
  Buyers.forEach(buyer=>{

    if(buyer.Email.toString().toLowerCase() == this.state.Email.toString().toLowerCase() && buyer.Password==this.state.Password)
    {
          this.setState({isSignedin: true});
           this.setState({Usertype:"buyer"});
           // this.state.Name= Buyers[i].FirstName;
           this.setState({Name: Buyers[i].FirstName})
           // alert(this.state.Name);
           flag=1;
           return;
    }  
    i++;
  })
   if(flag==1) {
    i=0;
    return;
  }
   else{
    Players.forEach(player=>{
    if(player.Email.toString().toLowerCase() == this.state.Email.toString().toLowerCase() && player.Password==this.state.Password)
    {
          this.setState({isSignedin: true});
           this.setState({Usertype:"player"});
           // alert(j);
           this.setState({id:j});
             return;
    }  
    j++;
  })
  }
}

onSearchChange=(event)=>{
let data=event.target.value;
   const filteredUsers = Players.filter(player =>{
      return player.FirstName.toLowerCase().includes(data.toLowerCase());
    })
   console.log(filteredUsers);
   this.setState({Players: filteredUsers});
   
}


  render(){
    if(this.state.isSignedin){
          if(this.state.Usertype=="buyer"){
            return(
              <div>
              {
                <CardList onSearchChange={this.onSearchChange} Players={this.state.Players} user={this.state.Name} Wallet={this.state.Wallet} onSignout={this.onSignout}/>
              }
            </div>
            );
          }
          else if(this.state.Usertype=="player"){
             return(
          <Player Player={this.state.Players[this.state.id]} onSignout={this.onSignout}/>
            )
          }
        }
    else if(this.state.route==='home'){
       return (
      <div className="App">
         <Signin onButtonSubmit={this.onButtonSubmit} onNameChange={this.onNameChange} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange}/>
      </div>
 
  );
  }
    }
}
export default App;
