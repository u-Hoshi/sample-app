import React, { useState } from 'react';
import InputTodo from './components/InputTodo';
import IncompleteTodo from './components/IncompleteTodo';
import CompleteTodo from './components/CompleteTodo';

const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const onChangeTextTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    console.log(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);

    const newTodos2 = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos2);
    setIncompleteTodos(newTodos);
  };

  const backTodo = (index: number) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);

    const newTodos2 = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newTodos);
    setIncompleteTodos(newTodos2);
  };

  return (
    <div className='App'>
      <InputTodo
        todoText={todoText}
        onClick={addTodo}
        onChange={onChangeTextTodo}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>5個上になりました</p>}
      <IncompleteTodo
        // todo={todoText}
        incompleteTodos={incompleteTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <CompleteTodo
        // todo={todoText}
        completeTodos={completeTodos}
        backTodo={backTodo}
        // incompleteTodos={incompleteTodos}
      />
    </div>
  );
};

export default App;
