import React, {createContext, useState, useContext} from 'react';

const ModelContext = createContext();

export const useModels = () => useContext(ModelContext);

export default function ModelProvider({children}) {
    const [models, setModels] = useState([]);

    const addModel = modelName => setModels([
        ...models, {
            name: modelName
        }
    ]);

    return (
        <ModelContext.Provider value={{models, addModel}}>
            {children}
        </ModelContext.Provider>
    );
}
