import { useState } from 'react';

import type { DataType } from '@/types'
import ParamsTab from './ParamsTab';


/* body 请求参数 */

export interface ParamsTabProps {
    requestType?: string
    paramData?: string
    value?: DataType[]
    onChange?: (value: DataType[]) => void
}

export default function RequestParams(props: ParamsTabProps) {
    const { requestType, paramData, value, onChange } = props

    switch (requestType) {
        case "params":
            return (<div>
                <ParamsTab value={value} onChange={onChange} />
            </div>)
        case "body":
            return (<h1>body</h1>)
        case "headers":
            return (
                <h1>Headers</h1>
            )
        default:
            return null
    }
}
