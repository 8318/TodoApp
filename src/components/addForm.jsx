import React from 'react';

export default class AddForm extends React.Component {
  render(){
    return (
      <div className="formBG">
          <input onChange={this.props.handleChange} type="text" placeholder="Add a task" />
          <button  onClick={this.props.handleSubmit}>Add task</button>
      </div>
    );
}
}