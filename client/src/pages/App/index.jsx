import React, { useState, useEffect } from 'react';
import api from '../../api';

import './style.scss';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const [editing, setEditing] = useState('');
  const [newName, setNewName] = useState('');

  function apiStart() {
    api.task.list()
      .then(({ data }) => {
        setTasks(data);
        setEditing('');
      });
  }

  function apiCreate(data) {
    api.task.create(data).then(apiStart);
  }

  function apiDelete(id) {
    api.task.deleteById(id).then(apiStart);
  }

  function apiUpdate(id) {
    api.task.updateById(id, { name: newName }).then(apiStart);
  }

  useEffect(apiStart, []);

  function handleDelete(id) {
    apiDelete(id);
  }

  function handleSetTitle({ target }) {
    const { value } = target;
    setTitle(value);
  }

  function handleSetName({ target }) {
    const { value } = target;
    setNewName(value);
  }

  function handleNewTask({ code }) {
    if (code === 'Enter') {
      apiCreate({ name: title });
      setTitle('');
    }
  }

  function handleSaveName(id, { code }) {
    const switchKeys = {
      Enter() {
        apiUpdate(id);
      },

      Escape() {
        setEditing('');
      },
    };

    if (switchKeys[code]) switchKeys[code]();
  }

  function handleRename({ target }) {
    const { id, innerText: name } = target;
    setNewName(name);
    setEditing(id);
  }

  function ListTasks() {
    return !tasks.length || tasks.map(({ _id: id, name }) => (
      <label htmlFor={id} key={name}>
        <input id={id} type="checkbox" />
        {
          (editing === id) ? (
            <input
              type="text"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus="on"
              value={newName}
              onChange={handleSetName}
              onKeyDown={(event) => handleSaveName(id, event)}
            />
          )
            : <span id={id} onDoubleClick={handleRename}>{name}</span>
        }
        <input type="button" value="🗑" onClick={() => handleDelete(id)} />
      </label>
    ));
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleSetTitle}
        onKeyPress={handleNewTask}
      />
      <ListTasks />
    </div>
  );
}

export default App;
