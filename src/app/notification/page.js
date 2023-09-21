"use client"
import React from 'react'
import NoData from '@/components/NoData'
import Default from '@/components/layouts/Default'

const Notification = () => {

    return (
        <Default title={'Thông báo'}>
            <div className="flex justify-center mt-[20vh]">
                <NoData />
            </div>
        </Default>
    )
}

export default Notification