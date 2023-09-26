"use client"
import Default from '@/components/layouts/Default'
import Tabs from '@/components/Tabs'
import React from 'react'
import Coins from './componets/Coins'
import Flash from './componets/Flash'
import P2P from './componets/P2P'

const tabs = ["Nhanh", "P2P", "Tiền điện tử"]
const components = [<Flash />, <P2P />, <Coins />]

function WithDraw() {
    return (
        <Default title="Rút" button={<i className="fa-regular fa-note-sticky fa-lg cursor-pointer"></i>}>
            <Tabs tabs={tabs} components={components} />
        </Default>
    )
}

export default WithDraw