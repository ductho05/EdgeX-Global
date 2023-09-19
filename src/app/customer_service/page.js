"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const services = [
    {
        title: 'EdgeX Telegram chính thức',
        icon: 'https://storage.edgex.video/boarding/2023-08-28/gfD9RZ6rVZruN2xLI3pCGofdHhutfOTj7ORXol88.png'
    },
    {
        title: 'EdgeX Telegram chính thức',
        icon: 'https://storage.edgex.video/boarding/2023-08-28/gfD9RZ6rVZruN2xLI3pCGofdHhutfOTj7ORXol88.png'
    },
    {
        title: 'EdgeX Telegram chính thức',
        icon: 'https://storage.edgex.video/boarding/2023-08-28/gfD9RZ6rVZruN2xLI3pCGofdHhutfOTj7ORXol88.png'
    },
    {
        title: 'EdgeX Telegram chính thức',
        icon: 'https://storage.edgex.video/boarding/2023-08-28/gfD9RZ6rVZruN2xLI3pCGofdHhutfOTj7ORXol88.png'
    },
    {
        title: 'EdgeX Telegram chính thức',
        icon: 'https://storage.edgex.video/boarding/2023-08-28/gfD9RZ6rVZruN2xLI3pCGofdHhutfOTj7ORXol88.png'
    },
]

const CustomerService = () => {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <div className="bg-[#0a100e] py-3.5 px-5 min-h-screen">
            <div className="flex items-center justify-between">
                <i onClick={handleBack} className="fa-solid fa-angle-left cursor-pointer"></i>
                <p className="text-[16px] text-white">Dịch vụ khách hàng</p>
                <p></p>
            </div>
            <div className="flex flex-col mt-[25px]">
                {
                    services.map((s, index) => (
                        <div key={index} className="flex items-center cursor-pointer p-[20px] mb-[20px] bg-colorCard rounded-[10px]">
                            <img className="w-[35px] h-[35px]" src={s.icon} alt='service Icon' />
                            <p className="ml-[13px] text-[16px]">{s.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomerService