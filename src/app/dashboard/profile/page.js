"use client"
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.css'
import ProfileItem from '@/components/ProfileItem'
import { Button } from '@mui/material'
import Dialogsuccess from '@/components/DialogSuccess'

const cx = classNames.bind(styles)

const Profile = () => {

    const [code, setCode] = useState('ABC123XYZ')
    const [showDialog, setShowDialog] = useState(false)

    const handleCoppyCode = () => {
        navigator.clipboard.writeText(code)
        setShowDialog(true)
    }

    useEffect(() => {
        if (showDialog) {
            setTimeout(() => {
                setShowDialog(false)
            }, 2000)
        }

        return () => clearTimeout()
    }, [showDialog])

    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-[22px] text-white">Hồ sơ</p>
                <div className="text-[18px]">
                    <i class="fa-regular fa-bell mr-[10px] cursor-pointer"></i>
                    <i class="fa-solid fa-globe cursor-pointer"></i>
                </div>
            </div>
            <div className={`${cx('wallet')} mt-5 bg-wallet rounded-[10px] pt-[25px] px-[18px] pb-[21px] pl-[18px]`}>
                <div className="flex justify-between relative">
                    <div className="flex flex-col z-10">
                        <div className="flex mb-[8px]">
                            <p className="text-lg text-white leading-none">0123456789</p>
                            <img src='/Logo.png' className="w-5 h-5 ml-[5px]" />
                        </div>
                        <div className="flex flex-col text-[16px]">
                            <p>abc@gmail.com</p>
                            <p>
                                <span className="code">Mã giới thiệu: {code}</span>
                                <i
                                    class="fa-regular fa-copy ml-[10px] cursor-pointer coppy"
                                    onClick={handleCoppyCode}
                                />
                            </p>
                            <p>Hội viên: Trial</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-user-tie text-[23px] p-6 text-primary mr-2.5 bg-[rgba(40,48,57,.5)] rounded-full z-10 absolute laptop-small:right-[-20px] desktop:right-0 right-0"></i>
                </div>
                <div className="flex justify-between mt-[20px]">
                    <div className="z-10 w-[49%] h-[46px] mt-[10px] bg-[rgba(7,40,23,.6)] text-white rounded-[6px] text-[14px] capitalize cursor-pointer flex items-center justify-center">
                        <i class="fa-solid fa-users"></i>
                        <p className="ml-[5px] normal-case">Đội</p>
                    </div>
                    <div className="z-10 w-[49%] h-[46px] mt-[10px] bg-[rgba(7,40,23,.6)] text-white rounded-[6px] text-[14px] capitalize cursor-pointer flex items-center justify-center">
                        <i class="fa-solid fa-wallet"></i>
                        <p className="ml-[5px] normal-case">Tài sản của tôi</p>
                    </div>
                </div>
            </div>
            <div className="mt-[20px]">
                <ProfileItem title="Hội viên" />
                <ProfileItem title="Chương trình trưởng nhóm" />
                <ProfileItem title="Nhiệm vụ đạt được" />
                <ProfileItem title="Hội viên" />
                <ProfileItem title="Hội viên" />
                <ProfileItem title="Hội viên" />
                <ProfileItem title="Hội viên" />
                <ProfileItem title="Hội viên" />
            </div>
            <Button variant="contained" className="w-full h-[46px] bg-primary hover:bg-primary mt-[40px] normal-case text-[15px] font-[400]">Đăng xuất</Button>
            {showDialog && <Dialogsuccess notice="Sao chép thành công!" />}
        </>
    )
}

export default Profile