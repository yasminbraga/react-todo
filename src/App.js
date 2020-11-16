import React, {useState} from 'react';

import './styles.css';



function App() {

  const [data, setData] = useState([
    {task: 'Banhar', done: false},
    {task: 'Comer', done: false},
    {task: 'Dormir', done: false},
    {task: 'Jogar', done: false},
  ]);

  function deletTask(index) {
    const newState = [...data]
    newState.splice(index, 1)
    setData(newState)
  }

  function doneTask(ev, index) {
    const newState = [...data]
    newState[index].done = ev.target.checked
    setData(newState)
  }

  function addTask(ev) {
    if (ev.key === 'Enter') {
      setData([{task: ev.target.value, done: false}, ...data])
      ev.target.value = ""
    }
  }

  function editTask(ev, index) {
    const newState = [...data]
    const value = ev.target.value
    newState[index].task = value

    setData(newState)
  }

  function renderItem(data, index) {
    return (
      <li key={index.toString()}>
        <div>
          <input type="checkbox" onChange={ev => doneTask(ev, index)} defaultChecked={data.done}/>
          <input 
            type="text" 
            onChange={(ev) => editTask(ev, index)}
            value={data.task} 
            className="unstyled-input"/>
        </div>
  
        <div className="actions">
          <button onClick={() => deletTask(index)}>&times;</button>
        </div>
      </li>
    )
  }

  return (
    <>
      <h1 className="title" >ToDo</h1>
    <div className="todo-container">
      <input 
        type="text" 
        placeholder="Escreva sua tarefa e aperte enter para adicionar" 
        onKeyDown={addTask}
      />
      
      <ul>{data.map(renderItem)}</ul>
    </div>
    </>
  );
}

export default App;
