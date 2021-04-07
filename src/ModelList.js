import React from 'react';
import Model from './Model'
import { useModels } from './ModelsProvider'

export default function ModelList(){
    const {models} = useModels();
    return (
        <table>
            <tbody>
            {
                models.map((model, i)=> <Model key={i} {...model}/>)
            }
            </tbody>
        </table>

    )

}