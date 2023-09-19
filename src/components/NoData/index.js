import React from 'react'

function NoData() {
    return (
        <div className='flex items-center justify-center flex-col rounded-[5px] w-[240px] h-[240px] p-[20px] bg-colorCard'>
            <img src='/nodata.png' alt='No Data' className='h-[120px]' />
            <p className="mt-[16px] text-[16px]">Không tìm thấy dữ liệu</p>
        </div>
    )
}

export default NoData