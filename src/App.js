import './App.css';
import InputSection from "./components/inputs";
import OutputSection from "./components/outputs";
import Header from "./components/header";
import React, {useState} from 'react';

import ModelsContext from "./context/models-context";


function App() {
    const [models, setModels] = useState();
    const value = {models, setModels};
    return (
        <ModelsContext.Provider value={value}>
            <div className="App">
                <Header/>
                <InputSection/>
                <OutputSection/>
            </div>
        </ModelsContext.Provider>
    );
}

export default App;
