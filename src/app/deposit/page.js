"use client"
import React from 'react'
import P2P from './componets/P2P'
import Flash from './componets/Flash'
import Coins from './componets/Coins'
import Tabs from '@/components/Tabs'
import Default from '@/components/layouts/Default'

const tabs = ["P2P", "Nhanh", "Tiền điện tử"]
const components = [<P2P />, <Flash />, <Coins />]

const Deposit = () => {

    return (
        <Default title={'Nạp'} button={<i className="fa-regular fa-note-sticky fa-lg cursor-pointer"></i>}>
            <Tabs tabs={tabs} components={components} />
        </Default>
    )
}

export default Deposit