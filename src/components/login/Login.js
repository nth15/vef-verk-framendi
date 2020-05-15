import React from 'react';
import { Redirect } from 'react-router-dom'

import Input from '../input/Input';

import './Login.scss';

import { login } from '../../api/api'


export default class Login extends React.Component {

  state = { 
    user: '',
    password: '' ,
  }

  onUserChange = (e) => {
    const { user } = e.target;
    this.setState({ user: e.target.value });
  }

  onPasswordChange = (e) => {
    const { password } = e.target;
    this.setState({ password: e.target.value });  
  }


  onSubmit = (e) => {
    e.preventDefault();
    
    (async () => {
      const res = await login(this.state.user, this.state.password);
      console.log(res);
      console.log(res.data);
      if (res.status >= 200 && res.status < 300) {
        localStorage.setItem('token,', res.data.token);
        localStorage.setItem('username', res.data.user.username);
        localStorage.setItem('cart', JSON.stringify([]));
        alert('Þú ert skráður inn!');
        window.location.reload(false);
        return;
      }
      alert('Innskráning mistókst');
    })()

  }

  render() {
   return (
      <div className="login">
        <div className="login__row">
          <div className="login__col">
            <form onSubmit={this.onSubmit}>
              <Input 
              label={"Notendanafn"} 
              type={"text"} 
              value={this.state.user}  
              onChange={this.onUserChange} 
              />
              <Input 
              label={"Lykilorð"} 
              type={"password"} 
              value={this.state.password}  
              onChange={this.onPasswordChange} 
              />
              <button onClick={this.onSubmit} className="login__button">Innskráning</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}