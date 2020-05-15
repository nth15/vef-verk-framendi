
import React from 'react';

export default class Input extends React.Component {

  render() {
    return (
      <div className="input">
      <label> 
        {this.props.label}
        <input 
        type={this.props.type} 
        onChange={this.props.onChange} 
        />
      </label>
      </div>
    );
  }
}