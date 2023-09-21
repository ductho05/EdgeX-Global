"use client"
import Default from '@/components/layouts/Default'
import NoData from '@/components/NoData'
import React from 'react'

function ReportStaking() {

    return (
        <Default title={'Thống kê đặt cọc'}>
            <div className="flex items-center justify-center min-h-[80vh]">
                <NoData />
            </div>
        </Default>
    )
}

export default ReportStaking