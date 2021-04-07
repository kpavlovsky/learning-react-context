import React from 'react';

import {useModels} from './ModelsProvider';

export default function Model({name}) {
    return (
        <tr>
            <td>
                {name}
            </td>
        </tr>
    )
}