import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

function Tabs({ tabs, components }) {

    const [currentTab, setCurrentTab] = useState(0)
    const [wTab, setWTab] = useState(0)

    useEffect(() => {
        const lengthTab = tabs.length
        const width = Math.round(100 / lengthTab - 1)
        setWTab(width)
    }, [tabs])

    const handleTab = (index) => {
        setCurrentTab(index)
    }

    var classItem = `border border-solid border-primary normal-case h-[40px] font-[400] leading-4`
    var active = "bg-[rgba(76,175,80,.5)] hover:bg-[rgba(76,175,80,.5)]"
    var normal = "hover:bg-[#0a100e]"

    return (
        <>
            <div className="flex w-[99%] items-center justify-between mt-[15px] mb-[15px]">
                {
                    tabs.map((tab, index) => (
                        <Button
                            style={{
                                width: `${wTab}%`
                            }}
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
            <div className="mt-[30px] w-[99%]">
                {
                    components.map((Component, index) => (
                        <div key={index} className={currentTab == index ? "visible" : "hidden"}>
                            {Component}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Tabs