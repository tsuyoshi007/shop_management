import { Helmet } from 'react-helmet'
import React from 'react'

interface HelmetProps {
    title: string
}

const TabTitle: React.FC<HelmetProps> = (props)=> {
    const { title } = props
    return (
        <Helmet>
            <title>{`${title} | Shop Name `}</title>
            {/* will update later */}
        </Helmet>
    )
}

export default TabTitle