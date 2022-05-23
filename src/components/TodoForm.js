import React, {useState} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e =>{
      e.setInput(e.target.value);
  };


  const handleSubmit= e =>{
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });

      setInput(''); //con questo riazzero la cella dove inserisco le cose da fare
  };
  
    return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Aggiungi una cosa da fare" 
        value={input} name="text"
        className = "todo-input"
        onChange ={handleChange}
        />
        <button className="add-todo">
            Aggiungi alla lista
        </button>
    </form>
  )
}

export default TodoForm