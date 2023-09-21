"use client"
import React from 'react'
import OneGift from './components/OneGift'
import GiftEveryWeek from './components/GiftEveryWeek'
import Tabs from '@/components/Tabs'
import Default from '@/components/layouts/Default'

const tabs = ['Một lần thưởng', 'Quà tặng hàng tuần']

const components = [<OneGift />, <GiftEveryWeek />]

function Mission() {

    return (
        <Default title={'Nhiệm vụ đạt được'}>
            <Tabs tabs={tabs} components={components} />
        </Default>
    )
}

export default Mission