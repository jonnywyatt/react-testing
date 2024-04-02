import { ShowHide } from './components/show-hide';
import { Form } from './components/form';
import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  return (
    <div className="app">
      <ShowHide>
        <p>Hi there!</p>
      </ShowHide>
      <hr />
      {message && <p>{message}</p>}
      <Form onFormSubmitted={(value) => setMessage(value)} />
    </div>
  );
}

export default App;
