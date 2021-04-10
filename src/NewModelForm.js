import React, {useState} from 'react';

import {useModels} from "./ModelsProvider";

export default function NewModelForm(props) {
    const {test3} = props;
    const [model, setModel] = useState('');
    const [error, setError] = useState(false);
    const {models, addModel} = useModels();

    const submit = e => {
        e.preventDefault();
        if (models.find(i => i.name === model)) {
            setError(true);
            return;
        }
        addModel(model);
        setModel('');
        setError(false);
    }
    return (
        <form onSubmit={submit}>
            {error && <h1>ERROR</h1>}
            <input
                type="text"
                value={model}
                placeholder="Call your model something"
                onChange={e => setModel(e.target.value)}
                required
            />
            <button>Add</button>
        </form>
    )
}