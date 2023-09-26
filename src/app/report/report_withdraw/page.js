import Default from '@/components/layouts/Default'
import NoData from '@/components/NoData'
import React from 'react'

function ReportTransaction() {
    return (
        <Default title={"Báo cáo giao dịch"}>
            <div className='min-h-[80vh] flex items-center justify-center'>
                <NoData />
            </div>
        </Default>
    )
}

export default ReportTransaction