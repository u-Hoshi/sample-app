import React from 'react';

type Props = {
  todoText: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

const InputTodo = (props: Props) => {
  const { todoText, onClick, onChange, disabled } = props;
  return (
    <div className='text-area'>
      <input
        placeholder='todoを入力'
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
