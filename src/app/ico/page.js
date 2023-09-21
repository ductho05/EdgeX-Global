"use client"
import CioItem from '@/components/CioItem'
import Default from '@/components/layouts/Default'
import Progress from '@/components/Progress'
import Wallet from '@/components/wallet'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Ico() {
    return (
        <Default title={'ICO'} button={<Link href='report_ico'><i className="fa-regular fa-note-sticky fa-lg cursor-pointer"></i></Link>}>
            <Wallet>
                <div className="flex flex-col">
                    <p className="z-10 mb-[6px]">Yêu cầu hạng Diamond</p>
                    <p className="z-10 mb-[6px] text-[24px]">Bán Hàng Riêng</p>
                    <p className="z-10 mb-[6px]">1EDX = 0.01USDT</p>
                    <p className="z-10 mb-[6px]">Số dư: 16000000 EDX</p>
                    <Progress value={34000000} totalValue={50000000} />
                    <div className='flex flex-col mt-[20px]'>
                        <p className='z-10 text-[20px]'>5000 USDT</p>
                        <p className='z-10 text-[16px]'>Thời gian còn lại: 152 Ngày</p>
                        <Button variant='contained' className='z-10 mt-[20px] bg-[rgba(7,40,23,.6)] hover:bg-[rgba(7,40,23,.6)]'>Mua ngay</Button>
                    </div>
                </div>
            </Wallet>
            <CioItem />
            <CioItem />
            <CioItem />
            <CioItem />
            <CioItem />
        </Default>
    )
}

export default Ico