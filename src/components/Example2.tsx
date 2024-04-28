import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from '@heroicons/react/20/solid'
import { Radio } from "antd"
import { useState, Fragment } from 'react'
const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const plans = ['Statup', 'Business', 'Enterprise']

export default function Example2() {
    const [plan, setPlan] = useState(plans[0])
    return (
        <>
            <Radio.Group >
                <Radio value={"default"}>默认</Radio>
                <Radio value={'compact'}>紧凑</Radio>
            </Radio.Group>
        </>
    )
}