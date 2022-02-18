import React from 'react'
import {Individualdata} from './Individualdata'

export const Data = ({data}) => {
    return data.map((individualdata,index)=>(
        <Individualdata individualdata={individualdata} key={index+1}
            index={index+1}
        />
    ))
}