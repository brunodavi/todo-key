import React, { useState, useEffect } from 'react';
import api from '../../api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  function apiStart() {
    api.task.list()
      .then(({ data }) => {
        setTasks(data);
      });
  }

  function apiUpdate(data) {
    api.task.update(data).then();
    apiStart();
  }

  function apiDelete(id) {
    api.task.deleteById(id).then();
    apiStart();
  }

  useEffect(apiStart, []);

  function handleClick(id) {
    apiDelete(id);
    apiStart();
  }

  function handleChange({ target }) {
    const { value } = target;
    setTitle(value);
  }

  function handlePressEnter({ code }) {
    if (code === 'Enter') {
      setTasks([...tasks, title]);
      setTitle('');

      apiUpdate(tasks);
    }
  }

  function liTasks() {
    return tasks.map(({ id, name }) => (
      <label htmlFor={id} key={name}>
        <div>
          <input id={id} type="checkbox" />
          {name}
          <input type="button" value="X" onClick={() => handleClick(id)} />
        </div>
      </label>
    ));
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
