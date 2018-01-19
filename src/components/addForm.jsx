import React from 'react';

export default class AddForm extends React.Component {
  render(){
    return (
      <div className="formBG">
        <form>
          <input onChange={this.props.handleChange} type="text" placeholder="Add a task" />
          <button type="submit" onSubmit={this.props.handleSubmit}>Add task</button>
        </form>
      </div>
    );
}
}