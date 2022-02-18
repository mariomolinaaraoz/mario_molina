import React from 'react'

export const Individualdata = ({individualdata,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualdata.name}</th>
            <th>{individualdata.age}</th>
            <th>{individualdata.designation}</th>
            <th>{individualdata.salary}</th>
        </tr>
    )
}