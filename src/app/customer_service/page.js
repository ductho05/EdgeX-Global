"use client"
import React from 'react'
import Default from '@/components/layouts/Default'

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

    return (
        <Default title={'Dịch vụ khách hàng'}>
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
        </Default>
    )
}

export default CustomerService