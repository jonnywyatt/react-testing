import { useState } from 'react';

export const Form = ({ onFormSubmitted }) => {
  const [inputValue, setInputValue] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    onFormSubmitted(inputValue);
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor={'name'}>Enter your name</label>
      <input id='name' type="text" value={inputValue} onChange={e => setInputValue(e.currentTarget.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}
