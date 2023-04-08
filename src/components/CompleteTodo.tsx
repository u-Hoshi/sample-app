import React from 'react';

type Props = {
  completeTodos: string[];
  backTodo: (index: number) => void;
};

const CompleteTodo = (props: Props) => {
  const { completeTodos, backTodo } = props;
  return (
    <div className='complete-area'>
      <p>完了したもの</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className='list-row'>
              <li>{todo}</li>
              <button onClick={() => backTodo(index)}>戻る</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodo;
