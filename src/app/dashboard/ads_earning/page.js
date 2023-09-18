"use client"
import React from 'react'
import { Button } from '@mui/material'

const AdsEarning = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-[22px] text-white">Đạt được từ video</p>
                <i className="fa-regular fa-note-sticky fa-lg"></i>
            </div>
            <div className="mt-[20px]">
                <img src='/bg-logo.jpg' alt='Logo' className="max-h-[350px] rounded-[10px] object-cover w-full" />
            </div>
            <div className="mt-[25px] p-[20px] rounded-[10px] bg-ads flex flex-col items-center">
                <div className="flex items-center">
                    <div className="flex items-center justify-center relative">
                        <div className="w-[65px] h-[65px] bg-[#D2ED1A] rounded-[100%] blur-[10.5px]"></div>
                        <img src='/telegram.png' alt='Telegram' className="w-[55px] h-[55px] absolute" />
                    </div>
                    <p className="ml-[10px] font-bold text-center">Tham gia nhóm Telegram của chúng tôi</p>
                </div>
                <div className="w-[112px] h-[30px] mt-[10px] bg-[#D2ED1A] rounded-[6px] text-[14px] capitalize font-[600] text-black flex items-center justify-center">
                    <i className="fa-solid fa-coins" />
                    <p className="ml-[5px]">Kiếm EDX</p>
                </div>
                <Button variant='contained' className="w-full mt-[20px] bg-[#072817] hover:bg-[#072817] normal-case text-[16px]">Bấm vào đây</Button>
            </div>
            <div className="py-[20px] px-[30px] bg-[url(https://h5.edgexads.co/assets/subscribe.2433b4a1.png)] bg-no-repeat bg-center bg-cover mt-[25px] rounded-[10px]">
                <p className="text-[16px] mb-[8px]">Tài khoản (EDX)</p>
                <p className="text-[25px] mb-[10px]">0 EDX</p>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[16px]">Video đã xem</p>
                        <p className="text-[18px]">0</p>
                    </div>

                    <div>
                        <p className="text-[16px]">Video còn lại</p>
                        <p className="text-[18px]">0</p>
                    </div>
                </div>
                <Button variant='contained' className="w-full mt-[20px] bg-[rgba(7,40,23,.6)] hover:bg-[rgba(7,40,23,.6)] normal-case text-[14px] font-[400]">Bắt đầu xem</Button>
            </div>
        </>
    )
}

export default AdsEarning