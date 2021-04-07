import React from "react";

const ModelsContext = React.createContext(
    {
        models: [],
        setModels: () => {
        }
    }
);
export default ModelsContext;