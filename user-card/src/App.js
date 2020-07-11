import React from 'react';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
      this.state={
          avatar_url:[],
          name:[],
          login:[],
          url:[],
          location:[],
      };
    }
  
  componentDidMount(){
    fetch('https://api.github.com/users/priyanka10it')
      .then(res => res.json())
      .then(userData => {
        console.log('User Data', userData);
        
        this.setState({ avatar_url: userData.avatar_url });
        this.setState({ name: userData.name });
        this.setState({login:userData.login});
        this.setState({url:userData.url});
        this.setState({ location: userData.location });
         })
      .catch(err => console.error(err));
  }
  
render(){
  return(
    <div>
      <h1>Welcome to Github User-Card</h1>
      <UserCard 
      avatar_url={this.state.avatar_url}
      name={this.state.name}
      login={this.state.login}
      url={<a href="#">{this.state.url}</a>}
      location={this.state.location}
      />
      <FollowerCard/>
    </div>
  );
}
}
export default App;
