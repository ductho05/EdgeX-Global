"use client"
import { Button } from '@mui/material'
import React, { useState } from 'react'
import P2P from './componets/P2P'
import Flash from './componets/Flash'
import Coins from './componets/Coins'
import { useRouter } from 'next/navigation'

const tabs = ["P2P", "Nhanh", "Tiền điện tử"]
const components = [<P2P />, <Flash />, <Coins />]

const Deposit = () => {

    const [currentTab, setCurrentTab] = useState(0)
    const router = useRouter()

    const handleTab = (index) => {
        setCurrentTab(index)
    }

    const handleBack = () => {
        router.back()
    }

    const classItem = "border border-solid border-primary normal-case w-[32%] h-[40px] font-[400] leading-4"
    const active = "bg-[rgba(76,175,80,.5)] hover:bg-[rgba(76,175,80,.5)]"
    const normal = "hover:bg-[#0a100e]"

    return (
        <div className="bg-[#0a100e] py-3.5 px-5 min-h-screen">
            <div className="flex items-center justify-between">
                <i onClick={handleBack} className="fa-solid fa-angle-left cursor-pointer"></i>
                <p className="text-[18px] text-white">Nạp</p>
                <i className="fa-regular fa-note-sticky fa-lg cursor-pointer"></i>
            </div>
            <div className="flex items-center justify-between mt-[15px] mb-[15px]">
                {
                    tabs.map((tab, index) => (
                        <Button
                            key={index}
                            onClick={() => handleTab(index)}
                            variant="contained"
                            className={index === currentTab ? `${classItem} ${active}` : `${classItem} ${normal}`}
                        >
                            {tab}
                        </Button>
                    ))
                }
            </div>
            <div className="">
                {
                    components.map((Component, index) => (
                        <div key={index} className={currentTab == index ? "visible" : "hidden"}>
                            {Component}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Deposit