"use client"
import Wallet from "@/components/wallet"
import Invite from "@/components/invite"
import MenuItem from "@/components/MenuItem"
import Link from "next/link"
import { useEffect, useState } from "react"
import Dialogs from "@/components/Dialog"
import Dialogsuccess from "@/components/DialogSuccess"
import { Button } from "@mui/material"

const menus = [
    {
        name: 'Nhiệm vụ đạt được',
        image: 'https://h5.edgexads.co/assets/icon_1.9eeff19d.svg'
    },
    {
        name: 'Hướng dẫn',
        image: 'https://h5.edgexads.co/assets/icon_2.594e02b3.svg'
    },
    {
        name: 'Đặt cọc',
        image: 'https://h5.edgexads.co/assets/icon_3.dc2a5945.svg'
    },
    {
        name: 'Thông tin mới nhất',
        image: 'https://h5.edgexads.co/assets/icon_4.6855a54e.svg'
    },
    {
        name: 'Nhóm làm việc',
        image: 'https://h5.edgexads.co/assets/icon_5.1c35df49.svg'
    },
    {
        name: 'Quảng cáo',
        image: 'https://h5.edgexads.co/assets/icon_6.935425ea.svg'
    },
    {
        name: 'CIO',
        image: 'https://h5.edgexads.co/assets/icon_7.80429442.svg'
    },
    {
        name: 'Chương trình trưởng nhóm',
        image: 'https://h5.edgexads.co/assets/icon_8.80167440.svg'
    },
]

const shares = [
    {
        icon: <i className="fa-brands fa-twitter"></i>,
        title: 'Chia sẻ trên Twitter'
    },
    {
        icon: <i className="fa-brands fa-facebook"></i>,
        title: 'Chia sẻ trên Facebook'
    },
    {
        icon: <i className="fa-brands fa-telegram"></i>,
        title: 'Chia sẻ trên Telegram'
    },
    {
        icon: <i className="fa-brands fa-whatsapp"></i>,
        title: 'Chia sẻ trên WhatsApp'
    },
]

const Dashboard = () => {

    const [open, setOpen] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showDialogShare, setShowDialogShare] = useState(false)
    const [url, setUrl] = useState('http://localhost:3000/register?code=ABCDEF')

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setShowSuccess(true)
    }

    const handleShare = () => {
        setShowDialogShare(true)
    }

    useEffect(() => {
        if (showSuccess) {
            setTimeout(() => {
                setShowSuccess(false)
            }, 2000)
        }

        return () => clearTimeout()

    }, [showSuccess])

    return (
        <>
            <div className="flex justify-between items-center mb-3">
                <img src='/Logo.png' className="w-16 h-9" />
                <div className="flex items-center">
                    <Link href='/notification'>
                        <i className="fa-regular fa-bell fa-lg mx-1.5 cursor-pointer"></i>
                    </Link>
                    <Link href='/change_language'>
                        <i className="fa-solid fa-globe fa-lg mx-1.5 cursor-pointer"></i>
                    </Link>
                    <Link href='/customer_service'>
                        <i className="fa-regular fa-user fa-lg ml-1.5 cursor-pointer"></i>
                    </Link>
                </div>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-user-tie p-4 text-primary mr-2.5 bg-[#283039] rounded-full"></i>
                <div>
                    <div className="flex">
                        <p className="text-lg text-primary leading-none">0123456789</p>
                        <img src='/Logo.png' className="w-5 h-5 ml-[5px]" />
                    </div>
                    <p className="text-sm mt-1">Chào mừng đến với Edgex</p>
                </div>
            </div>
            <Wallet />
            <Invite content1="0" content2="Tổng số thành viên giới thiệu" button={{ name: 'Mời', action: 'dialog', setOpen: setOpen }} />
            <div className="mt-[15px] flex gap-[10px] flex-wrap">
                {
                    menus.map((item, index) => (
                        <MenuItem menu={item} key={index} />
                    ))
                }
            </div>
            <Invite content1="Thông tin mới nhất" content2="EdgeX Structure" button={{ name: 'Thêm' }} />
            <Invite content1="Đặt 15 ngày" content3={[
                {
                    label: 'Lợi nhuận',
                    value: '5.00%'
                },
                {
                    label: '15 Ngày',
                    value: 'Thời gian khóa'
                },
            ]} button={{ name: 'Đặt cọc' }} />

            <Dialogs open={open} close={setOpen} >
                <div className="flex flex-col justify-center items-center pb-[20px]">
                    <p className="text-[25px] mb-[4px]">Mã QR của bạn</p>
                    <p className="text-[15px] mb-[16px] capitalize">Quét mã QR để tham gia và nhận thưởng</p>
                    <img src='/qr.png' alt='QR Code' className="w-[200px] h-[200px]" />
                    <div className="flex mt-[30px] mb-[20px] w-full">
                        <div className="flex items-center justify-center h-[40px] flex-1 border border-solid border-primary rounded-[4px]">{url}</div>
                        <div onClick={handleCopy} className="w-[40px] h-[40px] ml-[10px] bg-primary rounded-[6px] text-white flex items-center justify-center cursor-pointer">
                            <i className="fa-regular fa-copy"></i>
                        </div>
                    </div>
                    <Button onClick={handleShare} variant='contained' className="w-full h-[42px] bg-primary hover:bg-primary normal-case text-[15px] font-[400]">Nhấn để chia sẻ</Button>
                </div>
            </Dialogs>
            {showSuccess && <Dialogsuccess notice='Sao chép thành công' />}
            <Dialogs open={showDialogShare} close={setShowDialogShare}>
                <div className="p-[20px] flex gap-[10px] flex-wrap">
                    {
                        shares.map((share, index) => (
                            <div key={index} className="flex flex-shrink-[4] flex-grow-[4] basis-1/3 items-center rounded-[6px] bg-primary justify-center py-[10px] px-[20px] cursor-pointer">
                                {share.icon}
                                <p className="ml-[10px]">{share.title}</p>
                            </div>
                        ))
                    }
                </div>
            </Dialogs>
        </>
    )
}

export default Dashboard