import React, {useContext} from "react";
import ModelsContext from "../context/models-context";

function ModelItem(props) {
    return (<div><h3>{props.name}</h3></div>);
}

function ModelsList(props) {
    const listItems = props.models.map((model) => <ModelItem name={model.name}></ModelItem>);
    return (<div>{listItems}</div>);
}

function InputSection(props) {
    const {models, setModels} = useContext(ModelsContext);
    return (<div>
        <h2>Input section</h2>
        <ModelsList models={models}></ModelsList>
    </div>);
}

export default InputSection;