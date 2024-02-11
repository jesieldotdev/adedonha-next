import React from 'react'

interface StepsProps {
    items: {
        id: number,
        content: React.JSX.Element
    }[]
    actualItem: number
}

const Steps = ({ items, actualItem }: StepsProps) => { 

    return (
        <>
        {
            items.find(item => item.id === actualItem)?.content
        }
        </>
    )
}

export default Steps
