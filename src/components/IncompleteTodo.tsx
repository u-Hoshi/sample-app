import React from 'react';

type Props = {
  incompleteTodos: string[];
  completeTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

const IncompleteTodo = (props: Props) => {
  const { incompleteTodos, completeTodo, deleteTodo } = props;
  return (
    <div className='incomplete-area'>
      <p>未完了のtodo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className='list-row'>
              <li>{todo}</li>
              <button onClick={() => completeTodo(index)}>完了</button>
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodo;
