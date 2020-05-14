import React from 'react';

import Input from '../input/Input';

import './Login.scss';

export default class Products extends React.Component {

  state = { value: '' }

  handleChange = (e) => {
    const { value } = e.target;

    if (value.length < 10) {
      this.setState({ value: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`A name was submitted: ${this.state.value}`);
  }

  render() {
    return (
      <div className="login">
        <div className="login__row">
          <div className="login__col">
            <form onSubmit={this.handleSubmit}>
              <Input label={"Username"} type={"text"} onChange={"onSubmitUser"} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}