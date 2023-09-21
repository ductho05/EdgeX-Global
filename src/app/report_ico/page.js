import Default from '@/components/layouts/Default'
import NoData from '@/components/NoData'
import React from 'react'

function ReportIco() {
    return (
        <Default title={'Lịch sử ICO'}>
            <div className="min-h-[80vh] flex items-center justify-center">
                <NoData />
            </div>
        </Default>
    )
}

export default ReportIco