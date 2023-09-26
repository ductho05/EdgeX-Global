"use client"
import React, { useState, useEffect } from 'react'
import ProfileItem from '@/components/ProfileItem'
import { Button } from '@mui/material'
import Dialogsuccess from '@/components/DialogSuccess'
import Wallet from '@/components/wallet'
import Link from 'next/link'

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
                    <i className="fa-regular fa-bell mr-[10px] cursor-pointer"></i>
                    <i className="fa-solid fa-globe cursor-pointer"></i>
                </div>
            </div>
            <Wallet>
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
                                    className="fa-regular fa-copy ml-[10px] cursor-pointer coppy"
                                    onClick={handleCoppyCode}
                                />
                            </p>
                            <p>Hội viên: Trial</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-user-tie text-[23px] p-6 text-primary mr-2.5 bg-[rgba(40,48,57,.5)] rounded-full z-10 absolute laptop-small:right-[-20px] desktop:right-0 right-0"></i>
                </div>
                <div className="flex justify-between mt-[20px]">
                    <Link href="/my_team" className="z-10 w-[49%] h-[46px] mt-[10px] bg-[rgba(7,40,23,.6)] text-white rounded-[6px] text-[14px] capitalize cursor-pointer flex items-center justify-center">
                        <i className="fa-solid fa-users"></i>
                        <p className="ml-[5px] normal-case">Đội</p>
                    </Link>
                    <div className="z-10 w-[49%] h-[46px] mt-[10px] bg-[rgba(7,40,23,.6)] text-white rounded-[6px] text-[14px] capitalize cursor-pointer flex items-center justify-center">
                        <i className="fa-solid fa-wallet"></i>
                        <p className="ml-[5px] normal-case">Tài sản của tôi</p>
                    </div>
                </div>
            </Wallet>
            <div className="mt-[20px]">
                <ProfileItem title="Hội viên" link="/membership" />
                <ProfileItem title="Chương trình trưởng nhóm" link="/leadership_program" />
                <ProfileItem title="Nhiệm vụ đạt được" link="/mission" />
                <ProfileItem title="Chi tiết doanh thu" link="/report" />
                <ProfileItem title="Cài đặt thông tin" link="/profile_setting" />
                <ProfileItem title="Cập nhật mật khẩu" link="/update_password" />
                <ProfileItem title="Thông tin ngân hàng/Ví" link="/bank_info" />
                <ProfileItem title="Dịch vụ khách hàng" link="/customer_service" />
            </div>
            <Button variant="contained" className="w-full h-[46px] bg-primary hover:bg-primary mt-[40px] normal-case text-[15px] font-[400]">Đăng xuất</Button>
            {showDialog && <Dialogsuccess notice="Sao chép thành công!" />}
        </>
    )
}

export default Profile