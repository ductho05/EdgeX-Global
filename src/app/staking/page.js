"use client"
import React, { useState } from 'react'
import Wallet from '@/components/wallet'
import Progress from '@/components/Progress'
import NoData from '@/components/NoData'
import Link from 'next/link'
import Default from '@/components/layouts/Default'

function Staking() {

    const [stakingAmount, setStakingAmount] = useState(0)

    return (
        <Default title={'Đặt cọc'}>
            <Wallet>
                <div className="flex flex-col">
                    <p className="z-10 text-[17px] mt-[10px]">Số tiền đặt cược hiện tại</p>
                    <Progress />
                    <p className="z-10 text-[22px] mt-[10px]">{`${stakingAmount.toFixed(4)}/${stakingAmount.toFixed(4)} USDT`}</p>
                    <Progress />
                    <p className="z-10 text-[22px] mt-[10px]">{`${stakingAmount.toFixed(4)}/${stakingAmount.toFixed(4)} EDX`}</p>

                    <div className="flex mt-[25px] items-center justify-between">
                        <div className='flex mobile:flex-col tablet:flex-row laptop-small:flex-col'>
                            <div className="flex flex-col mr-[20px]">
                                <p className="z-10 text-[16px]">Tổng cộng(USDT)</p>
                                <p className="z-10 text-[21px]">0</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="z-10 text-[16px]">Tổng cộng(EDX)</p>
                                <p className="z-10 text-[21px]">0</p>
                            </div>
                        </div>
                        <Link href='staking_detail' className="z-10 capitalize h-[42px] w-[120px] bg-bg-button rounded-[4px] flex items-center justify-center cursor-pointer">
                            <i className="fa-solid fa-sack-dollar fa-sm"></i>
                            <p className="z-10 ml-[10px] normal-case">Đặt cọc</p>
                        </Link>
                    </div>
                </div>
            </Wallet>

            <div className="flex items-center justify-between mt-[20px] mb-[10px]">
                <p>Lịch sử đặt cọc</p>
                <Link href='report_staking' className="cursor-pointer">Xem thêm</Link>
            </div>
            <div className="flex justify-center mt-[50px]">
                <NoData />
            </div>
        </Default>
    )
}

export default Staking