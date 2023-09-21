import React from 'react'
import Progress from '../Progress'
import { Button } from '@mui/material'

function CioItem() {
    return (
        <div className='p-[20px] rounded-[10px] mt-[15px] bg-colorCard border border-solid border-primary'>
            <p className='text-[22px]'>Vòng 1</p>
            <p className='text-[16px]'>1EDX = 0.03USDT</p>
            <p className='text-[16px]'>Số dư: 150000000 EDX</p>
            <p className='text-[16px]'>Thời gian còn lại: 232 Ngày</p>
            <Progress value={0} totalValue={150000000} />
            <Button variant='contained' className='z-10 mt-[20px] w-full bg-primary hover:bg-primary'>Mua ngay</Button>
        </div>
    )
}

export default CioItem