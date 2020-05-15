import React from 'react';

import { register } from '../../api/api'

import Input from '../input/Input';

import './Register.scss';

export default class Register extends React.Component {

  state = { 
    user: '',
    email: '',
    password: '' 
  }

  onUserChange = (e) => {
    const { user } = e.target;
    this.setState({ user: e.target.value });
  }

  onEmailChange = (e) => {
    const { email } = e.target;
    this.setState({ email: e.target.value });
  }

  onPasswordChange = (e) => {
    const { password } = e.target;
    this.setState({ password: e.target.value });  
  }

  
  onSubmit = (e) => {
    e.preventDefault();
    
    (async () => {
      const res = await register(this.state.user, this.state.email, this.state.password);
      console.log(res);
      console.log(res.data);
      if (res.status >= 200 && res.status < 300) {
        localStorage.setItem('token,', res.data.token);
        localStorage.setItem('user', res.data.user);
        localStorage.setItem('cart', JSON.stringify([]));
        alert('Þú ert skráður til hamingju');
        return;
      }
      alert('Skráning mistókst.');
    })()

  }
  render() {
    return (
      <div className="register">
        <div className="register__row">
          <div className="register__col">
            <form onSubmit={this.onSubmit}>
              <Input 
              label={"Notendanafn"} 
              type={"text"} 
              value={this.state.user}  
              onChange={this.onUserChange} 
              />

              <Input 
              label={"Tölvupóstur"} 
              type={"email"} 
              value={this.state.email}  
              onChange={this.onEmailChange} 
              />

              <Input 
              label={"Lykilorð"} 
              type={"password"} 
              value={this.state.password}  
              onChange={this.onPasswordChange} 
              />
              <button onClick={this.onSubmit} className="register__button">Skráning</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}