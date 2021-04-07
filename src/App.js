import './App.css';
import InputSection from "./components/inputs";
import OutputSection from "./components/outputs";
import Header from "./components/header";
import React from 'react';

import ModelsContext from "./context/models-context";


function App() {
    const state = {
        models: [],
        fn: (model) => {
            this.models.push(model)
        }
    }
    return (
        <ModelsContext.Provider value={state}>
            <div className="App">
                <Header/>
                <InputSection/>
                <OutputSection/>
            </div>
        </ModelsContext.Provider>
    );
}

export default App;
