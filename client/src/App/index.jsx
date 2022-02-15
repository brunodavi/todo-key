import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  function liTasks() {
    return tasks.map((task, i) => (
      <label htmlFor={`checkbox-${i}`} key={task}>
        <div>
          <input id={`checkbox-${i}`} type="checkbox" />
          {task}
        </div>
      </label>
    ));
  }

  function handleChange({ target }) {
    const { value } = target;
    setTitle(value);
  }

  function handlePressEnter({ code }) {
    if (code === 'Enter') {
      setTasks([...tasks, title]);

      setTitle('');
    }
  }

  return (
    <div>
      <div>{liTasks()}</div>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        onKeyPress={handlePressEnter}
      />
    </div>
  );
}

export default App;
