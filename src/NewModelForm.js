import React, {useState} from 'react';

import {useModels} from "./ModelsProvider";

export default function NewModelForm(props) {
    const {test3} = props;
    const [model, setModel] = useState('');
    const { models, addModel } = useModels();

    const submit = e => {
        e.preventDefault();
        addModel(model);
        setModel('');
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={model}
                placeholder="Call your model something"
                onChange={e=>setModel(e.target.value)}
                required
            />

            <button>Add</button>
            {test3}
        </form>
    )
}