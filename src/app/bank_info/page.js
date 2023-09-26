"use client"
import Default from '@/components/layouts/Default'
import Tabs from '@/components/Tabs'
import React from 'react'
import Bank from './components/Bank'
import Wallet from './components/Wallet'

function BankInfo() {
    return (
        <Default title={"Thông tin ngân hàng/Ví"}>
            <Tabs tabs={["Ngân hàng", "Ví (USDT)"]} components={[<Bank />, <Wallet />]} />
        </Default>
    )
}

export default BankInfo