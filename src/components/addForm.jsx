import React from 'react';

export default({handleSubmit, handleChange}) => {
  return (
  <div className="formBG">
    <form>
      <input onChange={handleChange} type="text" placeholder="Add a task" />
      <button type="submit" onSubmit={handleSubmit}>Add task</button>
    </form>
  </div>
  );
}