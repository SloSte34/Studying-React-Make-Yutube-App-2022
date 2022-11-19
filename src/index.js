import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const root = ReactDOM.createRoot(document.getElementById('root'));
const youtube = new Youtube(YOUTUBE_API_KEY);
//()안에 들어가는 것은 Key이다.

root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
