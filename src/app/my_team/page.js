"use client"
import Default from '@/components/layouts/Default'
import Tabs from '@/components/Tabs'
import Wallet from '@/components/wallet'
import React from 'react'
import Detail from './components/detail'

const tabs = ['Chi tiết', 'CẤP ĐỘ 1', 'CẤP ĐỘ 2', 'CẤP ĐỘ 3']
const components = [<Detail />]

function MyTeam() {
    return (
        <Default title="Đội">
            <Wallet>
                <div className="flex justify-between relative py-[20px]">
                    <div className="flex flex-col items-center mobile:items-start tablet:items-center laptop-small:items-start flex-1">
                        <p>Tổng phần thưởng cộng đồng</p>
                        <p className='text-[20px]'>0 EDX</p>
                    </div>
                    <i className="fa-solid fa-user-tie text-[23px] p-6 text-primary mr-2.5 bg-[rgba(40,48,57,.5)] rounded-full z-10 absolute mobile:right-[-20px] tablet:right-[20px] laptop-small:right-[-20px] desktop:right-0 right-[20px]"></i>
                </div>
            </Wallet>
            <Tabs tabs={tabs} components={components} />
        </Default>
    )
}

export default MyTeam