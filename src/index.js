import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModelProvider from "./ModelsProvider";
import NewModelForm from "./NewModelForm";
ReactDOM.render(
    <React.StrictMode>
        <ModelProvider>
            <App  test1='blabla' test2='tratata'  test3='test3'/>
        </ModelProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
