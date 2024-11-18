import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
ReactDOM.render(
    <Workshop />,
    document.getElementById('root')
  );
