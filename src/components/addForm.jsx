import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class AddForm extends React.Component {
  render(){
    return (
      <div className="formBG">
        <TextField
            id="taskInput"
            label="New task"
            onChange={this.props.handleChange}
            margin="normal"
          />
          <Button
            raised
            color="secondary"
            onClick={this.props.handleSubmit}
          >
            Add task
          </Button>
      </div>
    );
}
}