import React from "react";

const ModelsContext = React.createContext(
    {
        models: [],
        fn: (model) => {
            this.models.push(model)
        }
    }
);
export default ModelsContext;