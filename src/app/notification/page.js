"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import NoData from '@/components/NoData'

const Notification = () => {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <div className="bg-[#0a100e] py-3.5 px-5 min-h-screen">
            <div className="flex items-center justify-between">
                <i onClick={handleBack} className="fa-solid fa-angle-left cursor-pointer"></i>
                <p className="text-[18px] text-white">Thông báo</p>
                <p></p>
            </div>
            <div className="flex justify-center mt-[20vh]">
                <NoData />
            </div>
        </div>
    )
}

export default Notification