"use client"
import React from 'react'
import Default from '@/components/layouts/Default'
import Tabs from '@/components/Tabs'
import Phase1 from './components/Phase1'
import Phase2 from './components/Phase2'
import Phase3 from './components/Phase3'

const tabs = ["Phase1", "Phase2", "Phase3"]
const components = [<Phase1 />, <Phase2 />, <Phase3 />]

function LeaderShipProgram() {
    return (
        <Default title={'Chương trình trưởng nhóm'}>
            <Tabs tabs={tabs} components={components} />
        </Default>
    )
}

export default LeaderShipProgram