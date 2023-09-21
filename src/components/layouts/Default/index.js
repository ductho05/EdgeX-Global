"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Default({ title, button, children }) {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <div className="bg-[#0a100e] py-3.5 px-5 min-h-screen">
            <div className="flex items-center justify-between mb-[20px]">
                <i onClick={handleBack} className="fa-solid fa-angle-left cursor-pointer"></i>
                <p className="text-[16px] text-white">{title}</p>
                {button ? button : <p></p>}
            </div>

            {children}
        </div>
    )
}

export default Default