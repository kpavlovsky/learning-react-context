import React from "react";

const ModelsContext = React.createContext(
    {
        models: [],
        addModel: (model) => {
            this.models.push(model)
        }
    }
);
export default ModelsContext;