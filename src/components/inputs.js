import React, {useContext} from "react";
import ModelsContext from "../context/models-context";
import {useForm} from "react-hook-form";


function ModelItem(props) {
    return (<div>
        <h3>{props.name}</h3>
    </div>);
}

function ModelsListOld(models, addModel) {
    return (
        <ModelsContext.Consumer>
            {({models, addModel}) => {
                const listItems = models.map((model) => <ModelItem name={model.name}></ModelItem>);
                return (<div>{listItems}</div>);
            }}
        </ModelsContext.Consumer>
    );
}

function ModelsList(props) {

    if (!props.models?.length) {return (<div/>);}
    const listItems = props.models.map((model) => <ModelItem name={model.name}></ModelItem>);
    return (<div>{listItems}</div>);
}


function AddModel(props) {
    const {register, handleSubmit} = useForm();
    console.log(props);
    const onSubmit = data => {
        props.addModel(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Model Name
                <input {...register("name")} />
            </label>
            <input type="submit"/>
        </form>
    );
}

function InputSection(props) {
    return (<div>
        <h2>Input section</h2>
        <ModelsContext.Consumer>
            {({models, addModel})=>(<ModelsList models={models}/>)}
        </ModelsContext.Consumer>
        <ModelsContext.Consumer>
            {({models, addModel})=>(<AddModel addModel={addModel}/>)}
        </ModelsContext.Consumer>
    </div>);
}


export default InputSection;