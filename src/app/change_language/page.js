"use client"
import React, { useState } from 'react'
import Default from '@/components/layouts/Default'

const languages = [
    'VietNamese',
    'English',
    'Tagalog',
    'Indonesian'
]

const ChangeLanguage = () => {

    const [language, setLanguage] = useState('VietNamese')

    const handleChooseLanguage = (l) => {
        setLanguage(l)

    }

    return (
        <Default title={'Thay đổi ngôn ngữ'}>
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
        </Default>
    )
}

export default ChangeLanguage