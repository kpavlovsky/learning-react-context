import './App.css';

import React from 'react';
import NewModelForm from "./NewModelForm";
import ModelList from "./ModelList";

function App() {
    return (
        <div className="container">
            <h1>Django Models Generator</h1>
            <NewModelForm/>
            <ModelList/>
        </div>
    );
}

export default App;
