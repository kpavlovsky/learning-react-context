import './App.css';

import React from 'react';
import NewModelForm from "./NewModelForm";
import ModelList from "./ModelList";

function App({test1,test2, ...rest}) {
    return (
        <div className="container">
            <h1>Django Models Generator</h1>
            {test1}
            {test2}

            <NewModelForm {...rest}/>
            <ModelList/>
        </div>
    );
}

export default App;
