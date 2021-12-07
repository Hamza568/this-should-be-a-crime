import logo from './logo.svg';
import './App.css';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css'
import React, { useState } from 'react';
import './index.css'

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('DD-MM-YYYY') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('DD-MM-YYYY') : 'None'}
      </div>
    </div>
  );
};

export default App;
