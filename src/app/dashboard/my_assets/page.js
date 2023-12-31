import React from 'react'
import AssetsItem from '@/components/AssetsItem'
import Wallet from '@/components/wallet'
import Link from 'next/link'

const MyAssets = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-[22px] text-white">Tài sản của tôi</p>
                <i className="fa-regular fa-note-sticky fa-lg"></i>
            </div>
            <Wallet>
                <div className="flex flex-col">
                    <p className="z-10 text-[16px]">Tổng tài sản</p>
                    <p className="z-10 text-[24px]">0 USDT</p>
                </div>
                <div className="flex mt-[10px]">
                    <p className="text-[18px] z-10">Thu nhập hôm nay + 0EDX</p>
                </div>
                <div className="flex mobile:flex-col tablet:flex-row laptop-small:flex-col justify-between">
                    <div className="flex flex-col mt-[10px]">
                        <p className="z-10 text-[16px]">Đạt được từ video</p>
                        <p className="z-10 text-[17px]">0 EDX</p>
                    </div>
                    <div className="flex flex-col mt-[10px]">
                        <p className="z-10 text-[16px]">Hoa hồng trực tiếp</p>
                        <p className="z-10 text-[17px]">0 EDX</p>
                    </div>
                    <div className="flex flex-col mt-[10px]">
                        <p className="z-10 text-[16px]">Nhiệm vụ đạt được</p>
                        <p className="z-10 text-[17px]">0 EDX</p>
                    </div>
                </div>
            </Wallet>
            <div className="flex justify-between items-center mt-[20px] mb-[15px] w-full">
                <Link href="/deposit" className="w-[49%] h-[46px] mt-[10px] bg-background-black text-white rounded-[6px] text-[14px] capitalize cursor-pointer flex items-center justify-center">
                    <i className="fa-solid fa-download"></i>
                    <p className="ml-[5px]">Nạp</p>
                </Link>
                <Link href="/withdraw" className="w-[49%] h-[46px] mt-[10px] bg-background-black text-white rounded-[6px] text-[14px] capitalize cursor-pointer flex items-center justify-center">
                    <i className="fa-solid fa-upload"></i>
                    <p className="ml-[5px]">Rút</p>
                </Link>
            </div>
            <AssetsItem />
            <AssetsItem />
            <AssetsItem />
            <AssetsItem />
        </>
    )
}

export default MyAssets