"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const languages = [
    'VietNamese',
    'English',
    'Tagalog',
    'Indonesian'
]

const ChangeLanguage = () => {

    const router = useRouter()
    const [language, setLanguage] = useState('VietNamese')

    const handleBack = () => {
        router.back()
    }

    const handleChooseLanguage = (l) => {
        setLanguage(l)

    }

    return (
        <div className="bg-[#0a100e] py-3.5 px-5 min-h-screen">
            <div className="flex items-center justify-between">
                <i onClick={handleBack} className="fa-solid fa-angle-left cursor-pointer"></i>
                <p className="text-[16px] text-white">Thay đổi ngôn ngữ</p>
                <p></p>
            </div>
            <div className="flex flex-col mt-[25px]">
                {
                    languages.map((l, index) => (
                        <div onClick={() => handleChooseLanguage(l)} key={index} className="flex items-center justify-between cursor-pointer pb-[12px] mb-[12px] border-b border-solid border-[#363636]">
                            <p className="text-[16px]">{l}</p>
                            {l === language && <i className="fa-regular fa-circle-check text-[18px] text-primary"></i>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChangeLanguage